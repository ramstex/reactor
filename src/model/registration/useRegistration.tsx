import Api from '../../plugins/api';
import Routes from '../config/routes';

import type {
	TRegister, TUseRegistration, IRegisterApiResponse, TRegisterResult
} from './types';

/**
 * Sends a query to the registration endpoint to register new user.
 * @param { FormData } data - Registration form data
 * @param { Headers= } headers - Http headers for registration query
 * @returns { TRegisterResult } - Object containing a registration result
 */
const register: TRegister = async ( data: FormData, headers?: Headers ) => {
	console.log( 'model: Registration, method: register, point 1', {
		data,
		headers,
	} );

	const response: IRegisterApiResponse = await Api.post(
		Routes.registration,
		data,
		headers
	);

	console.log( 'model: Registration, method: register, point 2', response );

	const result: TRegisterResult = {
		success: false,
		error: null,
	};

	if ( response.success ) {
		result.success = true;
	} else {
		result.success = false;
		result.error = 'ERROR';
	}

	console.log( 'model: Registration, method: register, point 3', result );

	return result;
};

const useRegistration: TUseRegistration = () => {
	return { register };
}

export default useRegistration;
