import useUser from '../../../../controllers/user/useUser';

import Section from '../../../../components/Markup/Section/Section';
import Registration from '../../../../components/Blocks/Registration/Registration';
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
					: <Registration />
			}
		</Section>
	);
};

export default PageUiKitForms;
