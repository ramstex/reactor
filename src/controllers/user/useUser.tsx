import useModel from '../../model/useModel';
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from './store';

import type {
	TUserController, TUserStore, TFormatUserData, TUpdateUserStore
} from './types';

const useUser: TUserController = () => {
	const {
		user: userModel,
		registration: registrationModel,
		login: loginModel,
		remind: remindModel,
		logout: logoutModel,
	} = useModel();

	const dispatch = useDispatch();

	const user = useSelector( ( state: TUserStore ) => {
		return state.user.user;
	} );

	/**
	 * Updating user store.
	 *
	 * @param { TUser= } data - user data
	 */
	const updateUserStore: TUpdateUserStore = ( data ) => {
		dispatch( setUser( data ) );
	}

	/**
	 * Getting needed user data from a server response.
	 *
	 * @param { TUpdateUserResponse } data - server response object
	 * @return { TUser } - user data
	 */
	const formatUserData: TFormatUserData = ( data ) => {
		if ( !!data?.User ){
			return {
				login: data.User.login,
				email: data.User.email,
				fio: data.User.fio,
			};
		} else {
			return null;
		}
	};

	return {
		/**
		 * User data from store
		 */
		user,

		/**
		 * If there is some data passed, uploading it to the server.
		 * Otherwise, getting user data from the server.
		 *
		 * @param { FormData= } data - user data to upload.
		 * @return { Promise<IUser> } - updated user data
		 */
		update: async ( data ) => {
			const userResponse = await userModel.update( data );

			const userData = formatUserData( userResponse );
			updateUserStore( userData );

			return userData;
		},

		/**
		 * Register new user.
		 *
		 * @param { FormData } data - Registration form data
		 * @returns { Promise<TUserLoginData> } - Object containing a registration status and new user data
		 */
		register: async ( data ) => {
			const regResponse = await registrationModel.register( data );
			const {
				success,
				error,
			} = regResponse;

			if ( success ) {
				const userResponse = await userModel.update();

				const userData = formatUserData( userResponse );
				updateUserStore( userData );

				return {
					success: success,
					error: error,
					user: userData,
				};
			} else {
				return {
					success: success,
					error: error,
					user: null,
				};
			}
		},

		/**
		 * Logging user in.
		 *
		 * @param { FormData } data - Login form data
		 * @returns { Promise<TUserLoginData> } - Object containing a login status and new user data
		 */
		login: async ( data ) => {
			const loginResponse = await loginModel.login( data );
			const {
				success,
				error,
			} = loginResponse;

			if ( success ) {
				const userResponse = await userModel.update();

				const userData = formatUserData( userResponse );
				updateUserStore( userData );

				return {
					success: success,
					error: error,
					user: userData,
				};
			} else {
				return {
					success: success,
					error: error,
					user: null,
				};
			}
		},

		/**
		 * Restores forgotten password.
		 *
		 * @param { FormData } data - Reminding form data
		 * @returns { Promise<TUserRemindData> } - Object containing a reminding status
		 */
		remind: async ( data ) => {
			const remindResponse = await remindModel.remind( data );
			const {
				success,
				error,
			} = remindResponse;

			return {
				success,
				error: error || null,
			};
		},

		/**
		 * Logging user out
		 */
		logout: async () => {
			await logoutModel.logout();

			updateUserStore();
		},
	};
}

export default useUser;
