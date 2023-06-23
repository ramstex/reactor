import { EButtonType, EButtonTheme, EButtonTemplate } from './helpers';

import type { IComponentProps, TComponent } from '../../../types/types';
import type { TIconName } from '../../Base/Icon/types';

export type TButtonType = keyof typeof EButtonType;
export type TButtonTheme = keyof typeof EButtonTheme;
export type TButtonTemplate = keyof typeof EButtonTemplate;

export interface IButtonProps extends IComponentProps {
	type?: TButtonType;
	theme?: TButtonTheme;
	template?: TButtonTemplate;
	inverse?: boolean;
	href?: string;
	wide?: boolean;
	disabled?: boolean;
	icon?: TIconName;
	iconPosition?: 'start' | 'end';
	square?: boolean;
	onClick?: () => void;
	onMouseEnter?: () => void;
	onMouseLeave?: () => void;
}

export type TButtonComponent = TComponent<IButtonProps>;
