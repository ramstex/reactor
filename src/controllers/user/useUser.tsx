import useModel from '../../model/useModel';

import type { TGetUser, TUpdateUser, TUseUser } from './types';

const {
	getUser: $GetUser,
	updateUser: $UpdateUser,
} = useModel();

const getUser: TGetUser = () => {
	console.log( 'controller: User, method: getUser, point 1' );

	return $GetUser();
};

const updateUser: TUpdateUser = ( data ) => {
	console.log( 'controller: User, method: updateUser, point 1' );

	return $UpdateUser( data );
};

const useUser: TUseUser = () => {
	return {
		getUser: getUser,
		updateUser: updateUser,
	};
};

export default useUser;
