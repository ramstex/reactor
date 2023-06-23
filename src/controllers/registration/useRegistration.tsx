import useModel from '../../model/useModel';

import type { TRegister, IRegisterResult, TUseRegistration } from './types';

const {
	register: __register,
	getUser: __getUser,
} = useModel();

const register: TRegister = async ( data, headers ) => {
	console.log( 'controller: Registration, method: register, point 1', {
		data,
		headers,
	} );

	return new Promise( async ( resolve ) => {
		const regResponse = await __register( data, headers );
		const userResponse = await __getUser();

		console.log( 'controller: Registration, method: register, point 2', {
			regResponse,
			userResponse,
		} );

		const result: IRegisterResult = {
			...regResponse,
			user: userResponse
				? { ...userResponse }
				: null,
		};

		console.log( 'controller: Registration, method: register, point 3', result );

		resolve( result );
	} );
};

const useRegistration: TUseRegistration = () => {
	return { register };
};

export default useRegistration;
