import useUser from '../../../../controllers/user/useUser';

import Section from '../../../../components/Markup/Section/Section';
import Registration from '../../../../components/Blocks/Registration/Registration';
import Login from '../../../../components/Blocks/Login/Login';
import Profile from '../../../../components/Blocks/Profile/Profile';

import './style.scss';

const PageUiKitForms = () => {
	const { user } = useUser();
	const isUser = !!user ;

	return (
		<Section>
			{
				isUser
					? <Profile />
					: <Login />
			}
		</Section>
	);
};

export default PageUiKitForms;
