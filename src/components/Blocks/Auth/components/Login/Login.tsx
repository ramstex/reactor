import { useState } from 'react';
import classBuilder from '../../../../../plugins/classBuilder';
import useUser from '../../../../../services/user/useUser';
import useForm from '../../../../../modules/form/index';
import { EButtonTemplate, EButtonType } from '../../../../Ui/Button/helpers';
import { EAuthStates } from '../../helper';
import { ELoginForm } from './helpers';

import Form, { FormTextField, FormSubmit } from '../../../../Ui/Form/Form';
import Button from '../../../../Ui/Button/Button';
import Input from '../../../../Ui/Input/Input';

import './style.scss';

import type { TOnInvalid, TOnSubmit } from '../../../../../types/handlers';
import type { TEventChange } from '../../../../../types/types';
import type { TLoginComponent, TLoginName } from './types';

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

	const {
		form,
		setForm,
		validateForm,
		validation,
		setFormErrors,
	} = useForm( {
		form: {
			login: '',
			password: '',
		},

		rules: {
			[ ELoginForm.login ]: {
				required: true,
				email: true,
			},

			[ ELoginForm.password ]: { required: true },
		},
	} );

	const [ error ] = useState<string | null>( null );

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

		const validateSuccess = await validateForm();

		if ( validateSuccess.success ) {
			const fData = new FormData();
			fData.append( ELoginForm.login, String( form.login ) );
			fData.append( ELoginForm.password, String( form.password ) );

			const response = await login( fData );

			console.log( 'Login response', response );

			if ( response.error ) {
				if ( response.error.indexOf( 'или пароль неверные' ) >= 0 ) {
					setFormErrors( {
						login: 'Login or password are wrong',
						password: 'Login or password are wrong',
					} );
				}

				!!onError && onError();
			} else {
				!!onSuccess && onSuccess();
			}
		}
	};

	const onInvalid: TOnInvalid = async ( event ) => {
		event?.preventDefault();
		await validateForm();
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
					value={ String( form.login ) }
					message={ validation.items[ ELoginForm.login ]?.message }
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
					value={ String( form.password ) }
					message={ validation.items[ ELoginForm.password ]?.message }
					autocomplete={ 'off' }
					clearable
					onChange={ onChange( ELoginForm.password ) }
					onClear={ onChange( ELoginForm.password ) }
				/>
			</FormTextField>

			<FormTextField>
				<p
					className={ classNames.remind }
					onClick={ onRemind }
				>Forgot the password?</p>
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

			{ !!error &&
				<FormSubmit>
					<p className={ classNames.error }>{ error }</p>
				</FormSubmit>
			}
		</Form>
	);
}

export default Login;
