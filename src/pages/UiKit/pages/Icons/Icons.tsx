import { EIconName } from '../../../../components/Base/Icon/helper';

import Icon from '../../../../components/Base/Icon/Icon';
import Section from '../../../../components/Markup/Section/Section';
import Row from '../../../../components/Grid/Row/Row';
import Col from '../../../../components/Grid/Col/Col';

const UiKitIcons = () => {
	return (
		<div className={ 'ui-kit-icons' }>
			<Section>
				<Row className={ '_mb_3' }>
					<Col>
						<Icon name={ EIconName.vkontakte } />
					</Col>

					<Col>
						<Icon name={ EIconName.facebook } />
					</Col>

					<Col>
						<Icon name={ EIconName.twitter } />
					</Col>

					<Col>
						<Icon name={ EIconName.instagram } />
					</Col>

					<Col>
						<Icon name={ EIconName.odnoklassniki } />
					</Col>

					<Col>
						<Icon name={ EIconName.telegram } />
					</Col>

					<Col>
						<Icon name={ EIconName.whatsapp } />
					</Col>

					<Col>
						<Icon name={ EIconName.viber } />
					</Col>

					<Col>
						<Icon name={ EIconName.youtube } />
					</Col>

					<Col>
						<Icon name={ EIconName.tiktok } />
					</Col>
				</Row>

				<Row className={ '_mb_3' }>
					<Col>
						<Icon name={ EIconName.arrowUp } />
					</Col>

					<Col>
						<Icon name={ EIconName.arrowDown } />
					</Col>

					<Col>
						<Icon name={ EIconName.arrowLeft } />
					</Col>

					<Col>
						<Icon name={ EIconName.arrowRight } />
					</Col>
				</Row>

				<Row className={ '_mb_3' }>
					<Col>
						<Icon name={ EIconName.close } />
					</Col>

					<Col>
						<Icon name={ EIconName.plus } />
					</Col>

					<Col>
						<Icon name={ EIconName.minus } />
					</Col>

					<Col>
						<Icon name={ EIconName.search } />
					</Col>

					<Col>
						<Icon name={ EIconName.refresh } />
					</Col>
				</Row>

				<Row className={ '_mb_3' }>
					<Col>
						<Icon name={ EIconName.profileNoUser } />
					</Col>

					<Col>
						<Icon name={ EIconName.profileUser } />
					</Col>

					<Col>
						<Icon name={ EIconName.login } />
					</Col>

					<Col>
						<Icon name={ EIconName.logout } />
					</Col>
				</Row>

				<Row className={ '_mb_3' }>
					<Col>
						<Icon name={ EIconName.eyeOpened } />
					</Col>

					<Col>
						<Icon name={ EIconName.eyeClosed } />
					</Col>
				</Row>
			</Section>
		</div>
	);
};

export default UiKitIcons;
