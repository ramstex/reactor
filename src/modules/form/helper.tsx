import type {
	TFormApplyItemValidation, TFormApplyRequired, TFormApplyEmail, TFormApplyEquals
} from './types';

export enum EFormRules {
	required = 'required',
	email = 'email',
	equals = 'equals',
}

export const applyItemValidation: TFormApplyItemValidation = ( form, item, rules = {} ) => {
	let success = true;

	for ( const rule in rules ) {
		switch ( rule ) {
			case EFormRules.required:
				success = applyRequired( item );
				break;
			case EFormRules.email:
				success = applyEmail( item );
				break;
			case EFormRules.equals:
				success = applyEquals( form, item, rule );
				break;
		}

		if ( !success ) {
			break;
		}
	}

	// ToDo: error messages
	return {
		success,
		message: null,
	};
}

const applyRequired: TFormApplyRequired = ( item ) => {
	return !!item;
}

const applyEmail: TFormApplyEmail = ( item ) => {
	if ( typeof item === 'string' ) {
		const regexExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;

		return regexExp.test( item );
	} else {
		return false;
	}
}

const applyEquals: TFormApplyEquals = ( form, item, key ) => {
	return item === form[ key ];
}
