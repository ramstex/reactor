import React from 'react';
import classnames from 'classnames';

import UiKitConfig from '/config/ui-kit.jsx';

import BaseLink from '/src/components/Base/Link/Link.jsx';
import { Row, Col } from '/src/components/Grid/Grid.jsx';

import './Nav.scss';

const LocalNav = ( props ) => {
	const { className } = props;
	const classNameRoot = classnames( 'ui-kit-nav', className );

	return (
		<div className={ classNameRoot }>
			<Row>
				{
					UiKitConfig.pages.map( ( page ) => {
						return (
							<Col key={ page.name }>
								<BaseLink href={ page.href }>{ page.title || page.name }</BaseLink>
							</Col>
						);
					} )
				}
			</Row>
		</div>
	);
};

export default LocalNav;
