import { EUiKitColors } from './components/Color/helper';

import Section from '../../../../components/Markup/Section/Section';
import Row from '../../../../components/Grid/Row/Row';
import Col from '../../../../components/Grid/Col/Col';
import LocalColor from './components/Color/Color';

const UiKitColors = () => {
	return (
		<div className={ 'page-ui-kit-colors' }>
			<Section>
				<Row>
					<Col cols={ 2 }>
						<LocalColor color={ EUiKitColors.primary }>Primary</LocalColor>
					</Col>

					<Col cols={ 2 }>
						<LocalColor color={ EUiKitColors.primaryLight }>Primary light</LocalColor>
					</Col>

					<Col cols={ 2 }>
						<LocalColor color={ EUiKitColors.primaryDark }>Primary dark</LocalColor>
					</Col>
				</Row>

				<Row>
					<Col cols={ 2 }>
						<LocalColor color={ EUiKitColors.secondary }>Secondary</LocalColor>
					</Col>

					<Col cols={ 2 }>
						<LocalColor color={ EUiKitColors.secondaryLight }>Secondary light</LocalColor>
					</Col>

					<Col cols={ 2 }>
						<LocalColor color={ EUiKitColors.secondaryDark }>Secondary dark</LocalColor>
					</Col>
				</Row>

				<Row>
					<Col cols={ 2 }>
						<LocalColor color={ EUiKitColors.success }>Success</LocalColor>
					</Col>

					<Col cols={ 2 }>
						<LocalColor color={ EUiKitColors.successLight }>Success light</LocalColor>
					</Col>

					<Col cols={ 2 }>
						<LocalColor color={ EUiKitColors.successDark }>Success dark</LocalColor>
					</Col>
				</Row>

				<Row>
					<Col cols={ 2 }>
						<LocalColor color={ EUiKitColors.warning }>Warning</LocalColor>
					</Col>

					<Col cols={ 2 }>
						<LocalColor color={ EUiKitColors.warningLight }>Warning light</LocalColor>
					</Col>

					<Col cols={ 2 }>
						<LocalColor color={ EUiKitColors.warningDark }>Warning dark</LocalColor>
					</Col>
				</Row>

				<Row>
					<Col cols={ 2 }>
						<LocalColor color={ EUiKitColors.danger }>Danger</LocalColor>
					</Col>

					<Col cols={ 2 }>
						<LocalColor color={ EUiKitColors.dangerLight }>Danger light</LocalColor>
					</Col>

					<Col cols={ 2 }>
						<LocalColor color={ EUiKitColors.dangerDark }>Danger dark</LocalColor>
					</Col>
				</Row>

				<Row>
					<Col cols={ 2 }>
						<LocalColor color={ EUiKitColors.info }>Info</LocalColor>
					</Col>

					<Col cols={ 2 }>
						<LocalColor color={ EUiKitColors.infoLight }>Info light</LocalColor>
					</Col>

					<Col cols={ 2 }>
						<LocalColor color={ EUiKitColors.infoDark }>Info dark</LocalColor>
					</Col>
				</Row>

				<Row>
					<Col cols={ 2 }>
						<LocalColor color={ EUiKitColors.muted }>Muted</LocalColor>
					</Col>

					<Col cols={ 2 }>
						<LocalColor color={ EUiKitColors.mutedLight }>Muted light</LocalColor>
					</Col>

					<Col cols={ 2 }>
						<LocalColor color={ EUiKitColors.mutedDark }>Muted dark</LocalColor>
					</Col>
				</Row>

				<Row>
					<Col cols={ 2 }>
						<LocalColor color={ EUiKitColors.text }>Text</LocalColor>
					</Col>

					<Col cols={ 2 }>
						<LocalColor color={ EUiKitColors.textLight }>Text light</LocalColor>
					</Col>

					<Col cols={ 2 }>
						<LocalColor color={ EUiKitColors.textDark }>Text dark</LocalColor>
					</Col>
				</Row>

				<Row>
					<Col cols={ 2 }>
						<LocalColor
							color={ EUiKitColors.back }
							border
						>Back</LocalColor>
					</Col>

					<Col cols={ 2 }>
						<LocalColor color={ EUiKitColors.backLight }>Back light</LocalColor>
					</Col>

					<Col cols={ 2 }>
						<LocalColor color={ EUiKitColors.backDark }>Back dark</LocalColor>
					</Col>
				</Row>

				<Row>
					<Col cols={ 2 }>
						<LocalColor color={ EUiKitColors.black }>Black</LocalColor>
					</Col>

					<Col cols={ 2 }>
						<LocalColor color={ EUiKitColors.white }>White</LocalColor>
					</Col>
				</Row>
			</Section>
		</div>
	);
}

export default UiKitColors;
