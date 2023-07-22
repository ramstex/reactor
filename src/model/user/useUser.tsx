import Api from '../../modules/api/index';

import type { TUserModel } from './types';

const useUser: TUserModel = () => {
	return {
		update: async ( data ) => {
			/**
			 * If there is some data passed, uploading it to the server.
			 * Otherwise, getting user data from the server.
			 */
			return !!data
				? await Api.post(
					Api.routes.user,
					data
				)
				: await Api.get(
					Api.routes.user
				);
		},
	};
}

export default useUser;
