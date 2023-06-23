import type {
	TGetUser as $TGetUser,
	TUpdateUser as $TUpdateUser
} from '../../model/user/types';

export type TGetUser = $TGetUser;
export type TUpdateUser = $TUpdateUser;

export type TUseUser = () => {
	getUser: TGetUser;
	updateUser: TUpdateUser;
};
