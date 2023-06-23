import { IComponentProps, TOnClick } from '../../../modules/helper';

export type TIconName = 'arrow-up'
	| 'arrow-down'
	| 'arrow-left'
	| 'arrow-right'
	| 'eye-closed'
	| 'eye-opened'
	| 'profile-login'
	| 'profile-logout'
	| 'vkontakte'
	| 'telegram'
	| 'odnoklassniki'
	| 'check'
	| 'close'
	| 'plus'
	| 'minus'
	| 'search'
	| 'refresh'
	| 'play';

export type TIconOnClick = TOnClick<SVGSVGElement>;

export interface IIconProps extends IComponentProps {
	name: TIconName,
	onClick?: TIconOnClick,
}
