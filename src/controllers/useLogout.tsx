import useModel from '../model/useModel';

const { logout } = useModel();

import type { TLogout } from '../model/useLogout';

type TLogoutLocal = TLogout;

type TUseRegistration = () => {
	logout: TLogoutLocal
};

const logoutLocal: TLogoutLocal = () => {
	return logout();
};

const useLogout: TUseRegistration = () => {
	return { logout: logoutLocal };
};

export default useLogout;
