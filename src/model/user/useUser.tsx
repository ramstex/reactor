import Api from '../../plugins/api';

import Routes from '../config/routes';

import type {
	TGetUser, TUpdateUser, TUseUser, IUserApiResponse, TUserResult
} from './types';

/**
 * Sends a query to the user endpoint to get current user data.
 * @returns { TUserResult } - Object containing a user data
 */
const getUser: TGetUser = async () => {
	let result: TUserResult = null;

	const response: IUserApiResponse = await Api.get(
		Routes.user
	);

	if ( response.User ) {
		result = {
			login: response.User.login,
			email: response.User.email,
			fio: response.User.fio,
		};
	}

	return result;
};

/**
 * Sends a query to the user endpoint to update user data.
 * @param { FormData } data - User data to update
 * @returns { TUserResult } - Object containing a user data
 */
const updateUser: TUpdateUser = async ( data ) => {
	const response: IUserApiResponse = await Api.post(
		Routes.user,
		data
	);

	let result: TUserResult;

	if ( response.User ) {
		result = {
			login: response.User.login,
			email: response.User.email,
			fio: response.User.fio,
		};
	} else {
		result = null;
	}

	return result;
};

const useUser: TUseUser = () => {
	return {
		getUser,
		updateUser,
	};
}

export default useUser;
