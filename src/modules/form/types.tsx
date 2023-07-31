type TFormItem = string | boolean | number;
interface IFormItems {
	[key: string]: TFormItem;
}
type TFormItems = IFormItems;

interface IFormRule {
	[key: string]: string | boolean | number;
}
type TFormRule = IFormRule;

interface IFormRules {
	[key: string]: TFormRule;
}
type TFormRules = IFormRules;

interface IFormValidateResultItem {
	success: boolean;
	message: string | null;
}
export type TFormValidateResultItem = IFormValidateResultItem;

interface IFormValidateResult {
	success: boolean;
	items: {
		[key: string]: TFormValidateResultItem;
	};
}
export type TFormValidateResult = IFormValidateResult;

export type TFormSetValue = ( data: IFormItems ) => void;
export type TFormReset = ( keys?: string | string[] ) => void;
export type TFormValidate = ( keys?: string | string[] ) => Promise<TFormValidateResult>;
export type TFormCreateKeysList = ( keys?: string | string[] ) => string[];

interface IFormArgs {
	form: TFormItems;
	rules?: TFormRules;
}
type TFormArgs = IFormArgs;

export type TForm = ( data: TFormArgs ) => {
	form: TFormItems;
	initialForm: TFormItems;
	setFormValue: TFormSetValue;
	reset: TFormReset;
	validate: TFormValidate;
	validation: TFormValidateResult,
};

export type TFormApplyItemValidation = ( form: TFormItems, item: TFormItem, rules: IFormRule ) => TFormValidateResultItem;
export type TFormApplyRequired = ( item: TFormItem ) => TFormValidateResultItem;
export type TFormApplyEmail = ( item: TFormItem ) => TFormValidateResultItem;
export type TFormApplyEquals = ( form: TFormItems, item: TFormItem, key: string ) => TFormValidateResultItem;
