import { useState, useEffect } from 'react';
import { applyItemValidation } from './helper';
import usePrevious from '../previous';

import type {
	TUseForm,
	TSetForm,
	TFormReset,
	TFormCreateKeysList,
	TFormValidation,
	TFormItems,
	TFormValidationRuleResult,
	TSetFormErrors
} from './types';
import { TFormValidate, TFormValidateWithErrors, TValidationErrors } from './types';

const getValidationDefault: ( form: TFormItems ) => TFormValidation = ( form ) => {
	return {
		success: true,
		items: Object.keys( form ).reduce( ( result, current ) => {
			return {
				...result,
				[ current ]: {
					message: null,
					checked: true,
					success: true,
				},
			};
		}, {} ),
	}
}

const useForm: TUseForm = ( {
	form: formProp,
	rules: rulesProp = {},
} ) => {
	const [ initialized, setInitialized ] = useState( false );
	const [ formState, setFormState ] = useState( formProp );
	const formPrev = usePrevious( formState );
	const [ initialForm ] = useState( formProp );

	const setForm: TSetForm = ( data = {} ) => {
		const result = {
			...formState,
			...data,
		};

		setFormState( result );

		return result;
	};

	const [ rulesState ] = useState( rulesProp );
	const [ validation, setValidation ] = useState( getValidationDefault( formProp ) );

	const createKeysList: TFormCreateKeysList = ( keys ) => {
		let keysList: string[];

		if ( typeof keys === 'string' ) {
			keysList = [ keys ];
		} else if ( Array.isArray( keys ) ) {
			keysList = [ ...keys ];
		} else {
			keysList = [ ...Object.keys( formState ) ];
		}

		return keysList;
	}

	const getChangedKeys: () => string[] = () => {
		return formPrev
			? Object.entries( formPrev ).reduce( ( result: string[], [ key, value ] ) => {
				if ( formState.hasOwnProperty( key ) && formState[ key ] !== value ) {
					result.push( key );
				}

				return result;
			}, [] )
			: [];
	}

	const resetForm: TFormReset = ( keys ) => {
		const keysList = createKeysList( keys );
		const values = keysList.reduce( ( acc, curr ) => {
			return {
				...acc,
				[ curr ]: initialForm[ curr ],
			};
		}, {} );

		setForm( values );
	};

	// @ts-ignore
	const validate: TFormValidate = ( keys = Object.keys( formState ), handler ) => {
		const keysList = createKeysList( keys );
		const result: TFormValidation = getValidationDefault( formState );

		Object.entries( formState ).forEach( ( [ key, value ] ) => {
			const rulesByKey = rulesState[ key ];

			const itemValidationResult = applyItemValidation( formState, value, rulesByKey );

			if ( typeof handler === 'function' ) {
				result.items[ key ] = handler( itemValidationResult, key );
			} else {
				const itemChecked = keysList.indexOf( key ) >= 0
					? false
					: validation.items[ key ].checked;

				result.items[ key ] = {
					...itemValidationResult,
					checked: itemChecked,
					message: itemChecked
						? validation.items[ key ].message
						: null,
					success: itemChecked
						? validation.items[ key ].success
						: true,
				};
			}
		} );

		for ( const key in result.items ) {
			if ( !result.items[ key ].success ) {
				result.success = false;
				break;
			}
		}
		setValidation( { ...result } );

		return result;
	}

	const validateAllAndCheck: TFormValidate = () => {
		return validate( undefined, ( result: TFormValidationRuleResult ) => {
			return {
				...result,
				checked: true,
				message: result.message,
				success: result.success,
			};
		} );
	};

	const validateAllWithErrors: TFormValidateWithErrors = ( errors: TValidationErrors ) => {
		return validate( Object.keys( errors ), ( result: TFormValidationRuleResult, key: string ) => {
			return {
				...result,
				checked: true,
				message: errors[ key ],
				success: false,
			};
		} );
	};

	const setFormErrors: TSetFormErrors = ( errors ) => {
		validateAllWithErrors( errors );
	}

	useEffect( () => {
		if ( initialized ) {
			validate( getChangedKeys() );
		}
	}, [ formState ] );

	useEffect( () => {
		setInitialized( true );
	}, [] );

	return {
		form: formState,
		initialForm,
		setForm,
		resetForm,
		validateForm: validateAllAndCheck,
		validation,
		setFormErrors,
	};
}

export default useForm;
