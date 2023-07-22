/**
 * Interface and type for a User property contained in a response of the user endpoint
 */
interface IUserResponseUser {
	login: string | null;
	email: string | null;
	fio: string | null;
}
type TUserResponseUser = IUserResponseUser;

/**
 * Interface and type for a response of the user endpoint
 */
interface IUpdateUserResponse {
	User: TUserResponseUser;
}
export type TUpdateUserResponse = IUpdateUserResponse;

type TUpdateUserModel = ( data?: FormData ) => Promise<TUpdateUserResponse>;

export type TUserModel = () => {
	update: TUpdateUserModel,
};
