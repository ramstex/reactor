import React, { useState } from 'react';
import classnames from 'classnames';
import { useForm } from 'react-hook-form';
import { REGEXP_EMAIL } from '/src/constants/regexp.jsx';

import useApi from '../../../plugins/api.jsx';

import UiInput from '/src/components/Ui/Input/Input.jsx';
import UiForm from '/src/components/Ui/Form/Form.jsx';
import UiButton from '/src/components/Ui/Button/Button.jsx';

import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../../../store/user.js';

import './Login.scss';

const FormLogin = ( props ) => {
	const { className } = props;
	const dispatch = useDispatch();

	const classNameRoot = classnames(
		className,
		'form-login'
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
		email: '',
		password: '',
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
		data.append( 'login', form.email );
		data.append( 'password', form.password );

		await query( 'post', '/', {
			do: 'login',
			json: undefined,
		}, data )
			.then( ( response ) => {
				onSuccessSubmit( response );
			} )
			.catch( ( error ) => {
				onErrorSubmit( error );
				setInProcess( false );
			} )
	};

	// Обработчик сабмита при ошибке валидации на фронте
	const onError = ( data ) => {
		console.log( 'error validation front', data );
	};

	// Обработчик успешного ответа с бека
	const onSuccessSubmit = async ( data ) => {
		console.log( 'SUCCESS SUBMIT LOGIN', data );

		if ( data.success ) {
			await query( 'get', '/', {
				do: 'user',
				json: undefined,
			} )
				.then( ( response ) => {
					console.log( 'USER RESPONSE', response );
					dispatch( setUser( response ) );
				} )
				.finally( () => {
					setInProcess( false );
				} );
		} else {
			console.log( 'ERROR LOGIN', data.error );
			setInProcess( false );
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
				disabled={ inProcess }
			>Submit</UiButton>
		</UiForm>
	);
};

export default FormLogin;
