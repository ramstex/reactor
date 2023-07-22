import useRegistration from './registration/useRegistration';
import useLogout from './logout/useLogout';
import useUser from './user/useUser';

const useModel = () =>{
	const { register } = useRegistration();
	const { logout } = useLogout();
	const { update } = useUser();

	return {
		registration: { register },
		logout: { logout },
		user: { update },
	};
};

export default useModel;
