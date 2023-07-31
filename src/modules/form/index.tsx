import { useState, useEffect } from 'react';
import { applyItemValidation } from './helper';

import type {
	TForm, TFormSetValue, TFormReset, TFormCreateKeysList, TFormValidateResult
} from './types';
import { TFormValidate } from './types';

const useForm: TForm = ( {
	form: formArg,
	rules: rulesArg = {},
} ) => {
	const [ form, setForm ] = useState( formArg );
	const [ initialForm ] = useState( formArg );

	const setFormValue: TFormSetValue = ( data ) => {
		setForm( {
			...form,
			...data,
		} );
	};

	const [ rules ] = useState( rulesArg );
	const [ validation, setValidation ] = useState( {
		success: true,
		items: {},
	} );

	const createKeysList: TFormCreateKeysList = ( keys ) => {
		let keysList: string[];

		if ( typeof keys === 'string' ) {
			keysList = [ keys ];
		} else if ( Array.isArray( keys ) ) {
			keysList = [ ...keys ];
		} else {
			keysList = [ ...Object.keys( form ) ];
		}

		return keysList;
	}

	const reset: TFormReset = ( keys ) => {
		const keysList = createKeysList( keys );
		const values = keysList.reduce( ( acc, curr ) => {
			return {
				...acc,
				[ curr ]: initialForm[ curr ],
			};
		}, {} );

		setFormValue( values );
	};

	const validate: TFormValidate = async ( keys ) => {
		console.log( 'validate 1, keys:', keys );
		const keysList = createKeysList( keys );
		const validationResult: TFormValidateResult = {
			success: true,
			items: {},
		};
		console.log( 'validate 2, keysList:', keysList );

		keysList.forEach( ( key ) => {
			const itemByKey = form[ key ];
			const rulesByKey = rules[ key ];
			console.log( 'validate 3, itemByKey:', itemByKey );
			console.log( 'validate 4, rulesByKey:', rulesByKey );

			validationResult.items[ key ] = applyItemValidation( form, itemByKey, rulesByKey );
			console.log( 'validate 5, validationResult:', validationResult );
		} );

		for ( const key in validationResult.items ) {
			console.log( 'validate 6, key:', key );
			console.log( 'validate 7, item:', validationResult.items[ key ] );
			if ( !validationResult.items[ key ].success ) {
				console.log( 'validate 8, item:', validationResult.items[ key ].success );
				validationResult.success = false;
				break;
			}
		}
		console.log( 'validate 9, key:', validationResult );

		await setValidation( { ...validationResult } );
		console.log( 'validate 10, validation:', validation );

		return validationResult;
	};

	useEffect( () => {
		console.log( 'validate 11, validation:', validation );
	}, [ validation ] );

	return {
		form,
		initialForm,
		setFormValue,
		reset,
		validate,
		validation,
	};
}

export default useForm;
