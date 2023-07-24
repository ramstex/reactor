import { useState } from 'react';
import classBuilder from '../../../plugins/classBuilder';
import useUser from '../../../controllers/user/useUser';
import { EButtonType } from '../../Ui/Button/helpers';
import { ERemindForm } from './helpers';

import Form from '../../Ui/Form/Form';
import Button from '../../Ui/Button/Button';
import Input from '../../Ui/Input/Input';

import type { TRemindComponent, TRemindData } from './types';
import type { TOnInvalid, TOnSubmit } from '../../../types/handlers';
import type { TRemindName } from './types';
import type { TEventChange } from '../../../types/types';

const Remind: TRemindComponent = ( props ) => {
	const {
		className,
		onSuccess,
		onError,
	} = props;

	const { remind } = useUser();

	const [ form, setForm ] = useState<TRemindData>( { email: '' } );
	const [ isSuccess, setSuccess ] = useState<boolean>( false );
	const [ error, setError ] = useState<string | null>( null );

	const classNameRoot = classBuilder( 'remind', className );

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
		<>
			{
				isSuccess
					? <p>SUCCESS</p>
					: <Form
						className={ classNameRoot }
						onSubmit={ onSubmit }
						onInvalid={ onInvalid }
					>
						<h3>Remind</h3>

						<div className={ 'form__item' }>
							<Input
								type={ 'email' }
								placeholder={ 'email' }
								name={ ERemindForm.email }
								value={ form.email }
								onChange={ onChange( ERemindForm.email ) }
							/>
						</div>

						<Button
							className={ 'form__item' }
							type={ EButtonType.submit }
						>Remind</Button>

						{ !!error && <p>{ error }</p> }
					</Form>
			}
		</>

	);
}

export default Remind;
