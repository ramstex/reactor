import Api from '../../modules/api/index';

import type { TUserModel } from './types';

const useUser: TUserModel = () => {
	return {
		update: async ( data ) => {
			// if ( data ) {
			// 	return await Api.post(
			// 		Api.routes.user,
			// 		data
			// 	);
			// } else {
			// 	return await Api.get(
			// 		Api.routes.user
			// 	);
			// }

			return data
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
