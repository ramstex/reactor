import type { TComponent, IComponentProps } from '../../../types/types';
import type { TOnClick } from '../../../types/handlers';
import type { TSvgElement } from '../../../types/svg';
import type { EIconName } from './helper';

export interface IIconProps extends IComponentProps {
	name: TIconName,
	onClick?: TIconOnClick,
}

export type TIconName = `${ EIconName }`;
export type TIconOnClick = TOnClick<TSvgElement>;
export type TIconComponent = TComponent<IIconProps>;
