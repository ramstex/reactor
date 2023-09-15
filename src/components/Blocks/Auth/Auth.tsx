import classBuilder from '../../../plugins/classBuilder';
import useUser from '../../../controllers/user/useUser';
import { EAuthStates } from './helper';

import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import Remind from './components/Remind/Remind';
import Profile from './components/Profile/Profile';

const rootClassName = 'auth';

const Auth = () => {
	const {
		user,
		state,
		setState,
	} = useUser();
	const isUser = !!user;
	console.log( 'user', user );

	const classNames = {
		root: classBuilder( rootClassName ),
		registration: classBuilder( `${ rootClassName }__registration` ),
		login: classBuilder( `${ rootClassName }__login` ),
		remind: classBuilder( `${ rootClassName }__remind` ),
		profile: classBuilder( `${ rootClassName }__profile` ),
	};

	const onRegistrationSuccess = () => {
		console.log( 'Registration success' );
	}

	const onRegistrationError = () => {
		console.log( 'Registration error' );
	}

	const onLoginSuccess = () => {
		console.log( 'Login success' );
	}

	const onLoginError = () => {
		console.log( 'Login error' );
	}

	const onRemindSuccess = () => {
		console.log( 'Remind success' );
	}

	const onRemindError = () => {
		console.log( 'Remind error' );
	}

	return (
		<div className={ classNames.root }>
			{
				isUser
					? <Profile className={ classNames.profile } />
					: <>
						{
							state === EAuthStates.registration &&
							<Registration
								className={ classNames.registration }
								onSuccess={ onRegistrationSuccess }
								onError={ onRegistrationError }
							/>
						}

						{
							state === EAuthStates.login &&
							<Login
								className={ classNames.login }
								onSuccess={ onLoginSuccess }
								onError={ onLoginError }
							/>
						}

						{
							state === EAuthStates.remind &&
							<Remind
								className={ classNames.login }
								onSuccess={ onRemindSuccess }
								onError={ onRemindError }
							/>
						}
					</>
			}
		</div>
	);
}

export default Auth;
