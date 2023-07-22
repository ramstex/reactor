import useModel from '../../model/useModel';
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from './store';

import type { TUserController, TUserStore, TUser } from './types';
import type { TUpdateUserResponse, TUserResponseUser } from '../../model/user/types';

const {
	user: userModel,
	registration: registrationModel,
	logout: logoutModel,
} = useModel();

const useUser: TUserController = () => {
	const dispatch = useDispatch();

	const user = useSelector( ( state: TUserStore ) => {
		return state.user.user;
	} );

	const updateUserStore: ( data: TUser | null ) => void = ( data ) => {
		console.log( 'updateUserStore', data );
		dispatch( setUser( data ) );
	}

	const getUserResponseData: ( data: TUpdateUserResponse ) => TUserResponseUser = ( data ) => {
		return {
			login: data.User.login,
			email: data.User.email,
			fio: data.User.fio,
		};
	};

	console.log( 'useUser', user );

	return {
		user,

		update: async ( data ) => {
			const userResponse = await userModel.update( data );

			const userData = getUserResponseData( userResponse );
			updateUserStore( userData );

			return userData;
		},

		register: async ( data ) => {
			const regResponse = await registrationModel.register( data );
			const userResponse = await userModel.update();

			const userData = getUserResponseData( userResponse );
			updateUserStore( userData );

			return {
				success: regResponse.success,
				error: regResponse.error || null,
				user: userData,
			};
		},

		logout: async () => {
			await logoutModel.logout();

			updateUserStore( null );
		},
	};
}

export default useUser;
