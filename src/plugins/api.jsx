import axios from 'axios';
import useEnv from './env.js';
import dummyApi from './api.dummy.js';

const urlWithParams = ( url, params = {} ) => {
	let result = url;

	if ( result.slice( -1 ) !== '/' ) {
		result = `${ result }/`;
	}

	let divider = url.indexOf( '?' ) >= 0
		? '&'
		: '?';

	Object.entries( params ).forEach( ( [ key, value ] ) => {
		const param = `${ divider }${ key }${ value === undefined
			? ''
			: `=${ value }`
		}`;

		if ( divider === '?' ) {
			divider = '&';
		}

		result = `${ result }${ param }`
	} );

	return result;
};

const query = async ( method = 'get', url, params, data, options = {} ) => {
	const { isProduction } = useEnv();

	if ( isProduction ) {
		return await axios( {
			...options,
			method,
			url: urlWithParams( url, params ),
			data,
		} );
	}

	return await dummyApi( method, urlWithParams( url, params ), params, data, options );
};

const useApi = () => {
	return {
		query,
		urlWithParams,
	};
};

export default useApi;
