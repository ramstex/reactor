import React from 'react';
import classnames from 'classnames';

import _UI_KIT_CONFIG from '/src/pages/UiKit/config.jsx';

import BaseLink from '/src/components/Base/Link/Link.jsx';
import { GridRow, GridCol } from '/src/components/Grid/Grid.jsx';

import './Nav.scss';

const LocalNav = ( props ) => {
	const { className } = props;
	const classNameRoot = classnames( 'ui-kit-nav', className );

	return (
		<div className={ classNameRoot }>
			<GridRow>
				{
					_UI_KIT_CONFIG.pages.map( ( page ) => {
						return (
							<GridCol key={ page.name }>
								<BaseLink href={ page.href }>{ page.title || page.name }</BaseLink>
							</GridCol>
						);
					} )
				}
			</GridRow>
		</div>
	);
};

export default LocalNav;
