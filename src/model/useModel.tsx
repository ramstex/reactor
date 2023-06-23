import useRegistration from './registration/useRegistration';
import useLogout from './useLogout';
import useUser from './user/useUser';

const { register } = useRegistration();
const { logout } = useLogout();
const {
	getUser,
	updateUser,
} = useUser();

const useModel = () =>{
	return {
		// Registration
		register,

		//Logout
		logout,

		// User
		getUser,
		updateUser,
	};
};

export default useModel;
