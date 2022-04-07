import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import BaseLogo from '../Base/Logo/Logo.jsx';
import MarkupContainer from '../Markup/Container/Container.jsx';
import LocalNav from './components/Nav/Nav.jsx';

import './Header.scss';

import Logo from '../../assets/images/logo-racoon.svg';

class Header extends React.Component {
	//	Классы
	classNameRoot() {
		const { className } = this.props;
		return classnames('header', className);
	}

	classNameLogo() {
		return classnames('header__logo');
	}

	render() {
		return (
			<header className={ this.classNameRoot() }>
				<MarkupContainer wide>
					<BaseLogo
						className={ this.classNameLogo() }
						image={ Logo }
						href={ 'https://google.com' }
						target={ '_blank' }
					/>

					<LocalNav />
				</MarkupContainer>
			</header>
		);
	}
}

Header.propTypes = {
	className: PropTypes.string,
};

export default Header;
