import React from 'react';
import classnames from 'classnames';

import BaseLogo from '../Base/Logo/Logo.jsx';
import MarkupContainer from '../Markup/Container/Container.jsx';
import { GridRow, GridCol } from '../Grid/Grid.jsx';
import LocalNav from './components/Nav/Nav.jsx';
import LocalProfile from './components/Profile/Profile.jsx';

import './Header.scss';

import Logo from '../../assets/images/logo-racoon.svg';

const Header = ( props ) => {
	const { className } = props;

	const classNameRoot = classnames( 'header', className );

	return (
		<header className={ classNameRoot }>
			<MarkupContainer wide>
				<GridRow alignV={ 'center' }>
					<GridCol>
						<BaseLogo
							className={ 'header__logo' }
							src={ Logo }
							href={ 'https://google.com' }
							target={ '_blank' }
						/>
					</GridCol>

					<GridCol>
						<LocalNav />
					</GridCol>

					<GridCol offset={ 'auto' }>
						<LocalProfile />
					</GridCol>
				</GridRow>
			</MarkupContainer>
		</header>
	);
}

export default Header;
