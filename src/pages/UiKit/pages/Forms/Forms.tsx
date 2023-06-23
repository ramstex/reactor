import Section from '../../../../components/Markup/Section/Section';
import Registration from '../../../../components/Forms/Registration/Registration';

import './style.scss';

const PageUiKitForms = () => {
	const onRegSuccess = () => {
		alert( 'REG SUCCESS!!!!!!!!!' );
	}

	return (
		<Section>
			<Registration
				onSuccess={ onRegSuccess }
			/>
		</Section>
	);
};

export default PageUiKitForms;
