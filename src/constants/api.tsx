export enum EApiMethods {
	get = 'get',
	post = 'post',
	delete = 'delete',
	patch = 'patch',
}

export type TApiMethods = `${ EApiMethods }`;
