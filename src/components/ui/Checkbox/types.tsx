import type { IComponentProps, TComponent, TEventChange } from '../../../types/types';

export type TCheckboxOnChange = ( event: TEventChange ) => void;

interface ICheckboxProps extends IComponentProps {
	checked?: boolean;
	required?: boolean;
	invalid?: boolean;
	name?: string;
	message?: string | null;
	onChange?: ( event: TEventChange ) => void;
}
export type TCheckboxProps = ICheckboxProps;
export type TCheckbox = TComponent<TCheckboxProps>;
