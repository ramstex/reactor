import { useState } from 'react';
import classBuilder from '../../../plugins/classBuilder';
import useUser from '../../../controllers/user/useUser';
import { EAuthStates } from './helper';

import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import Remind from './components/Remind/Remind';
import Profile from './components/Profile/Profile';

const rootClassName = 'auth';

const Auth = () => {
	const { user } = useUser();
	const isUser = !!user;

	const [ state, setState ] = useState( isUser
		? EAuthStates.profile
		: EAuthStates.registration
	);

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

	const onRegistrationLogin = () => {
		setState( EAuthStates.login );
	}

	const onLoginSuccess = () => {
		console.log( 'Login success' );
	}

	const onLoginError = () => {
		console.log( 'Login error' );
	}

	const onLoginRemind = () => {
		setState( EAuthStates.remind );
	}

	const onLoginRegistration = () => {
		setState( EAuthStates.registration );
	}

	const onRemindSuccess = () => {
		console.log( 'Remind success' );
	}

	const onRemindError = () => {
		console.log( 'Remind error' );
	}

	const onRemindLogin = () => {
		setState( EAuthStates.login );
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
								onLogin={ onRegistrationLogin }
							/>
						}

						{
							state === EAuthStates.login &&
							<Login
								className={ classNames.login }
								onSuccess={ onLoginSuccess }
								onError={ onLoginError }
								onRemind={ onLoginRemind }
								onRegistration={ onLoginRegistration }
							/>
						}

						{
							state === EAuthStates.remind &&
							<Remind
								className={ classNames.login }
								onSuccess={ onRemindSuccess }
								onError={ onRemindError }
								onLogin={ onRemindLogin }
							/>
						}
					</>
			}
		</div>
	);
}

export default Auth;
