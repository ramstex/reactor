// ToDo: JSDocs

import Api from '../../modules/api/index';

import Routes from './../config/routes';

import type { TLogoutModel } from './types';

const useLogout: TLogoutModel = () => {
	return {
		logout: async () => {
			const response = await Api.get(
				Routes.logout
			);

			console.log( 'LOGOUT response', response );

			return response;
		},
	};
}

export default useLogout;
