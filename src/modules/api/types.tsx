import { EApiMethods } from './helper';

// Union type for rest endpoint methods
export type TApiRestMethods = `${ EApiMethods }`;

export type TQuery = <T>( method: TApiRestMethods, url: string, data?: FormData, headers?: object ) => Promise<T>;

export type TGet = <T>( url: string, data?: FormData, headers?: object ) => Promise<T>;
export type TPost = <T>( url: string, data?: FormData, headers?: object ) => Promise<T>;
export type TDelete = <T>( url: string, data?: FormData, headers?: object ) => Promise<T>;
export type TPatch = <T>( url: string, data?: FormData, headers?: object ) => Promise<T>;

export interface IApi {
	query: TQuery;
	get: TGet;
	post: TPost;
	delete: TDelete;
	patch: TPatch;
	routes: {
		[key: string]: string;
	};
}
