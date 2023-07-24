import { useState } from 'react';
import classBuilder from '../../../../../plugins/classBuilder';
import useUser from '../../../../../controllers/user/useUser';
import { EButtonType } from '../../../../Ui/Button/helpers';
import { ERegistrationForm } from './helpers';

import Form from '../../../../Ui/Form/Form';
import Button from '../../../../Ui/Button/Button';
import Input from '../../../../Ui/Input/Input';

import './style.scss';

import type { TOnInvalid, TOnSubmit } from '../../../../../types/handlers';
import type { TEventChange } from '../../../../../types/types';
import type { TRegistrationComponent, TRegistrationData, TRegistrationName } from './types';

const rootClassName = 'registration';

const Registration: TRegistrationComponent = ( props ) => {
	const {
		className,
		onSuccess,
		onError,
		onLogin,
	} = props;

	const { register } = useUser();

	const [ form, setForm ] = useState<TRegistrationData>( {
		email: '',
		password: '',
	} );

	const [ error, setError ] = useState<string | null>( null );

	const classNames = {
		root: classBuilder( rootClassName, className ),
		input: {
			email: classBuilder( `${ rootClassName }__input _email`, { _empty: !form.email } ),
			password: classBuilder( `${ rootClassName }__input _password`, { _empty: !form.password } ),
		},
		submit: classBuilder( `${ rootClassName }__submit` ),
		error: classBuilder( `${ rootClassName }__error` ),
		login: classBuilder( `${ rootClassName }__login` ),
	};

	const onChange = ( key: TRegistrationName ) => {
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
		fData.append( ERegistrationForm.email, form.email );
		fData.append( ERegistrationForm.password, form.password );

		const response = await register( fData );

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
			className={ classNames.root }
			onSubmit={ onSubmit }
			onInvalid={ onInvalid }
		>
			<Input
				className={ classNames.input.email }
				type={ 'email' }
				placeholder={ 'email' }
				name={ ERegistrationForm.email }
				value={ form.email }
				autocomplete={ 'off' }
				onChange={ onChange( ERegistrationForm.email ) }
			/>

			<Input
				className={ classNames.input.password }
				type={ 'password' }
				placeholder={ 'password' }
				name={ ERegistrationForm.password }
				value={ form.password }
				autocomplete={ 'off' }
				clearable
				onChange={ onChange( ERegistrationForm.password ) }
			/>

			<Button
				className={ classNames.submit }
				type={ EButtonType.submit }
			>Register</Button>

			{ !!error && <p className={ classNames.error }>{ error }</p> }

			<p
				className={ classNames.login }
				onClick={ onLogin }
			>Have an account already?</p>
		</Form>
	);
}

export default Registration;
