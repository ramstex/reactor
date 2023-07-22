import { useState } from 'react';
import classBuilder from '../../../plugins/classBuilder';
import useUser from '../../../controllers/user/useUser';
import { EButtonType } from '../../Ui/Button/helpers';
import { ELoginForm } from './helpers';

import Form from '../../Ui/Form/Form';
import Button from '../../Ui/Button/Button';
import Input from '../../Ui/Input/Input';

import type { TLoginComponent, TLoginData } from './types';
import type { TOnInvalid, TOnSubmit } from '../../../types/handlers';
import type { TLoginName } from './types';
import type { TEventChange } from '../../../types/types';

const Login: TLoginComponent = ( props ) => {
	const {
		className,
		onSuccess,
		onError,
	} = props;

	const { login } = useUser();

	const [ form, setForm ] = useState<TLoginData>( {
		login: '',
		password: '',
	} );

	const [ error, setError ] = useState<string | null>( null );

	const classNameRoot = classBuilder( 'login', className );

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

	return (
		<Form
			className={ classNameRoot }
			onSubmit={ onSubmit }
			onInvalid={ onInvalid }
		>
			<h3>Login</h3>

			<div className={ 'form__item' }>
				<Input
					type={ 'email' }
					placeholder={ 'email' }
					name={ ELoginForm.login }
					value={ form.login }
					onChange={ onChange( ELoginForm.login ) }
				/>
			</div>

			<div className={ 'form__item' }>
				<Input
					type={ 'password' }
					placeholder={ 'password' }
					name={ ELoginForm.password }
					value={ form.password }
					clearable
					onChange={ onChange( ELoginForm.password ) }
					onClear={ onChange( ELoginForm.password ) }
				/>
			</div>

			<Button
				className={ 'form__item' }
				type={ EButtonType.submit }
			>Login</Button>

			{ !!error && <p>{ error }</p> }
		</Form>
	);
}

export default Login;
