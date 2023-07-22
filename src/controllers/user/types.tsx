interface IUser {
	login: string | null;
	email: string | null;
	fio: string | null;
}
export type TUser = IUser;

type TUpdateUser = ( data?: FormData ) => Promise<IUser>;

interface IRegisterUserData {
	success: boolean;
	error: string | null;
	user: IUser;
}
type TRegisterUserData = IRegisterUserData;

type TRegisterUser = ( data: FormData ) => Promise<TRegisterUserData>;
type TLogoutUser = () => Promise<void>;

interface IUserStore {
	user: {
		user: TUser
	};
}
export type TUserStore = IUserStore;

export type TUserController = () => {
	user: TUser;
	update: TUpdateUser;
	register: TRegisterUser;
	logout: TLogoutUser;
};
