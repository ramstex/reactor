import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import BaseLink from '../../../Base/Link/Link.jsx';

class LocalNav extends React.Component {
	//	Классы
	classNameRoot() {
		const { className } = this.props;
		return classnames('header-nav', className);
	}

	render() {
		return (
			<ul className={ this.classNameRoot() }>
				<li>
					<BaseLink href={ '/' }>Главная</BaseLink>
				</li>
				<li>
					<BaseLink href={ '/ui-kit' }>Ui-Kit</BaseLink>
				</li>
			</ul>
		);
	}
}

LocalNav.propTypes = {
	className: PropTypes.string,
};

export default LocalNav;
