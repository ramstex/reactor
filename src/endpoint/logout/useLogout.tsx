import Api from '../../modules/api/index';

import type { TLogoutModel } from './types';

const useLogout: TLogoutModel = () => {
	return {
		logout: async () => {
			return await Api.get( Api.routes.logout );
		},
	};
}

export default useLogout;
