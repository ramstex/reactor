// ToDo: JSDocs

// Modules, packages, plugins
import axios, { AxiosResponse } from 'axios';
import useEnv from './useEnv';
import dummy from '../model/helpers/dummy';

// Enums
import { EApiMethods } from '../constants/api';

// Types
import type { TApiMethods } from '../constants/api';

type TQuery = <T>( method: TApiMethods, url: string, data?: FormData, headers?: object ) => Promise<T>;

type TGet = <T>( url: string, data?: FormData, headers?: object ) => Promise<T>;
type TPost = <T>( url: string, data?: FormData, headers?: object ) => Promise<T>;
type TDelete = <T>( url: string, data?: FormData, headers?: object ) => Promise<T>;
type TPatch = <T>( url: string, data?: FormData, headers?: object ) => Promise<T>;

interface IApi {
	query: TQuery;
	get: TGet;
	post: TPost;
	delete: TDelete;
	patch: TPatch;
}

const query: TQuery = async ( method, url, data, headers ) => {
	const { isProduction } = useEnv();

	let response: AxiosResponse;

	if ( isProduction ) {
		response = await axios( {
			method,
			url,
			data,
			headers,
		} );
	} else {
		response = await dummy( method, url, data, headers );
	}

	return new Promise ( ( resolve ) => {
		resolve( response.data
			? response.data
			: response );
	} );
};

const getQuery: TGet = async ( url, data, headers ) => {
	return query(
		EApiMethods.get,
		url,
		data,
		headers
	);
};

const postQuery: TPost = async ( url, data, headers ) => {
	console.log( 'plugin: API, method: TPost', {
		url,
		data,
		headers,
	} );

	return query(
		EApiMethods.post,
		url,
		data,
		headers
	)
};

const deleteQuery: TDelete = async ( url, data, headers ) => {
	return query(
		EApiMethods.delete,
		url,
		data,
		headers
	)
};

const patchQuery: TPatch = async ( url, data, headers ) => {
	return query(
		EApiMethods.patch,
		url,
		data,
		headers
	)
};

const Api: IApi = {
	query,
	get: getQuery,
	post: postQuery,
	delete: deleteQuery,
	patch: patchQuery,
};

export default Api;
