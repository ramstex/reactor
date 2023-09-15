import { useState } from 'react';
import classBuilder from '../../../../../plugins/classBuilder';
import useUser from '../../../../../controllers/user/useUser';
import { EButtonTemplate, EButtonType } from '../../../../Ui/Button/helpers';
import { ELoginForm } from './helpers';

import Form, { FormTextField, FormSubmit } from '../../../../Ui/Form/Form';
import Button from '../../../../Ui/Button/Button';
import Input from '../../../../Ui/Input/Input';

import './style.scss';

import type { TOnInvalid, TOnSubmit } from '../../../../../types/handlers';
import type { TEventChange } from '../../../../../types/types';
import type { TLoginComponent, TLoginData, TLoginName } from './types';
import { EAuthStates } from '../../helper';

const rootClassName = 'login';

const Login: TLoginComponent = ( props ) => {
	const {
		className,
		onSuccess,
		onError,
	} = props;

	const {
		login,
		setState,
	} = useUser();

	const [ form, setForm ] = useState<TLoginData>( {
		login: '',
		password: '',
	} );

	const [ error, setError ] = useState<string | null>( null );

	const classNames = {
		root: classBuilder( rootClassName, className ),
		input: {
			login: classBuilder( `${ rootClassName }__input _login` ),
			password: classBuilder( `${ rootClassName }__input _password` ),
		},
		submit: classBuilder( `${ rootClassName }__submit` ),
		error: classBuilder( `${ rootClassName }__error` ),
		registration: classBuilder( `${ rootClassName }__registration` ),
		remind: classBuilder( `${ rootClassName }__remind` ),
	};

	const onChange = ( key: TLoginName ) => {
		return ( event?: TEventChange ) => {
			setForm( {
				...form,
				[ key ]: event
					? event.target.value
					: '',
			} );
		};
	};

	const onSubmit: TOnSubmit = async ( event ) => {
		event?.preventDefault();

		const fData = new FormData();
		fData.append( ELoginForm.login, form.login );
		fData.append( ELoginForm.password, form.password );

		const response = await login( fData );

		if ( response.error ) {
			setError( response.error );
			!!onError && onError();
		} else {
			!!onSuccess && onSuccess();
		}
	};

	const onInvalid: TOnInvalid = ( event ) => {
		event?.preventDefault();
	};

	const onRegistration = () => {
		setState( EAuthStates.registration );
	}

	const onRemind = () => {
		setState( EAuthStates.remind );
	}

	return (
		<Form
			className={ classNames.root }
			onSubmit={ onSubmit }
			onInvalid={ onInvalid }
		>
			<h3>Login</h3>

			<FormTextField>
				<Input
					className={ classNames.input.login }
					type={ 'email' }
					placeholder={ 'email' }
					name={ ELoginForm.login }
					value={ form.login }
					autocomplete={ 'off' }
					onChange={ onChange( ELoginForm.login ) }
				/>
			</FormTextField>

			<FormTextField>
				<Input
					className={ classNames.input.password }
					type={ 'password' }
					placeholder={ 'password' }
					name={ ELoginForm.password }
					value={ form.password }
					autocomplete={ 'off' }
					clearable
					onChange={ onChange( ELoginForm.password ) }
					onClear={ onChange( ELoginForm.password ) }
				/>
			</FormTextField>

			<FormSubmit>
				<Button
					className={ classNames.submit }
					type={ EButtonType.submit }
				>Login</Button>

				<Button
					className={ classNames.registration }
					template={ EButtonTemplate.link }
					onClick={ onRegistration }
				>Don't have an account yet?</Button>
			</FormSubmit>

			<FormTextField>
				{ !!error && <p className={ classNames.error }>{ error }</p> }
			</FormTextField>

			<FormSubmit>
				<p
					className={ classNames.remind }
					onClick={ onRemind }
				>Forgot the password?</p>
			</FormSubmit>
		</Form>
	);
}

export default Login;
