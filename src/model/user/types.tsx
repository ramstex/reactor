/**
 * Interface for a response of the user endpoint
 */
export interface IUserApiResponse {
	User: IUserApiResponseUser
}

/**
 * Interface for a User property in response of the user endpoint
 */
interface IUserApiResponseUser {
	login: string;
	email: string;
	fio: string;
}

/**
 * Interface and type for a result of all functions returning user data.
 */
export interface IUserResult {
	login?: string;
	email?: string;
	fio?: string;
}
export type TUserResult = IUserResult | null;

export type TGetUser = () => Promise<IUserResult | null>;
export type TUpdateUser = ( data: FormData ) => Promise<IUserResult | null>;

export type TUseUser = () => {
	getUser: TGetUser;
	updateUser: TUpdateUser;
};
