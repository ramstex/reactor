import type {
	TFormValidationRuleResult, TFormApplyItemValidation, TFormApplyRequired, TFormApplyEmail, TFormApplyEquals
} from './types';

export enum EFormRules {
	required = 'required',
	email = 'email',
	equals = 'equals',
}

const validationDefault = {
	success: true,
	message: null,
};

export const applyItemValidation: TFormApplyItemValidation = ( form, item, rules = {} ) => {
	let result: TFormValidationRuleResult = { ...validationDefault };

	for ( const rule in rules ) {
		switch ( rule ) {
			case EFormRules.required:
				result = applyRequired( item );
				break;
			case EFormRules.email:
				result = applyEmail( item );
				break;
			// case EFormRules.equals:
			// 	//@ts-ignore
			// 	result = applyEquals( form, item, rules, rule );
			// 	break;
		}

		if ( !result.success ) {
			break;
		}
	}

	// ToDo: error messages
	return result;
}

const applyRequired: TFormApplyRequired = ( item ) => {
	const success = !!item;

	return {
		success,
		message: success
			? null
			: 'Required field',
	};
}

const applyEmail: TFormApplyEmail = ( item ) => {
	const result: TFormValidationRuleResult = { ...validationDefault };

	if ( typeof item === 'string' ) {
		const condition = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;
		result.success = condition.test( item );
	} else {
		result.success = false;
	}

	if ( !result.success ) {
		result.message = 'Email is invalid'
	}

	return result;
}

// @ts-ignore
// const applyEquals: TFormApplyEquals = ( form, item, rules, rule ) => {
// 	const valueToCompare = form[ rules[ rule ] ];
// 	const success = item === valueToCompare;
//
// 	return {
// 		success,
// 		message: success
// 			? null
// 			: 'Values are unequal',
// 	}
// }
