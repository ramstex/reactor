// Interface and type for form item
export type TFormItem = string | boolean | number | Blob;

// Interface and type for form
interface IForm {
	[key:string]: TFormItem;
}
export type TForm = IForm;

// Interface and type for validation rule
// ToDo: enum and available values for each rule
interface IFormRule {
	[key: string]: string | boolean | number;
}
type TFormRule = IFormRule;

// Interface and type for validation rules list
// ToDo: enum and available values for each rule
interface IFormRules {
	[key: string]: TFormRule;
}
type TFormRules = IFormRules;

// Interface and type for a validation by each rule result
interface IFormValidationRuleResult {
	success: boolean;
	message: string | null;
}
export type TFormValidationRuleResult = IFormValidationRuleResult;

// Interface and type for a validation item data
interface IFormValidationItem extends IFormValidationRuleResult{
	checked: boolean;
}
export type TFormValidationItem = IFormValidationItem;

// Interface and type for a validation data
interface IFormValidation {
	success: boolean;
	items: {
		[key: string]: TFormValidationItem;
	};
}
export type TFormValidation = IFormValidation;

// Interface and type for a validation errors
export type TValidationErrors = {
	[key: string]: string;
}

// PRIVATE methods

// Type for a validating method
export type TValidate = ( keys: string | string[], handler?: unknown ) => TFormValidation;
// Type for forcing validation errors method
export type TFormValidateWithErrors = ( errors: TValidationErrors ) => TFormValidation;
// Type for a method creating a form keys list
export type TFormCreateKeysList = ( keys?: string | string[] ) => string[];

// RETURNED methods

// Type for a setting form values method
export type TSetForm = ( data: TForm ) => void;
// Type for a restoring form method
export type TResetForm = ( keys?: string | string[] ) => void;
// Type for a manual validation method
export type TValidateAllAndCheck = ( keys?: string | string[] ) => TFormValidation;
// Type for setting a forced errors
export type TSetFormErrors = ( errors: TValidationErrors ) => void;

// Interface and type for hook arguments
interface IFormArgs {
	form: TForm;
	rules?: TFormRules;
}
type TFormArgs = IFormArgs;

// Type for a hook function
export type TUseForm = ( data: TFormArgs ) => {
	form: TForm;
	initialForm: TForm;
	setForm: TSetForm;
	resetForm: TResetForm;
	validateForm: TValidateAllAndCheck,
	validation: TFormValidation,
	setFormErrors: TSetFormErrors,
};

// Applying validation rules
export type TFormApplyItemValidation = ( form: TForm, item: TFormItem, rules: IFormRule ) => TFormValidationRuleResult;
// Applying a 'required' validation rule
export type TFormApplyRequired = ( item: TFormItem ) => TFormValidationRuleResult;
// Applying an 'email' validation rule
export type TFormApplyEmail = ( item: TFormItem ) => TFormValidationRuleResult;
// Applying an 'equal' validation rule
export type TFormApplyEquals = ( form: TForm, item: TFormItem, key: string ) => TFormValidationRuleResult;
