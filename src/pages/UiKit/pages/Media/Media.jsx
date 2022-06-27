import React from 'react';
import Media from '../../../../plugins/media.jsx';

import MarkupSection from '../../../../components/Markup/Section/Section.jsx';
import { Row, Col } from '../../../../components/Grid/Grid.jsx';
import LocalNav from '../../components/Nav/Nav.jsx';

import './Media.scss';

const PageUiKitMedia = () => {
	return (
		<div className={ 'page-ui-kit-media' }>
			<MarkupSection title={ 'Ui Kit - Media' }>
				<LocalNav />

				<Row>
					<Col col={ 3 }>
						<p>Device:</p>
					</Col>

					<Col col={ 9 }> {
						Media.getValueForDevice( {
							mobile: 'MOBILE',
							tablet: 'TABLET',
							desktop: 'DESKTOP',
						} )
					}
					</Col>

					<Col col={ 3 }>
						<p>Orientation:</p>
					</Col>

					<Col col={ 9 }> {
						Media.getValueForOrientation( { portrait: 'PORTRAIT' }, 'LANDSCAPE' )
					}
					</Col>
				</Row>
			</MarkupSection>
		</div>
	);
}

export default PageUiKitMedia;
