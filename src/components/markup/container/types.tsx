import type { IComponentProps, TComponent } from '../../../types/types';

export interface IContainerProps extends IComponentProps {
	wide?: boolean,
	tight?: boolean,
}

export type TContainerComponent = TComponent<IContainerProps>;
