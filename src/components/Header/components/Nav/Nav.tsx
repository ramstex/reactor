import classBuilder from '../../../../plugins/classBuilder';

import Link from '../../../Base/Link/Link';
import Row from '../../../Grid/Row/Row';
import Col from '../../../Grid/Col/Col';

import _ROUTES from '../../../../../config/routes.js';

import './style.scss';

import type { THeaderNavComponent } from './types';

const LocalNav: THeaderNavComponent = ( props ) => {
	const { className } = props;

	const classNameRoot = classBuilder( 'header-nav', className );

	return (
		<Row
			className={ classNameRoot }
			tag={ 'ul' }
		>
			<Col tag={ 'li' }>
				<Link href={ '/' }>Главная</Link>
			</Col>

			<Col tag={ 'li' }>
				<Link href={ _ROUTES.uiKit.root }>Ui-Kit</Link>
			</Col>
		</Row>
	);
}

export default LocalNav;
