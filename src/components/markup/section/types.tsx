import type { IComponentProps, TComponent } from '../../../types/types';
import type { IContainerProps } from '../Container/types';
import type { THeading, TParagraph } from '../../../types/tags';

export interface ISectionProps extends IComponentProps {
	header?: IContainerProps,
	body?: IContainerProps,
	title?: string,
	titleTag?: THeading | TParagraph,
}

export type TSectionComponent = TComponent<ISectionProps>;
