import Api from '../../modules/api/index';

import type { TUseRegistration } from './types';

const useRegistration: TUseRegistration = () => {
	return {
		/**
		 * Sends a query to the registration endpoint to register new user.
		 *
		 * @param { FormData } data - Registration form data
		 * @param { Headers= } headers - Http headers for registration query
		 * @returns { TRegisterResponse } - Object containing a registration result
		 */
		register: async ( data: FormData, headers?: Headers ) => {
			return await Api.post(
				Api.routes.registration,
				data,
				headers
			);
		},
	};
}

export default useRegistration;
