import React from 'react';
import classnames from 'classnames';

import './Icon.scss';

import Check from '../../../assets/icons/check.svg';
import Search from '../../../assets/icons/search.svg';
import ProfileLoggedOut from '../../../assets/icons/profile-logged-out.svg';
import ProfileLoggedIn from '../../../assets/icons/profile-logged-in.svg';

class BaseIcon extends React.Component {
	//	Классы
	classNameRoot() {
		const { className } = this.props;

		return classnames( 'base-icon', className );
	}

	getIcon() {
		switch ( this.props.icon ) {
			case 'check':
				return Check;
			case 'search':
				return Search;
			case 'profile-logged-in':
				return ProfileLoggedIn;
			case 'profile-logged-out':
				return ProfileLoggedOut;
		}
	}

	render() {
		const { onClick } = this.props;

		const Svg = this.getIcon();

		return <Svg className={ this.classNameRoot() }
			onClick={ onClick } />;
	}
}

export default BaseIcon;
