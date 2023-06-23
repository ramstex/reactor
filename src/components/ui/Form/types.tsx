import type { IComponentProps, TComponent } from '../../../types/types';
import { TOnInvalid, TOnSubmit } from '../../../types/handlers';

export interface IFormProps extends IComponentProps {
	action?: string;
	onSubmit?: TOnSubmit;
	onInvalid?: TOnInvalid;
}

export type TFormComponent = TComponent<IFormProps>;
