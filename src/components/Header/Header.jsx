import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import BaseLogo from '../Base/Logo/Logo.jsx';
import MarkupContainer from '../Markup/Container/Container.jsx';

import './Header.scss';

import Logo from '../../assets/images/logo-racoon.svg';

class Header extends React.Component {
	render() {
		const { className } = this.props;

		return (
			<header className={ classnames('header', className) }>
				<MarkupContainer>
					<BaseLogo image={ Logo } />
				</MarkupContainer>
			</header>
		);
	}
}

Header.propTypes = {
	className: PropTypes.string,
};

export default Header;
