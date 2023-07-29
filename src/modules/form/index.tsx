import { useState } from 'react';
import { applyItemValidation } from './helper';

import type {
	TForm, TFormSetData, TFormReset, TFormCreateKeysList
} from './types';
import { TFormValidate } from './types';

const useForm: TForm = ( {
	form: formArg,
	rules: rulesArg = {},
} ) => {
	const [ form, setForm ] = useState( formArg );
	const [ initialForm ] = useState( formArg );

	const [ rules ] = useState( rulesArg );

	const setFormValue: TFormSetData = ( key, value ) => {
		setForm( {
			...form,
			[key]: value,
		} );
	};

	// ToDo: Reusable function to create keys list
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

		keysList.forEach( ( key ) => {
			setFormValue( key, initialForm[ key ] );
		} );
	};

	const validate: TFormValidate = ( keys ) => {
		const keysList = createKeysList( keys );

		keysList.forEach( ( key ) => {
			const itemByKey = form[ key ];
			const rulesByKey = rules[ key ];

			applyItemValidation( form, itemByKey, rulesByKey );
		} );
	};

	return {
		form,
		initialForm,
		setFormValue,
		reset,
		validate,
	};
}

export default useForm;
