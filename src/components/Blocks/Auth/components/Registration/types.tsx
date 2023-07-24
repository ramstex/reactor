import type { IComponentProps, TComponent } from '../../../../../types/types';
import { ERegistrationForm } from './helpers';

interface IRegistrationData {
	email: string;
	password: string;
}
export type TRegistrationData = IRegistrationData;

export interface IRegistrationProps extends IComponentProps {
	onSuccess?: () => void;
	onError?: () => void;
	onLogin?: () => void;
}
export type TRegistrationProps = IRegistrationProps;

export type TRegistrationComponent = TComponent<TRegistrationProps>;

export type TRegistrationName = `${ ERegistrationForm }`
