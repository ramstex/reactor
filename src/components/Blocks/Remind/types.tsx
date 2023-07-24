import type { IComponentProps, TComponent } from '../../../types/types';
import { ERemindForm } from './helpers';

export type TRemindName = `${ ERemindForm }`

interface IRemindData {
	email: string;
}
export type TRemindData = IRemindData;

export interface IRemindProps extends IComponentProps {
	onSuccess?: () => void;
	onError?: () => void;
}
type TRemindProps = IRemindProps;

export type TRemindComponent = TComponent<TRemindProps>;
