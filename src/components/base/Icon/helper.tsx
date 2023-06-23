/// <reference types="vite-plugin-svgr/client" />

import { ReactComponent as ArrowUp } from '../../../assets/icons/arrow-up.svg';
import { ReactComponent as ArrowDown } from '../../../assets/icons/arrow-down.svg';
import { ReactComponent as ArrowLeft } from '../../../assets/icons/arrow-left.svg';
import { ReactComponent as ArrowRight } from '../../../assets/icons/arrow-right.svg';
import { ReactComponent as EyeClosed } from '../../../assets/icons/eye-closed.svg';
import { ReactComponent as EyeOpened } from '../../../assets/icons/eye-opened.svg';
import { ReactComponent as ProfileLogIn } from '../../../assets/icons/profile-login.svg';
import { ReactComponent as ProfileLogOut } from '../../../assets/icons/profile-logout.svg';
import { ReactComponent as Vkontakte } from '../../../assets/icons/vkontakte.svg';
import { ReactComponent as Telegram } from '../../../assets/icons/telegram.svg';
import { ReactComponent as Odnoklassniki } from '../../../assets/icons/odnoklassniki.svg';
import { ReactComponent as Check } from '../../../assets/icons/check.svg';
import { ReactComponent as Close } from '../../../assets/icons/close.svg';
import { ReactComponent as Plus } from '../../../assets/icons/plus.svg';
import { ReactComponent as Minus } from '../../../assets/icons/minus.svg';
import { ReactComponent as Search } from '../../../assets/icons/search.svg';
import { ReactComponent as Refresh } from '../../../assets/icons/refresh.svg';
import { ReactComponent as Play } from '../../../assets/icons/play.svg';

import type { FC, SVGProps } from 'react';
import type { TIconName } from './types';

const getIconByName: (name: TIconName) => FC<SVGProps<SVGSVGElement>> | null = ( name ) => {
	switch ( name ) {
		case 'arrow-up':
			return ArrowUp;
		case 'arrow-down':
			return ArrowDown;
		case 'arrow-left':
			return ArrowLeft;
		case 'arrow-right':
			return ArrowRight;
		case 'eye-closed':
			return EyeClosed;
		case 'eye-opened':
			return EyeOpened;
		case 'profile-login':
			return ProfileLogIn;
		case 'profile-logout':
			return ProfileLogOut;
		case 'vkontakte':
			return Vkontakte;
		case 'telegram':
			return Telegram;
		case 'odnoklassniki':
			return Odnoklassniki;
		case 'check':
			return Check;
		case 'close':
			return Close;
		case 'plus':
			return Plus;
		case 'minus':
			return Minus;
		case 'search':
			return Search;
		case 'refresh':
			return Refresh;
		case 'play':
			return Play;
		default:
			return null;
	}
};

export default {
	getIconByName,

	icons: {
		ArrowUp,
		ArrowDown,
		ArrowLeft,
		ArrowRight,
		EyeClosed,
		EyeOpened,
		ProfileLogIn,
		ProfileLogOut,
		Vkontakte,
		Telegram,
		Odnoklassniki,
		Check,
		Close,
		Plus,
		Minus,
		Search,
		Refresh,
		Play,
	},
}
