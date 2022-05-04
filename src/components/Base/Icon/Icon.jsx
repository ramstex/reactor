import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './Icon.scss';

import Check from '../../../assets/icons/check.svg';
import ProfileLoggedOut from '../../../assets/icons/profile-logged-out.svg';
import ProfileLoggedIn from '../../../assets/icons/profile-logged-in.svg';

class BaseIcon extends React.Component {
	//	Классы
	classNameRoot() {
		const { className } = this.props;
		return classnames('base-icon', className);
	}

	getIcon() {
		switch (this.props.icon) {
			case 'check':
				return Check;
			case 'profile-logged-in':
				return ProfileLoggedIn;
			case 'profile-logged-out':
				return ProfileLoggedOut;
		}
	}

	render() {
		const { onClick } = this.props;

		const Svg = this.getIcon();

		return <Svg className={this.classNameRoot()} onClick={onClick} />;
	}
}

BaseIcon.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	icon: PropTypes.oneOf(['check', 'profile-logged-in', 'profile-logged-out']),
	onClick: PropTypes.func,
};

export default BaseIcon;
