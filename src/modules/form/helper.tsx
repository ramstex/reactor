import type {
	TFormValidateResultItem, TFormApplyItemValidation, TFormApplyRequired, TFormApplyEmail, TFormApplyEquals
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
	console.log( 'applyItemValidation 1', form, item, rules );
	let result: TFormValidateResultItem = { ...validationDefault };

	for ( const rule in rules ) {
		console.log( 'applyItemValidation 2', rule );
		switch ( rule ) {
			case EFormRules.required:
				console.log( 'applyItemValidation case required' );
				result = applyRequired( item );
				break;
			case EFormRules.email:
				console.log( 'applyItemValidation case email', applyEmail( item ) );
				result = applyEmail( item );
				console.log( 'applyItemValidation case email 2', result );
				break;
			case EFormRules.equals:
				console.log( 'applyItemValidation case equals' );
				//@ts-ignore
				result = applyEquals( form, item, rules, rule );
				break;
		}

		console.log( 'applyItemValidation 3', result );
		if ( !result.success ) {
			console.log( 'applyItemValidation 4', result );
			break;
		}
	}
	console.log( 'applyItemValidation 5', result );

	// ToDo: error messages
	return result;
}

const applyRequired: TFormApplyRequired = ( item ) => {
	console.log( 'applyRequired 1', item );
	const success = !!item;

	return {
		success,
		message: success
			? null
			: 'Required field',
	};
}

const applyEmail: TFormApplyEmail = ( item ) => {
	const result: TFormValidateResultItem = { ...validationDefault };

	console.log( 'applyEmail 1', item );
	if ( typeof item === 'string' ) {
		const condition = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;
		result.success = condition.test( item );
		console.log( 'applyEmail 2', result );
	} else {
		console.log( 'applyEmail 3', item, typeof item );

		result.success = false;
	}

	if ( !result.success ) {
		console.log( 'applyEmail 4', result );
		result.message = 'Email is invalid'
	}

	return result;
}

// @ts-ignore
const applyEquals: TFormApplyEquals = ( form, item, rules, rule ) => {
	console.log( 'applyEquals 1', form, item, rules, rule );

	const valueToCompare = form[ rules[ rule ] ];
	console.log( 'applyEquals 2', valueToCompare );
	const success = item === valueToCompare;

	return {
		success,
		message: success
			? null
			: 'Values are unequal',
	}
}
