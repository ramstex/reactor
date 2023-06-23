import { EInputTheme, EInputType } from './helpers';

import type {
	IComponentProps, TComponent, TEventChange, TInputElement, TTextAreaElement
} from '../../../types/types';

export type TInputType = `${ EInputType }`;
export type TInputTheme = `${ EInputTheme }`;
export interface IInputProps extends IComponentProps {
	name?: string;
	value?: string;
	type?: TInputType;
	theme?: TInputTheme;
	textarea?: boolean;
	placeholder?: string;
	message?: string;
	disabled?: boolean;
	required?: boolean;
	clearable?: boolean;
	readOnly?: boolean;
	onChange?: ( event: TEventChange ) => void;
	onClear?: () => void;
}

export type TInputComponent = TComponent<IInputProps, TInputElement & TTextAreaElement>;
