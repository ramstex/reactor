import React from 'react';
import classnames from 'classnames';

import BaseLogo from '../Base/Logo/Logo.jsx';
import MarkupContainer from '../Markup/Container/Container.jsx';
import { Row, Col } from '../Grid/Grid.jsx';
import LocalNav from './components/Nav/Nav.jsx';

import './Header.scss';

import Logo from '../../assets/images/logo-racoon.svg';

const Header = ( props ) => {
	const { className } = props;

	const classNameRoot = classnames( 'header', className );

	return (
		<header className={ classNameRoot }>
			<MarkupContainer wide>
				<Row alignV={ 'center' }>
					<Col>
						<BaseLogo
							className={ 'header__logo' }
							src={ Logo }
							href={ 'https://google.com' }
							target={ '_blank' }
						/>
					</Col>

					<Col>
						<LocalNav />
					</Col>
				</Row>
			</MarkupContainer>
		</header>
	);
}

export default Header;
