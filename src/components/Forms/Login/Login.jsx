import React, { useState } from 'react';
import classnames from 'classnames';
import { useForm } from 'react-hook-form';
import { REGEXP_EMAIL } from '/src/constants/regexp.jsx';

import UiInput from '/src/components/Ui/Input/Input.jsx';
import UiForm from '/src/components/Ui/Form/Form.jsx';
import UiButton from '/src/components/Ui/Button/Button.jsx';

import './Login.scss';

const FormLogin = ( props ) => {
	const { className } = props;

	const classNameRoot = classnames(
		className,
		'form-login'
	);

	const {
		register,
		handleSubmit,
		formState: {
			errors,
			isValid,
			isSubmitSuccessful,
		},
		reset,
		trigger,
		setError,
	} = useForm( {
		reValidateMode: 'onChange',
		mode: 'onChange',
	} );

	const [ form, setForm ] = useState( {
		email: '',
		password: '',
	} );

	const onChange = ( name ) => {
		return ( event ) => {
			setForm( {
				...form,
				[ name ]: event.target.value,
			} );

			reset();
		};
	};

	const onSuccessSubmit = () => {
	};

	const onErrorSubmit = ( error ) => {
		setError( error.name, error.error );
	};

	const onSuccess = () => {
		return new Promise( ( onResolve, onReject ) => {
			setTimeout( () => {
				if ( form.email !== 'qwe@qwe.qwe' ) {
					onReject(
						{
							name: 'email',
							error: {
								type: 'notFound',
								message: 'Not found!',
							},
						} );

					return;
				}

				if ( form.password !== '1234' ) {
					onReject(
						{
							name: 'password',
							error: {
								type: 'wrong',
								message: 'Wrong password',
							},
						} );

					return;
				}

				onResolve();
			}, 2000 );
		} )
			.then( () => {
				onSuccessSubmit();
			} )
			.catch( ( error ) => {
				onErrorSubmit( error );
			} );
	};

	const onError = ( data ) => {
		console.log( 'error', data );
	};

	const onInvalid = async( event ) => {
		event.preventDefault();
		await trigger();
	};

	return (
		<UiForm
			className={ classNameRoot }
			onSubmit={ handleSubmit( onSuccess, onError ) }
			onInvalid={ onInvalid }
		>
			<UiInput
				{ ...register(
					'email',
					{
						required: {
							value: true,
							message: 'Required',
						},
						pattern: {
							value: REGEXP_EMAIL,
							message: 'Email',
						},
					}
				) }
				type={ 'email' }
				value={ form.email }
				state={ errors.email
					? 'error'
					: isValid && isSubmitSuccessful
						? 'success'
						: 'default' }
				message={ errors.email?.message }
				onChange={ onChange( 'email' ) }
			>E-Mail</UiInput>

			<UiInput
				{ ...register(
					'password',
					{
						required: {
							value: true,
							message: 'Required',
						},
					}
				) }
				type={ 'password' }
				value={ form.password }
				state={ errors.password
					? 'error'
					: isValid && isSubmitSuccessful
						? 'success'
						: 'default' }
				message={ errors.password?.message }
				onChange={ onChange( 'password' ) }
			>Password</UiInput>

			<UiButton
				type={ 'submit' }
			>Submit</UiButton>
		</UiForm>
	);
};

export default FormLogin;
