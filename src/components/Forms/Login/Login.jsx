import React, { useState } from 'react';
import classnames from 'classnames';
import { useForm } from 'react-hook-form';
import { REGEXP_EMAIL } from '/src/constants/regexp.jsx';

import UiInput from '/src/components/Ui/Input/Input.jsx';
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
		formState: { errors },
		reset,
		trigger,
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

	const onSuccess = ( data ) => {
		console.log( 'success', data );
	};

	const onError = ( data ) => {
		console.log( 'error', data );
	};

	const onInvalid = async( event ) => {
		event.preventDefault();
		await trigger();
	};

	return (
		<form
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
					: 'default' }
				message={ errors.password?.message }
				onChange={ onChange( 'password' ) }
			>Password</UiInput>

			<UiButton
				type={ 'submit' }
			>Submit</UiButton>
		</form>
	);
};

export default FormLogin;
