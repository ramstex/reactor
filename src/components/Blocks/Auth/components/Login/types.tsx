import type { IComponentProps, TComponent } from '../../../../../types/types';
import { ELoginForm } from './helpers';

export type TLoginName = `${ ELoginForm }`

interface ILoginData {
	login: string;
	password: string;
}
export type TLoginData = ILoginData;

export interface ILoginProps extends IComponentProps {
	onSuccess?: () => void;
	onError?: () => void;
	onRemind?: () => void;
	onRegistration?: () => void;
}
type TLoginProps = ILoginProps;

export type TLoginComponent = TComponent<TLoginProps>;
