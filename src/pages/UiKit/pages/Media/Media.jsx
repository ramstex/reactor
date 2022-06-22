import React, { useState } from 'react';
import Media from '../../../../plugins/media.jsx';

import MarkupSection from '../../../../components/Markup/Section/Section.jsx';
import { Row, Col } from '../../../../components/Grid/Grid.jsx';
import LocalNav from '../../components/Nav/Nav.jsx';

import './Media.scss';

const PageUiKitMedia = ( props ) => {
	if ( Media.isMobile() ) {
		console.log( 'MOBILE' );
	} else {
		console.log( 'DESKTOP' );
	}

	return (
		<div className={ 'page-ui-kit-media' }>
			<MarkupSection title={ 'Ui Kit - Media' }>
				<LocalNav />

				<Row>
					<Col col={ 4 }>DESKTOP</Col>
				</Row>
			</MarkupSection>
		</div>
	);
}

export default PageUiKitMedia;
