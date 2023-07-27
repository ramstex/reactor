import { EUserAuthStates } from './helper';

import type { TUpdateUserResponse } from '../../model/user/types';

export type TUserAuthStates = `${ EUserAuthStates }`;

interface IUser {
	login: string | null;
	email: string | null;
	fio: string | null;
}
export type TUser = IUser | null;

interface IUserLoginData {
	success: boolean;
	error: string | null;
	user: TUser;
}
type TUserLoginData = IUserLoginData;

interface IUserRemindData {
	success: boolean;
	error: string | null;
}
type TUserRemindData = IUserRemindData;

type TUpdateUser = ( data?: FormData ) => Promise<TUser>;
type TRegisterUser = ( data: FormData ) => Promise<TUserLoginData>;
type TLoginUser = ( data: FormData ) => Promise<TUserLoginData>;
type TRemindUser = ( data: FormData ) => Promise<TUserRemindData>;
type TLogoutUser = () => Promise<void>;
type TSetStateUser = ( state: TUserAuthStates ) => TUserAuthStates;

interface IUserStore {
	user: {
		user: TUser;
		state: TUserAuthStates;
	};
}
export type TUserStore = IUserStore;

export type TUpdateUserStore = ( data?: TUser ) => void;
export type TFormatUserData = ( data: TUpdateUserResponse ) => TUser;

export type TUserController = () => {
	user: TUser;
	update: TUpdateUser;
	register: TRegisterUser;
	login: TLoginUser;
	remind: TRemindUser;
	logout: TLogoutUser;
	state: TUserAuthStates;
	setState: TSetStateUser,
};
