import useUser from './user/useUser';
import useRegistration from './registration/useRegistration';
import useLogin from './login/useLogin';
import useLogout from './logout/useLogout';

const useModel = () =>{
	const { update } = useUser();
	const { register } = useRegistration();
	const { login } = useLogin();
	const { logout } = useLogout();

	return {
		user: { update },
		registration: { register },
		login: { login },
		logout: { logout },
	};
};

export default useModel;
