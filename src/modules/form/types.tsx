export type TFormSetData = ( key: string, value: string | boolean | number ) => void;
export type TFormReset = ( keys?: string | string[] ) => void;
export type TFormValidate = ( keys?: string | string[] ) => void;
export type TFormCreateKeysList = ( keys?: string | string[] ) => string[];

type TFormItem = string | boolean | number;
interface IFormItems {
	[key: string]: TFormItem;
}
type TFormItems = IFormItems;

interface IFormRule {
	[key: string]: string | boolean;
}
type TFormRule = IFormRule;

interface IFormRules {
	[key: string]: TFormRule;
}
type TFormRules = IFormRules;

interface IFormArgs {
	form: TFormItems;
	rules?: TFormRules;
}
type TFormArgs = IFormArgs;

export type TForm = ( data: TFormArgs ) => {
	form: TFormItems;
	initialForm: TFormItems;
	setFormValue: TFormSetData;
	reset: TFormReset;
	validate: TFormValidate;
};

export type TFormApplyItemValidation = ( form: TFormItems, item: TFormItem, rules: IFormRule ) => {
	success: boolean;
	message: string | null;
};
export type TFormApplyRequired = ( item: TFormItem ) => boolean;
export type TFormApplyEmail = ( item: TFormItem ) => boolean;
export type TFormApplyEquals = ( form: TFormItems, item: TFormItem, key: string ) => boolean;
