import { useState } from 'react';
import classBuilder from '../../../../../plugins/classBuilder';
import useUser from '../../../../../controllers/user/useUser';
import useForm from '../../../../../modules/form/index';
import { EButtonType } from '../../../../Ui/Button/helpers';
import { ERegistrationForm } from './helpers';

import Form from '../../../../Ui/Form/Form';
import Button from '../../../../Ui/Button/Button';
import Input from '../../../../Ui/Input/Input';

import './style.scss';

import type { TOnInvalid, TOnSubmit } from '../../../../../types/handlers';
import type { TEventChange } from '../../../../../types/types';
import type { TRegistrationComponent, TRegistrationName } from './types';

const rootClassName = 'registration';

const Registration: TRegistrationComponent = ( props ) => {
	const {
		className,
		onSuccess,
		onError,
		onLogin,
	} = props;

	const { register } = useUser();

	const {
		form,
		setFormValue,
		reset,
		validate,
		validation,
	} = useForm( {
		form: {
			email: '',
			password: '',
			confirm: '',
		},

		rules: {
			email: {
				required: true,
				email: true,
			},

			password: {
				required: true,
				equals: ERegistrationForm.confirm,
			},

			confirm: {
				required: true,
				equals: ERegistrationForm.password,
			},
		},
	} );

	const [ error, setError ] = useState<string | null>( null );

	const classNames = {
		root: classBuilder( rootClassName, className ),
		input: {
			email: classBuilder( `${ rootClassName }__input _email`, { _empty: !form.email } ),
			password: classBuilder( `${ rootClassName }__input _password`, { _empty: !form.password } ),
			confirm: classBuilder( `${ rootClassName }__input _confirm`, { _empty: !form.confirm } ),
		},
		submit: classBuilder( `${ rootClassName }__submit` ),
		error: classBuilder( `${ rootClassName }__error` ),
		login: classBuilder( `${ rootClassName }__login` ),
	};

	const onChange = ( key: TRegistrationName ) => {
		return ( event?: TEventChange ) => {
			setFormValue( {
				[ key ]: event
					? event.target.value
					: '',
			} );
		};
	};

	const onSubmit: TOnSubmit = async ( event ) => {
		event?.preventDefault();

		const validateSuccess = await validate();
		console.log( 'onSubmit', validateSuccess );

		if ( validateSuccess ) {
			const fData = new FormData();
			Object.entries( form ).forEach( ( [ key, value ] ) => {
				fData.append( key, String( value ) );
			} );

			const response = await register( fData );

			if ( response.error ) {
				setError( response.error );
				!!onError && onError();
			} else {
				!!onSuccess && onSuccess();
			}
		}
	};

	const onInvalid: TOnInvalid = ( event ) => {
		event?.preventDefault();
	};

	const onResetClick = () => {
		reset();
	}

	const onValidateClick: TOnSubmit = async ( event ) => {
		event?.preventDefault();

		const validateSuccess = await validate();
		console.log( 'onValidateClick', validateSuccess );
	}

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
				value={ String( form.email ) }
				message={ validation.items[ ERegistrationForm.email ]?.message }
				autocomplete={ 'off' }
				onChange={ onChange( ERegistrationForm.email ) }
			/>

			<Input
				className={ classNames.input.password }
				type={ 'password' }
				placeholder={ 'password' }
				name={ ERegistrationForm.password }
				value={ String( form.password ) }
				message={ validation.items[ ERegistrationForm.password ]?.message }
				autocomplete={ 'off' }
				clearable
				onChange={ onChange( ERegistrationForm.password ) }
			/>

			<Input
				className={ classNames.input.confirm }
				type={ 'password' }
				placeholder={ 'confirm password' }
				name={ ERegistrationForm.confirm }
				value={ String( form.confirm ) }
				message={ validation.items[ ERegistrationForm.confirm ]?.message }
				autocomplete={ 'off' }
				clearable
				onChange={ onChange( ERegistrationForm.confirm ) }
			/>

			<Button
				className={ classNames.submit }
				type={ EButtonType.submit }
			>Register</Button>

			<Button
				className={ classNames.submit }
				onClick={ onResetClick }
			>Reset</Button>

			<Button
				className={ classNames.submit }
				onClick={ onValidateClick }
			>Validate</Button>

			{ !!error && <p className={ classNames.error }>{ error }</p> }

			<p
				className={ classNames.login }
				onClick={ onLogin }
			>Have an account already?</p>
		</Form>
	);
}

export default Registration;
