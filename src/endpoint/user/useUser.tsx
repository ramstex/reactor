import Api from '../../modules/api/index';

import type { TUserModel } from './types';

const useUser: TUserModel = () => {
	return {
		/**
		 * If there is some data passed, uploading it to the server.
		 * Otherwise, getting user data from the server.
		 *
		 * @param { FormData= } data - user data to upload.
		 * @return { TUpdateUserResponse } - server response
		 */
		update: async ( data ) => {
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
