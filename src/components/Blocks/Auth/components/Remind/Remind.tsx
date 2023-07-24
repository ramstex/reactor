import { useState } from 'react';
import classBuilder from '../../../../../plugins/classBuilder';
import useUser from '../../../../../controllers/user/useUser';
import { EButtonType } from '../../../../Ui/Button/helpers';
import { ERemindForm } from './helpers';

import Form from '../../../../Ui/Form/Form';
import Button from '../../../../Ui/Button/Button';
import Input from '../../../../Ui/Input/Input';

import './style.scss';

import type { TRemindComponent, TRemindData } from './types';
import type { TOnInvalid, TOnSubmit } from '../../../../../types/handlers';
import type { TRemindName } from './types';
import type { TEventChange } from '../../../../../types/types';

const rootClassName = 'remind';

const Remind: TRemindComponent = ( props ) => {
	const {
		className,
		onSuccess,
		onError,
		onLogin,
	} = props;

	const { remind } = useUser();

	const [ form, setForm ] = useState<TRemindData>( { email: '' } );
	const [ isSuccess, setSuccess ] = useState<boolean>( false );
	const [ error, setError ] = useState<string | null>( null );

	const classNames = {
		root: classBuilder( rootClassName,className ),
		form: classBuilder( `${ rootClassName }__form` ),
		input: { email: classBuilder( `${ rootClassName }__input _email` ) },
		submit: classBuilder( `${ rootClassName }__submit` ),
		error: classBuilder( `${ rootClassName }__error` ),
		login: classBuilder( `${ rootClassName }__login` ),
		success: classBuilder( `${ rootClassName }__success` ),
		title: classBuilder( `${ rootClassName }__title` ),
	};

	const onChange = ( key: TRemindName ) => {
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
		fData.append( ERemindForm.email, form.email );

		const response = await remind( fData );

		if ( response.error ) {
			setError( response.error );
			!!onError && onError();
		} else {
			setSuccess( true );
			!!onSuccess && onSuccess();
		}
	};

	const onInvalid: TOnInvalid = ( event ) => {
		event?.preventDefault();
	};

	return (
		<div className={ classNames.root }>
			{
				isSuccess
					? <div className={ classNames.success }>
						<h5 className={ classNames.title }>SUCCESS!</h5>

						<p
							className={ classNames.login }
							onClick={ onLogin }
						>Back to login</p>
					</div>
					: <Form
						className={ classNames.form }
						onSubmit={ onSubmit }
						onInvalid={ onInvalid }
					>
						<Input
							className={ classNames.input.email }
							type={ 'email' }
							placeholder={ 'email' }
							name={ ERemindForm.email }
							value={ form.email }
							onChange={ onChange( ERemindForm.email ) }
						/>

						<Button
							className={ classNames.submit }
							type={ EButtonType.submit }
						>Remind</Button>

						{ !!error && <p className={ classNames.error }>{ error }</p> }

						<p
							className={ classNames.login }
							onClick={ onLogin }
						>Back to login</p>
					</Form>
			}
		</div>

	);
}

export default Remind;
