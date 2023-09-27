import Api from '../../modules/api/index';

import type { TLoginModel } from './types';

const useLogin: TLoginModel = () => {
	return {
		/**
		 * Sends a query to the login endpoint to log the user in.
		 *
		 * @param { FormData } data - Login form data
		 * @param { Headers= } headers - Http headers for login query
		 * @returns { TLoginResponse } - Object containing a login result
		 */
		login: async ( data: FormData, headers?: Headers ) => {
			return await Api.post(
				Api.routes.login,
				data,
				headers
			);
		},
	};
}

export default useLogin;
