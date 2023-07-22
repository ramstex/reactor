import ApiRoutes from '../../../../config/api-routes';

//	Dummies
import RegistrationDummy from './registration';
import UserDummy from './user';
import LoginDummy from './login';
import LogoutDummy from './logout';

import type { AxiosResponse } from 'axios';
import type { TApiMethods } from '../../../constants/api';

type TDummy = ( method: TApiMethods, url: string, data?: FormData, headers?: object ) => Promise<AxiosResponse>;

const dummy: TDummy = ( method, url, data ) => {
	let result: AxiosResponse;

	switch ( url ) {
		case ApiRoutes.registration:
			if ( data?.get( 'email' ) === 'exists@qwe.qwe' ) {
				// @ts-ignore
				result = RegistrationDummy.alreadyExists;
				break;
			}

			// @ts-ignore
			result = RegistrationDummy.default;
			break;

		case ApiRoutes.login:
			if ( data?.get( 'email' ) === 'qwe@qwe.qwe' ) {
				// @ts-ignore
				result = LoginDummy.success;
				break;
			}

			// @ts-ignore
			result = LoginDummy.fail;
			break;

		case ApiRoutes.user:
			// @ts-ignore
			result = UserDummy.default;
			break;

		case ApiRoutes.logout:
			// @ts-ignore
			result = LogoutDummy.default;
			break;
	}

	// @ts-ignore
	result = { data: result };

	return new Promise( ( resolve ) => {
		setTimeout( () => {
			resolve( result );
		}, 1000 );
	} );
};

export default dummy;
