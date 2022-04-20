import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import MarkupSection from '../../../../components/Markup/Section/Section.jsx';
import UiTabs from '../../../../components/Ui/Tabs/Tabs.jsx';
import FormRegistration from '../../../../components/Forms/Registration/Registration.jsx';
import FormLogin from '../../../../components/Forms/Login/Login.jsx';
import LocalNav from '../../components/Nav/Nav.jsx';

import './Forms.scss';

const tabs = [
	{
		id: 'registration',
		title: 'Registration',
		content: <FormRegistration key={ 'registration' }/>,
	},

	{
		id: 'login',
		title: 'Login',
		content: <FormLogin key={ 'login' }/>,
	},

	{
		id: 'remind',
		title: 'Remind',
		content: 'Here will be a remind form',
	},
];

class PageUiKitColors extends React.Component {
	//	Классы
	classNameRoot() {
		const { className } = this.props;
		return classnames( 'page-ui-kit-colors', className );
	}

	render() {
		return (
			<div className={ this.classNameRoot() }>
				<MarkupSection title={ 'Ui Kit - Forms' }>
					<LocalNav />

					<UiTabs
						tabs={ tabs }
					/>
				</MarkupSection>
			</div>
		);
	}
}

PageUiKitColors.propTypes = {
	className: PropTypes.string,
};

export default PageUiKitColors;
