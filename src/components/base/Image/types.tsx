import type { TComponent, IComponentProps } from '../../../types/types';
import type { TSvgProps } from '../../../types/svg';

export interface IImageProps extends IComponentProps {
	src: string | TComponent<TSvgProps>;
	alt?: string;
	title?: string;
}

export type TImageComponent = TComponent<IImageProps>;
