import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import MarkupSection from '../../../../components/Markup/Section/Section.jsx';
import UiTabs from '../../../../components/Ui/Tabs/Tabs.jsx';
import FormRegistration from '../../../../components/Forms/Registration/Registration.jsx';
import FormLogin from '../../../../components/Forms/Login/Login.jsx';
import FormRemind from '../../../../components/Forms/Remind/Remind.jsx';
import LocalNav from '../../components/Nav/Nav.jsx';

import './Forms.scss';

const tabs = [
	{
		id: 'registration',
		title: 'Registration',
		content: <FormRegistration />,
	},

	{
		id: 'login',
		title: 'Login',
		content: <FormLogin />,
	},

	{
		id: 'remind',
		title: 'Remind',
		content: <FormRemind />,
	},
];

class PageUiKitColors extends React.Component {
	//	Классы
	classNameRoot() {
		const { className } = this.props;
		return classnames('page page-ui-kit-forms', className);
	}

	render() {
		return (
			<div className={this.classNameRoot()}>
				<MarkupSection title={'Ui Kit - Forms'}>
					<LocalNav />

					<UiTabs tabs={tabs} />
				</MarkupSection>
			</div>
		);
	}
}

PageUiKitColors.propTypes = {
	className: PropTypes.string,
};

export default PageUiKitColors;
