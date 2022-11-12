import React, { useState } from 'react';
import classnames from 'classnames';
import { useForm } from 'react-hook-form';
import { REGEXP_EMAIL } from '/src/constants/regexp.jsx';
import { useNavigate } from 'react-router-dom';

import useApi from '../../../plugins/api.jsx';
import _ROUTES from '../../../../config/routes.js';

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

	const navigate = useNavigate();

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
		reValidateMode: 'onChange',
	} );

	const [ form, setForm ] = useState( {
		login: '',
		password: '',
	} );

	const isUser = useSelector( ( state ) => {
		return state.user.isUser;
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
		data.append( 'login', form.login );
		data.append( 'password', form.password );

		await query( 'post', '/', {
			do: 'login',
			json: undefined,
		}, data )
			.then( ( response ) => {
				onSuccessSubmit( response.data );
			} )

			.catch( ( error ) => {
				onErrorSubmit( error );

				setInProcess( false );
			} );
	};

	// Обработчик сабмита при ошибке валидации на фронте
	const onError = () => {
	};

	// Обработчик успешного ответа с бека
	const onSuccessSubmit = async ( data ) => {
		if ( data.success ) {
			await query( 'get', '/', {
				do: 'user',
				json: undefined,
			} )
				.then( ( response ) => {
					dispatch( setUser( response.data ) );

					toProfile();
				} )

				.finally( () => {
					setInProcess( false );
				} );
		} else {
			setError( 'login', { type: 'login' } );
			setError( 'password', {
				type: 'login',
				message: 'Email или пароль не верные',
			} );

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

	const toProfile = () => {
		navigate( _ROUTES.profile );
	};

	if ( isUser ) {
		toProfile();
	}

	return (
		<UiForm
			className={ classNameRoot }
			onSubmit={ handleSubmit( onSuccess, onError ) }
			onInvalid={ onInvalid }
		>
			<UiInput
				{ ...register(
					'login',
					{
						required: {
							value: true,
							message: 'Обязательное поле',
						},
						pattern: {
							value: REGEXP_EMAIL,
							message: 'Email введён некорректно',
						},
					}
				) }
				type={ 'email' }
				value={ form.login }
				state={ errors.login
					? 'error'
					: isValid && isSubmitSuccessful
						? 'success'
						: 'default' }
				message={ errors.login?.message }
				onChange={ onChange( 'login' ) }
			>E-Mail</UiInput>

			<UiInput
				{ ...register(
					'password',
					{
						required: {
							value: true,
							message: 'Обязательное поле',
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

			<UiButton
				type={ 'submit' }
				disabled={ inProcess }
			>Submit</UiButton>
		</UiForm>
	);
};

export default FormLogin;
