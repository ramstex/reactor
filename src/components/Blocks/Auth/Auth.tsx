import { useMemo } from 'react';
import classBuilder from '../../../plugins/classBuilder';
import useUser from '../../../services/user/useUser';
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
	} = useUser();

	const isUser = useMemo( () => {
		return !!user;
	}, [ user ] );

	const classNames = {
		root: classBuilder( rootClassName ),
		registration: classBuilder( `${ rootClassName }__registration` ),
		login: classBuilder( `${ rootClassName }__login` ),
		remind: classBuilder( `${ rootClassName }__remind` ),
		profile: classBuilder( `${ rootClassName }__profile` ),
	};

	return (
		<div className={ classNames.root }>
			{
				isUser
					? <Profile className={ classNames.profile } />
					: <>
						{
							state === EAuthStates.registration &&
							<Registration className={ classNames.registration } />
						}

						{
							state === EAuthStates.login &&
							<Login className={ classNames.login } />
						}

						{
							state === EAuthStates.remind &&
							<Remind className={ classNames.login } />
						}
					</>
			}
		</div>
	);
}

export default Auth;
