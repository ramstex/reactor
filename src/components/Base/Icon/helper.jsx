import ArrowUp from '/src/assets/icons/arrow-up.svg';
import ArrowDown from '/src/assets/icons/arrow-down.svg';
import ArrowLeft from '/src/assets/icons/arrow-left.svg';
import ArrowRight from '/src/assets/icons/arrow-right.svg';
import Check from '/src/assets/icons/check.svg';
import Close from '/src/assets/icons/close.svg';
import Plus from '/src/assets/icons/plus.svg';
import Minus from '/src/assets/icons/minus.svg';
import EyeClosed from '/src/assets/icons/eye-closed.svg';
import EyeOpened from '/src/assets/icons/eye-opened.svg';
import Play from '/src/assets/icons/play.svg';
import ProfileLogIn from '/src/assets/icons/profile-log-in.svg';
import ProfileLogOut from '/src/assets/icons/profile-log-out.svg';
import Search from '/src/assets/icons/search.svg';
import Refresh from '/src/assets/icons/refresh.svg';
import Vkontakte from '/src/assets/icons/vk.svg';
import Telegram from '/src/assets/icons/tg.svg';
import Odnoklassniki from '/src/assets/icons/ok.svg';

const getIconByName = ( name ) => {
	switch ( name ) {
		case 'arrow-up':
			return ArrowUp;
		case 'arrow-down':
			return ArrowDown;
		case 'arrow-left':
			return ArrowLeft;
		case 'arrow-right':
			return ArrowRight;
		case 'check':
			return Check;
		case 'close':
			return Close;
		case 'plus':
			return Plus;
		case 'minus':
			return Minus;
		case 'eye-closed':
			return EyeClosed;
		case 'eye-opened':
			return EyeOpened;
		case 'play':
			return Play;
		case 'profile-login':
			return ProfileLogIn;
		case 'profile-logout':
			return ProfileLogOut;
		case 'search':
			return Search;
		case 'refresh':
			return Refresh;
		case 'vkontakte':
			return Vkontakte;
		case 'telegram':
			return Telegram;
		case 'odnoklassniki':
			return Odnoklassniki;
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
		Check,
		Close,
		Plus,
		Minus,
		EyeClosed,
		EyeOpened,
		Play,
		ProfileLogIn,
		ProfileLogOut,
		Search,
		Refresh,
		Vkontakte,
		Telegram,
		Odnoklassniki,
	},
}
