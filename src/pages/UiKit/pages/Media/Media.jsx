import React from 'react';
// import Media from '../../../../plugins/media.jsx';
import useMedia from '../../../../hooks/useMedia.jsx';
// import { useMediaQuery } from 'react-responsive';

import MarkupSection from '../../../../components/Markup/Section/Section.jsx';
import { Row, Col } from '../../../../components/Grid/Grid.jsx';
import LocalNav from '../../components/Nav/Nav.jsx';

import './Media.scss';

const PageUiKitMedia = () => {
	const {
		isMobile,
		isTablet,
		isDesktop,
		getValueForDevice,
		isLandscape,
		isPortrait,
		getValueForOrientation,
	} = useMedia();

	return (
		<div className={ 'page-ui-kit-media' }>
			<MarkupSection title={ 'Ui Kit - Media' }>
				<LocalNav />

				<Row>
					<Col col={ 3 }>
						<p>Device:</p>
					</Col>

					<Col col={ 9 }> {
						getValueForDevice( {
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
						getValueForOrientation( { portrait: 'PORTRAIT' }, 'LANDSCAPE' )
					}
					</Col>
				</Row>

				<br />
				<hr />
				<br />
				{ isMobile && <p>visible on mobile</p> }
				{ isTablet && <p>visible on tablet</p> }
				{ isDesktop && <p>visible on desktop</p> }

				<br />
				<hr />
				<br />
				{ isLandscape && <p>visible on landscape</p> }
				{ isPortrait && <p>visible on portrait</p> }

			</MarkupSection>
		</div>
	);
};

export default PageUiKitMedia;
