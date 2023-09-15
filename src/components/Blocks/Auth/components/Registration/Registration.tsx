import { useState } from 'react';
import classBuilder from '../../../../../plugins/classBuilder';
import useUser from '../../../../../controllers/user/useUser';
import useForm from '../../../../../modules/form/index';
import { EButtonTemplate, EButtonType } from '../../../../Ui/Button/helpers';
import { ERegistrationForm } from './helpers';
import { EAuthStates } from '../../helper';

import Form, { FormTextField, FormSubmit } from '../../../../Ui/Form/Form';
import Button from '../../../../Ui/Button/Button';
import Input from '../../../../Ui/Input/Input';
import Checkbox from '../../../../Ui/Checkbox/Checkbox';

import './style.scss';

import type { TOnInvalid, TOnSubmit } from '../../../../../types/handlers';
import type { TEventChange } from '../../../../../types/types';
import type { TRegistrationComponent, TRegistrationName } from './types';
import { types } from 'sass';
import Boolean = types.Boolean;

const rootClassName = 'registration';

const Registration: TRegistrationComponent = ( props ) => {
	const {
		className,
		onSuccess,
		onError,
	} = props;

	const {
		register,
		setState,
	} = useUser();

	const {
		form,
		setForm,
		validateForm,
		validation,
		// setFormErrors,
	} = useForm( {
		form: {
			email: '',
			password: '',
			confirm: '',
			agreement: false,
		},

		rules: {
			[ ERegistrationForm.email ]: {
				required: true,
				email: true,
			},

			[ ERegistrationForm.password ]: {
				required: true,
				equals: ERegistrationForm.confirm,
			},

			[ ERegistrationForm.confirm ]: {
				required: true,
				equals: ERegistrationForm.password,
			},

			[ ERegistrationForm.agreement ]: { required: true },
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

	const onChangeText = ( key: TRegistrationName ) => {
		return ( event?: TEventChange ) => {
			setForm( {
				[ key ]: event
					? event.target.value
					: '',
			} );
		};
	};

	const onChangeBox = ( key: TRegistrationName ) => {
		return ( event?: TEventChange ) => {
			setForm( { [ key ]: !!event?.target.checked } );
		};
	};

	const onInputClear = ( key: TRegistrationName ) => {
		return () => {
			setForm( { [ key ]: '' } );
		};
	};

	const onSubmit: TOnSubmit = async ( event ) => {
		event?.preventDefault();

		const validateSuccess = await validateForm();

		if ( validateSuccess ) {
			const fData = new FormData();

			fData.append( ERegistrationForm.email, String( form.email ) );
			fData.append( ERegistrationForm.password, String( form.password ) );

			const response = await register( fData );

			if ( response.error ) {
				setError( response.error );
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

	const onLogin = () => {
		setState( EAuthStates.login );
	}

	return (
		<Form
			className={ classNames.root }
			onSubmit={ onSubmit }
			onInvalid={ onInvalid }
		>
			<h3>Registration</h3>

			<FormTextField>
				<Input
					className={ classNames.input.email }
					type={ 'email' }
					placeholder={ 'email' }
					name={ ERegistrationForm.email }
					value={ String( form.email ) }
					message={ validation.items[ ERegistrationForm.email ]?.message }
					autocomplete={ 'off' }
					onChange={ onChangeText( ERegistrationForm.email ) }
				/>
			</FormTextField>

			<FormTextField>
				<Input
					className={ classNames.input.password }
					type={ 'password' }
					placeholder={ 'password' }
					name={ ERegistrationForm.password }
					value={ String( form.password ) }
					message={ validation.items[ ERegistrationForm.password ]?.message }
					autocomplete={ 'off' }
					clearable
					onChange={ onChangeText( ERegistrationForm.password ) }
					onClear={ onInputClear( ERegistrationForm.password ) }
				/>
			</FormTextField>

			<FormTextField>
				<Input
					className={ classNames.input.confirm }
					type={ 'password' }
					placeholder={ 'confirm password' }
					name={ ERegistrationForm.confirm }
					value={ String( form.confirm ) }
					message={ validation.items[ ERegistrationForm.confirm ]?.message }
					autocomplete={ 'off' }
					clearable
					onChange={ onChangeText( ERegistrationForm.confirm ) }
					onClear={ onInputClear( ERegistrationForm.confirm ) }
				/>
			</FormTextField>

			<FormSubmit>
				<Checkbox
					checked={ !!form.agreement }
					message={ validation.items[ ERegistrationForm.agreement ]?.message }
					required
					onChange={ onChangeBox( ERegistrationForm.agreement ) }
				>
					Apply an agreement
				</Checkbox>
			</FormSubmit>

			<FormSubmit>
				<Button
					className={ classNames.submit }
					type={ EButtonType.submit }
				>Register</Button>

				<Button
					className={ classNames.login }
					template={ EButtonTemplate.link }
					onClick={ onLogin }
				>Have an account already?</Button>
			</FormSubmit>

			{ !!error &&
				<FormSubmit>
					<p className={ classNames.error }>{ error }</p>
				</FormSubmit>
			}
		</Form>
	);
}

export default Registration;
