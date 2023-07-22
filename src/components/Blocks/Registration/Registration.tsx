import { useState } from 'react';
import classBuilder from '../../../plugins/classBuilder';
import useUser from '../../../controllers/user/useUser';
import { EButtonType } from '../../Ui/Button/helpers';
import { ERegistrationForm } from './helpers';

import Form from '../../Ui/Form/Form';
import Button from '../../Ui/Button/Button';
import Input from '../../Ui/Input/Input';

import type { TRegistrationComponent, TRegistrationData } from './types';
import type { TOnInvalid, TOnSubmit } from '../../../types/handlers';
import type { TRegistrationName } from './types';
import type { TEventChange } from '../../../types/types';

const Registration: TRegistrationComponent = ( props ) => {
	const {
		className,
		onSuccess,
		onError,
	} = props;

	const { register } = useUser();

	const [ form, setForm ] = useState<TRegistrationData>( {
		email: '',
		password: '',
	} );

	const [ error, setError ] = useState<string | null>( null );

	const classNameRoot = classBuilder( 'registration', className );

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
			className={ classNameRoot }
			onSubmit={ onSubmit }
			onInvalid={ onInvalid }
		>
			<div className={ 'form__item' }>
				<Input
					type={ 'email' }
					placeholder={ 'email' }
					name={ ERegistrationForm.email }
					value={ form.email }
					onChange={ onChange( ERegistrationForm.email ) }
				/>
			</div>

			<div className={ 'form__item' }>
				<Input
					type={ 'password' }
					placeholder={ 'password' }
					name={ ERegistrationForm.password }
					value={ form.password }
					clearable
					onChange={ onChange( ERegistrationForm.password ) }
					onClear={ onChange( ERegistrationForm.password ) }
				/>
			</div>

			<Button
				className={ 'form__item' }
				type={ EButtonType.submit }
			>Register</Button>

			{ !!error && <p>{ error }</p> }
		</Form>
	);
}

export default Registration;
