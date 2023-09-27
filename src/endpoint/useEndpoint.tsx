import useUser from './user/useUser';
import useRegistration from './registration/useRegistration';
import useLogin from './login/useLogin';
import useRemind from './remind/useRemind';
import useLogout from './logout/useLogout';

const useEndpoint = () =>{
	const { update } = useUser();
	const { register } = useRegistration();
	const { login } = useLogin();
	const { remind } = useRemind();
	const { logout } = useLogout();

	return {
		user: { update },
		registration: { register },
		login: { login },
		remind: { remind },
		logout: { logout },
	};
};

export default useEndpoint;
