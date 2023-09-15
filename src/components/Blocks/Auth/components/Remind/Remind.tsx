import { useState } from 'react';
import classBuilder from '../../../../../plugins/classBuilder';
import useUser from '../../../../../controllers/user/useUser';
import useForm from '../../../../../modules/form/index';
import { EButtonTemplate, EButtonType } from '../../../../Ui/Button/helpers';
import { ERemindForm } from './helpers';

import Form, { FormTextField, FormSubmit } from '../../../../Ui/Form/Form';
import Button from '../../../../Ui/Button/Button';
import Input from '../../../../Ui/Input/Input';

import './style.scss';

import type { TRemindComponent } from './types';
import type { TOnInvalid, TOnSubmit } from '../../../../../types/handlers';
import type { TRemindName } from './types';
import type { TEventChange } from '../../../../../types/types';
import { EAuthStates } from '../../helper';

const rootClassName = 'remind';

const Remind: TRemindComponent = ( props ) => {
	const {
		className,
		onSuccess,
		onError,
	} = props;

	const {
		remind,
		setState,
	} = useUser();

	const {
		form,
		setForm,
		validateForm,
		validation,
		// setFormErrors,
	} = useForm( {
		form: { [ ERemindForm.email ]: '' },

		rules: {
			[ ERemindForm.email ]: {
				required: true,
				email: true,
			},
		},
	} );

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

		const validateSuccess = await validateForm();

		if ( validateSuccess.success ) {
			const fData = new FormData();
			fData.append( ERemindForm.email, String( form.email ) );
			const response = await remind( fData );

			console.log( 'Remind response', response );

			if ( response.error ) {
				setError( response.error );
				!!onError && onError();
			} else {
				setSuccess( true );
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
		<div className={ classNames.root }>
			<h3>Remind</h3>

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
						<FormTextField>
							<Input
								className={ classNames.input.email }
								type={ 'email' }
								placeholder={ 'email' }
								name={ ERemindForm.email }
								message={ validation.items[ ERemindForm.email ]?.message }
								value={ String( form.email ) }
								onChange={ onChange( ERemindForm.email ) }
							/>
						</FormTextField>

						<FormSubmit>
							<Button
								className={ classNames.submit }
								type={ EButtonType.submit }
							>Remind</Button>

							<Button
								className={ classNames.login }
								template={ EButtonTemplate.link }
								onClick={ onLogin }
							>Back to login</Button>
						</FormSubmit>

						<FormTextField>
							{ !!error && <p className={ classNames.error }>{ error }</p> }
						</FormTextField>
					</Form>
			}
		</div>

	);
}

export default Remind;
