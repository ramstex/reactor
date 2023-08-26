export type TFormItem = string | boolean | number;
export type TFormItems = {
	[key:string]: TFormItem;
};

interface IFormRule {
	[key: string]: string | boolean | number;
}
type TFormRule = IFormRule;

interface IFormRules {
	[key: string]: TFormRule;
}
type TFormRules = IFormRules;

interface IFormValidationRuleResult {
	success: boolean;
	message: string | null;
}
export type TFormValidationRuleResult = IFormValidationRuleResult;

interface IFormValidationItem extends IFormValidationRuleResult{
	checked: boolean;
}
export type TFormValidationItem = IFormValidationItem;

interface IFormValidation {
	success: boolean;
	items: {
		[key: string]: TFormValidationItem;
	};
}
export type TFormValidation = IFormValidation;
export type TValidationErrors = {
	[key: string]: string;
}

export type TSetForm = ( data: TFormItems ) => void;
export type TFormReset = ( keys?: string | string[] ) => void;
export type TFormValidate = ( keys?: string | string[], handler?: unknown ) => TFormValidation;
export type TFormValidateWithErrors = ( errors: TValidationErrors ) => TFormValidation;
export type TFormCreateKeysList = ( keys?: string | string[] ) => string[];
export type TSetFormErrors = ( errors: TValidationErrors ) => void;

interface IFormArgs {
	form: TFormItems;
	rules?: TFormRules;
}
type TFormArgs = IFormArgs;

export type TUseForm = ( data: TFormArgs ) => {
	form: TFormItems;
	// initialForm: TFormItems;
	setForm: TSetForm;
	resetForm: TFormReset;
	validateForm: TFormValidate,
	validation: TFormValidation,
	setFormErrors: TSetFormErrors,
	// forcedErrors: {
	// 	[key: string]: string,
	// },
};

export type TFormApplyItemValidation = ( form: TFormItems, item: TFormItem, rules: IFormRule ) => TFormValidationRuleResult;
export type TFormApplyRequired = ( item: TFormItem ) => TFormValidationRuleResult;
export type TFormApplyEmail = ( item: TFormItem ) => TFormValidationRuleResult;
export type TFormApplyEquals = ( form: TFormItems, item: TFormItem, key: string ) => TFormValidationRuleResult;
