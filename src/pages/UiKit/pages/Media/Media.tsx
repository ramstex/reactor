import useMedia from '../../../../modules/media/index';

import Section from '../../../../components/Markup/Section/Section';
import Row from '../../../../components/Grid/Row/Row';
import Col from '../../../../components/Grid/Col/Col';

import './style.scss';

const UiKitMedia = () => {
	const {
		isMobile,
		isTablet,
		isDesktop,
		isLandscape,
		isPortrait,
	} = useMedia();

	return (
		<div className={ 'ui-kit-media' }>
			<Section>
				<Row>
					<Col cols={ 3 }>
						<p>
							<>Device: </>

							{ isMobile && <b>mobile</b> }
							{ isTablet && <b>tablet</b> }
							{ isDesktop && <b>desktop</b> }
						</p>
					</Col>

					<Col cols={ 3 }>
						<p>
							<>Orientation: </>

							{ isLandscape && <b>landscape</b> }
							{ isPortrait && <b>portrait</b> }
						</p>
					</Col>
				</Row>
			</Section>
		</div>
	);
};

export default UiKitMedia;
