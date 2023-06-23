import classBuilder from '../../plugins/classBuilder';
import { ERowAlignV } from '../Grid/Row/helpers';

import BaseLogo from '../Base/Logo/Logo';
import Container from '../Markup/Container/Container';
import Row from '../Grid/Row/Row';
import Col from '../Grid/Col/Col';
import Nav from './components/Nav/Nav';

import Logo from '../../assets/images/logo-racoon.svg';

import './style.scss';

import type { THeaderComponent } from './types';

const Header: THeaderComponent = ( props ) => {
	const { className } = props;

	const classNameRoot = classBuilder( 'header', className );

	return (
		<header className={ classNameRoot }>
			<Container wide>
				<Row alignV={ ERowAlignV.center }>
					<Col>
						<BaseLogo
							className={ 'header__logo' }
							src={ Logo }
							href={ 'https://google.com' }
							target={ '_blank' }
						/>
					</Col>

					<Col>
						<Nav />
					</Col>
				</Row>
			</Container>
		</header>
	);
}

export default Header;
