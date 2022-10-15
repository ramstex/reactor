import React, { useState } from 'react';
import classnames from 'classnames';
import { useForm } from 'react-hook-form';
import { REGEXP_EMAIL } from '/src/constants/regexp.jsx';

import useApi from '../../../plugins/api.jsx';

import UiInput from '/src/components/Ui/Input/Input.jsx';
import UiForm from '/src/components/Ui/Form/Form.jsx';
import UiButton from '/src/components/Ui/Button/Button.jsx';

import './Registration.scss';

const FormLogin = ( props ) => {
	const { className } = props;

	const classNameRoot = classnames(
		className,
		'form-registration'
	);

	const { query } = useApi();

	const {
		register,
		handleSubmit,
		formState: {
			errors,
			isValid,
			isSubmitSuccessful,
		},
		trigger,
		setError,
	} = useForm( {
		mode: 'onChange',
		reValidateMode: 'onSubmit',
	} );

	const [ form, setForm ] = useState( {
		fio: '',
		email: '',
		password: '',
		confirm: '',
	} );

	const [ inProcess, setInProcess ] = useState( false );

	//Обработчик ввода
	const onChange = ( name ) => {
		return ( event ) => {
			setForm( {
				...form,
				[ name ]: event.target.value,
			} );
		};
	};

	// Обработчик сабмита при успешной валидации на фронте
	const onSuccess = async () => {
		setInProcess( true );

		const data = new FormData();
		data.append( 'fio', form.fio );
		data.append( 'email', form.email );
		data.append( 'password', form.password );

		return await query( 'post', '/', {
			do: 'registration',
			json: undefined,
		}, data )
			.then( ( response ) => {
				onSuccessSubmit( response );
			} )
			.catch( ( error ) => {
				onErrorSubmit( error );
			} )
			.finally( () => {
				setInProcess( false );
			} );
	};

	// Обработчик сабмита при ошибке валидации на фронте
	const onError = ( data ) => {
		console.log( 'error', data );
	};

	// Обработчик успешного ответа с бека
	const onSuccessSubmit = ( response ) => {
		console.log( 'SUCCESS SUBMIT REGISTRATION' );

		if ( response.success ) {
			console.log( 'SUCCESS REGISTRATION' );
		} else {
			console.log( 'ERROR REGISTRATION', response.error );
		}
	};

	// Обработчик ошибки в ответе с бека
	const onErrorSubmit = ( error ) => {
		setError( error.name, error.error );
	};

	const onInvalid = async ( event ) => {
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
					'fio',
					{
						required: {
							value: true,
							message: 'Required',
						},
					}
				) }
				value={ form.fio }
				state={ errors.fio
					? 'error'
					: isValid && isSubmitSuccessful
						? 'success'
						: 'default' }
				message={ errors.fio?.message }
				onChange={ onChange( 'fio' ) }
			>Fio</UiInput>

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
				switchable
				onChange={ onChange( 'password' ) }
			>Password</UiInput>

			<UiInput
				{ ...register(
					'confirm',
					{
						required: {
							value: true,
							message: 'Required',
						},
						pattern: {
							value: form.password,
							message: 'Confirm',
						},
						validate: ( value ) => {
							return value === form.password || 'The passwords do not match';
						},
					}
				) }
				type={ 'password' }
				value={ form.confirm }
				state={ errors.confirm
					? 'error'
					: isValid && isSubmitSuccessful
						? 'success'
						: 'default' }
				message={ errors.confirm?.message }
				switchable
				onChange={ onChange( 'confirm' ) }
			>Confirm</UiInput>

			<UiButton
				type={ 'submit' }
				disabled={ inProcess }
			>Submit</UiButton>
		</UiForm>
	);
};

export default FormLogin;
