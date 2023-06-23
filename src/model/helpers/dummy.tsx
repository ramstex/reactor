import Routes from '../config/routes';

//	Dummies
import registrationDummy from '../registration/dummy';
import userDummy from '../dummies/user';

import type { AxiosResponse } from 'axios';
import type { TApiMethods } from '../../constants/api';

type TDummy = ( method: TApiMethods, url: string, data?: FormData, headers?: object ) => Promise<AxiosResponse>;

const dummy: TDummy = ( method, url, data ) => {
	let result: AxiosResponse;

	switch ( url ) {
		case Routes.registration:
			if ( data?.get( 'email' ) === 'exists@qwe.qwe' ) {
				// @ts-ignore
				result = registrationDummy.alreadyExists;
				break;
			}

			// @ts-ignore
			result = registrationDummy.default;
			break;

		case Routes.user:
			// @ts-ignore
			result = userDummy.default;
			break;
	}

	// @ts-ignore
	result = { data: result };

	return new Promise( ( resolve ) => {
		setTimeout( () => {
			resolve( result );
		}, 2000 );
	} );
};

export default dummy;
