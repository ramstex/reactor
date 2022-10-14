import axios from 'axios';
import useEnv from './env.js';

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

	return new Promise( ( onResolve, onReject ) => {
		setTimeout( () => {
			if ( data.email !== 'qwe@qwe.qwe' ) {
				onReject(
					{
						name: 'email',
						error: {
							type: 'notFound',
							message: 'Not found!',
						},
					} );

				return;
			}

			if ( data.password !== 'qwe' ) {
				onReject(
					{
						name: 'password',
						error: {
							type: 'wrong',
							message: 'Wrong password',
						},
					} );

				return;
			}

			onResolve();
		}, 2000 );
	} );
};

const useApi = () => {
	return {
		query,
		urlWithParams,
	};
};

export default useApi;
