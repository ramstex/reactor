import React from 'react';
import media from '../../../../plugins/media.jsx';

import MarkupSection from '../../../../components/Markup/Section/Section.jsx';
import { GridRow, GridCol } from '../../../../components/Grid/Grid.jsx';
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
	} = media();

	return (
		<div className={ 'page-ui-kit-media' }>
			<MarkupSection title={ 'Ui Kit - Media' }>
				<LocalNav />

				<GridRow>
					<GridCol col={ 3 }>
						<p>Device:</p>
					</GridCol>

					<GridCol col={ 9 }> {
						getValueForDevice( {
							mobile: 'MOBILE',
							tablet: 'TABLET',
							desktop: 'DESKTOP',
						} )
					}
					</GridCol>

					<GridCol col={ 3 }>
						<p>Orientation:</p>
					</GridCol>

					<GridCol col={ 9 }> {
						getValueForOrientation( { portrait: 'PORTRAIT' }, 'LANDSCAPE' )
					}
					</GridCol>
				</GridRow>

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
