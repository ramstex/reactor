import ArrowUp from '../../../assets/icons/arrow-up.svg';
import ArrowDown from '../../../assets/icons/arrow-down.svg';
import ArrowLeft from '../../../assets/icons/arrow-left.svg';
import ArrowRight from '../../../assets/icons/arrow-right.svg';

import Vkontakte from '../../../assets/icons/vkontakte.svg';
import Facebook from '../../../assets/icons/facebook.svg';
import Twitter from '../../../assets/icons/twitter.svg';
import Instagram from '../../../assets/icons/instagram.svg';
import Odnoklassniki from '../../../assets/icons/odnoklassniki.svg';
import Telegram from '../../../assets/icons/telegram.svg';
import Whatsapp from '../../../assets/icons/whatsapp.svg';
import Viber from '../../../assets/icons/viber.svg';
import Youtube from '../../../assets/icons/youtube.svg';
import Tiktok from '../../../assets/icons/tiktok.svg';

import Close from '../../../assets/icons/close.svg';
import Plus from '../../../assets/icons/plus.svg';
import Minus from '../../../assets/icons/minus.svg';
import Search from '../../../assets/icons/search.svg';
import Refresh from '../../../assets/icons/refresh.svg';

import ProfileNoUser from '../../../assets/icons/profile-no-user.svg';
import ProfileUser from '../../../assets/icons/profile-user.svg';
import Login from '../../../assets/icons/login.svg';
import Logout from '../../../assets/icons/logout.svg';

import EyeOpened from '../../../assets/icons/eye-opened.svg';
import EyeClosed from '../../../assets/icons/eye-closed.svg';

import type { TComponent } from '../../../types/types';
import type { TIconName } from './types';
import type { TSvgProps } from '../../../types/svg';

export enum EIconName {
	arrowUp = 'arrow-up',
	arrowDown = 'arrow-down',
	arrowLeft = 'arrow-left',
	arrowRight = 'arrow-right',

	vkontakte = 'vkontakte',
	facebook = 'facebook',
	twitter = 'twitter',
	instagram = 'instagram',
	odnoklassniki = 'odnoklassniki',
	telegram = 'telegram',
	whatsapp = 'whatsapp',
	viber = 'viber',
	youtube = 'youtube',
	tiktok = 'tiktok',

	close = 'close',
	plus = 'plus',
	minus = 'minus',
	search = 'search',
	refresh = 'refresh',

	profileNoUser = 'profile-no-user',
	profileUser = 'profile-user',
	login = 'login',
	logout = 'logout',

	eyeOpened = 'eye-opened',
	eyeClosed = 'eye-closed',
}

export const getIconByName: ( name: TIconName ) => TComponent<TSvgProps> | null = ( name ) => {
	switch ( name ) {
		case EIconName.arrowUp:
			return ArrowUp;
		case EIconName.arrowDown:
			return ArrowDown;
		case EIconName.arrowLeft:
			return ArrowLeft;
		case EIconName.arrowRight:
			return ArrowRight;

		case EIconName.vkontakte:
			return Vkontakte;
		case EIconName.odnoklassniki:
			return Odnoklassniki;
		case EIconName.facebook:
			return Facebook;
		case EIconName.twitter:
			return Twitter;
		case EIconName.instagram:
			return Instagram;
		case EIconName.telegram:
			return Telegram;
		case EIconName.whatsapp:
			return Whatsapp;
		case EIconName.viber:
			return Viber;
		case EIconName.youtube:
			return Youtube;
		case EIconName.tiktok:
			return Tiktok;

		case EIconName.close:
			return Close;
		case EIconName.plus:
			return Plus;
		case EIconName.minus:
			return Minus;
		case EIconName.search:
			return Search;
		case EIconName.refresh:
			return Refresh;

		case EIconName.profileNoUser:
			return ProfileNoUser;
		case EIconName.profileUser:
			return ProfileUser;
		case EIconName.login:
			return Login;
		case EIconName.logout:
			return Logout;

		case EIconName.eyeOpened:
			return EyeOpened;
		case EIconName.eyeClosed:
			return EyeClosed;

		default:
			return null;
	}
};
