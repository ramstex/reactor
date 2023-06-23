import {
	IComponentProps, TButtonRef, TButtonTemplate, TOnClick, TUiTheme
} from '../../../modules/helper';

import { TIconName } from '../../base/Icon/types';

export type TButtonOnClick = TOnClick<TButtonRef>;

export interface IButtonProps extends IComponentProps {
	template?: TButtonTemplate,
	theme?: TUiTheme,
	wide?: boolean,
	disabled?: boolean,
	icon?: TIconName,
	onClick?: TButtonOnClick,
}
