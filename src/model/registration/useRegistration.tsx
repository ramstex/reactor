// ToDo: JSDocs

import Api from '../../modules/api/index';

import type { TRegister, TUseRegistration } from './types';

const useRegistration: TUseRegistration = () => {
	/**
	 * Sends a query to the registration endpoint to register new user.
	 * @param { FormData } data - Registration form data
	 * @param { Headers= } headers - Http headers for registration query
	 * @returns { TRegisterResult } - Object containing a registration result
	 */
	const register: TRegister = async ( data: FormData, headers?: Headers ) => {
		return await Api.post(
			Api.routes.registration,
			data,
			headers
		);
	};

	return { register };
}

export default useRegistration;
