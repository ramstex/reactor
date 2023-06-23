import type { IComponentProps, TComponent } from '../../../types/types';
import { ERegistrationForm } from './helpers';

export interface IRegistrationData {
	email: string;
	password: string;
}
export interface IRegistrationProps extends IComponentProps {
	onSuccess?: () => void;
	onError?: () => void;
}

export type TRegistrationComponent = TComponent<IRegistrationProps>;

export type TRegistrationName = `${ ERegistrationForm }`
