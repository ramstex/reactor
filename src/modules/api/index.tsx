// ToDo: JSDocs

// Modules, packages, plugins
import axios, { AxiosResponse } from 'axios';
import { Routes } from './helper';
import useEnv from '../../plugins/useEnv';
import dummy from './dummy';

// Enums
import { EApiMethods } from './helper';

// Types
import type {
	TQuery,
	TGet,
	TPost,
	TDelete,
	TPatch,
	IApi
} from './types';

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
	routes: Routes,
};

export default Api;
