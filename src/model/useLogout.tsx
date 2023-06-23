// ToDo: JSDocs

import Api from '../plugins/api';

import Routes from './config/routes';

export type TLogout = () => PromiseLike<object>
type TUseLogout = () => ILogout;

interface ILogout {
	logout: TLogout;
}

const logout: TLogout = async () => {
	return await Api.get(
		Routes.logout
	);
}

const useLogout: TUseLogout = () => {
	return { logout };
}

export default useLogout;
