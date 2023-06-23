import { EUiKitColors } from './helper';

import type { IComponentProps } from '../../../../../../types/types';

type TUiKitColorColor = `${ EUiKitColors }`;

export interface IUiKitColorProps extends IComponentProps {
	color: TUiKitColorColor,
	border?: TUiKitColorColor | boolean,
	description?: string;
}
