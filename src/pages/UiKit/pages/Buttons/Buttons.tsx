import Section from '../../../../components/Markup/Section/Section';
import Row from '../../../../components/Grid/Row/Row';
import Col from '../../../../components/Grid/Col/Col';
import Button from '../../../../components/Ui/Button/Button';

import { EButtonTemplate, EButtonTheme } from '../../../../components/Ui/Button/helpers';
import { EIconName } from '../../../../components/Base/Icon/helper';

import './style.scss';

const PageUiKitButtons = () => {
	return (
		<div className={ 'ui-kit-buttons' }>
			<Section>
				<h5>Theme: default</h5>

				<Row>
					<Col>
						<Button icon={ EIconName.logout }> Default </Button>
					</Col>

					<Col>
						<Button
							template={ EButtonTemplate.ghost }
							icon={ EIconName.arrowRight }
							iconPosition={ 'end' }
						> Ghost </Button>
					</Col>

					<Col>
						<Button
							template={ EButtonTemplate.link }
							icon={ EIconName.search }
						> Link </Button>
					</Col>

					<Col>
						<Button
							icon={ EIconName.profileUser }
							square
						/>
					</Col>

					<Col>
						<Button
							template={ EButtonTemplate.ghost }
							icon={ EIconName.profileUser }
							square
						/>
					</Col>

					<Col>
						<Button
							template={ EButtonTemplate.link }
							icon={ EIconName.profileUser }
							square
						/>
					</Col>
				</Row>

				<h6 className={ '_mt_5' }>Disabled</h6>

				<Row>
					<Col>
						<Button
							icon={ EIconName.logout }
							disabled
						> Default </Button>
					</Col>

					<Col>
						<Button
							template={ EButtonTemplate.ghost }
							icon={ EIconName.arrowRight }
							iconPosition={ 'end' }
							disabled
						> Ghost </Button>
					</Col>

					<Col>
						<Button
							template={ EButtonTemplate.link }
							icon={ EIconName.search }
							disabled
						> Link </Button>
					</Col>

					<Col>
						<Button
							icon={ EIconName.profileUser }
							disabled
							square
						/>
					</Col>

					<Col>
						<Button
							template={ EButtonTemplate.ghost }
							icon={ EIconName.profileUser }
							disabled
							square
						/>
					</Col>

					<Col>
						<Button
							template={ EButtonTemplate.link }
							icon={ EIconName.profileUser }
							disabled
							square
						/>
					</Col>
				</Row>
			</Section>

			<Section className={ '_mt_5 _inverse' }>
				<h5>Theme: default inverse</h5>

				<Row>
					<Col>
						<Button
							icon={ EIconName.logout }
							inverse
						> Default </Button>
					</Col>

					<Col>
						<Button
							template={ EButtonTemplate.ghost }
							icon={ EIconName.arrowRight }
							iconPosition={ 'end' }
							inverse
						> Ghost </Button>
					</Col>

					<Col>
						<Button
							template={ EButtonTemplate.link }
							icon={ EIconName.search }
							inverse
						> Link </Button>
					</Col>

					<Col>
						<Button
							icon={ EIconName.profileUser }
							inverse
							square
						/>
					</Col>

					<Col>
						<Button
							template={ EButtonTemplate.ghost }
							icon={ EIconName.profileUser }
							inverse
							square
						/>
					</Col>

					<Col>
						<Button
							template={ EButtonTemplate.link }
							icon={ EIconName.profileUser }
							inverse
							square
						/>
					</Col>
				</Row>

				<h6 className={ '_mt_5' }>Disabled</h6>

				<Row>
					<Col>
						<Button
							icon={ EIconName.logout }
							disabled
							inverse
						> Default </Button>
					</Col>

					<Col>
						<Button
							template={ EButtonTemplate.ghost }
							icon={ EIconName.arrowRight }
							iconPosition={ 'end' }
							disabled
							inverse
						> Ghost </Button>
					</Col>

					<Col>
						<Button
							template={ EButtonTemplate.link }
							icon={ EIconName.search }
							disabled
							inverse
						> Link </Button>
					</Col>

					<Col>
						<Button
							icon={ EIconName.profileUser }
							disabled
							square
							inverse
						/>
					</Col>

					<Col>
						<Button
							template={ EButtonTemplate.ghost }
							icon={ EIconName.profileUser }
							disabled
							square
							inverse
						/>
					</Col>

					<Col>
						<Button
							template={ EButtonTemplate.link }
							icon={ EIconName.profileUser }
							disabled
							square
							inverse
						/>
					</Col>
				</Row>
			</Section>

			<Section className={ '_mt_5' }>
				<h5>Theme: primary</h5>

				<Row>
					<Col>
						<Button
							theme={ EButtonTheme.primary }
							icon={ EIconName.logout }
						> Default </Button>
					</Col>

					<Col>
						<Button
							theme={ EButtonTheme.primary }
							template={ EButtonTemplate.ghost }
							icon={ EIconName.arrowRight }
							iconPosition={ 'end' }
						> Ghost </Button>
					</Col>

					<Col>
						<Button
							theme={ EButtonTheme.primary }
							template={ EButtonTemplate.link }
							icon={ EIconName.search }
						> Link </Button>
					</Col>

					<Col>
						<Button
							theme={ EButtonTheme.primary }
							icon={ EIconName.profileUser }
							square
						/>
					</Col>

					<Col>
						<Button
							theme={ EButtonTheme.primary }
							template={ EButtonTemplate.ghost }
							icon={ EIconName.profileUser }
							square
						/>
					</Col>

					<Col>
						<Button
							theme={ EButtonTheme.primary }
							template={ EButtonTemplate.link }
							icon={ EIconName.profileUser }
							square
						/>
					</Col>
				</Row>

				<h6 className={ '_mt_5' }>Disabled</h6>

				<Row>
					<Col>
						<Button
							theme={ EButtonTheme.primary }
							icon={ EIconName.logout }
							disabled
						> Default </Button>
					</Col>

					<Col>
						<Button
							theme={ EButtonTheme.primary }
							template={ EButtonTemplate.ghost }
							icon={ EIconName.arrowRight }
							iconPosition={ 'end' }
							disabled
						> Ghost </Button>
					</Col>

					<Col>
						<Button
							theme={ EButtonTheme.primary }
							template={ EButtonTemplate.link }
							icon={ EIconName.search }
							disabled
						> Link </Button>
					</Col>

					<Col>
						<Button
							theme={ EButtonTheme.primary }
							icon={ EIconName.profileUser }
							square
							disabled
						/>
					</Col>

					<Col>
						<Button
							theme={ EButtonTheme.primary }
							template={ EButtonTemplate.ghost }
							icon={ EIconName.profileUser }
							square
							disabled
						/>
					</Col>

					<Col>
						<Button
							theme={ EButtonTheme.primary }
							template={ EButtonTemplate.link }
							icon={ EIconName.profileUser }
							square
							disabled
						/>
					</Col>
				</Row>
			</Section>

			<Section className={ '_mt_5 _inverse' }>
				<h5>Theme: primary inverse</h5>

				<Row>
					<Col>
						<Button
							theme={ EButtonTheme.primary }
							icon={ EIconName.logout }
							inverse
						> Default </Button>
					</Col>

					<Col>
						<Button
							theme={ EButtonTheme.primary }
							template={ EButtonTemplate.ghost }
							icon={ EIconName.arrowRight }
							iconPosition={ 'end' }
							inverse
						> Ghost </Button>
					</Col>

					<Col>
						<Button
							theme={ EButtonTheme.primary }
							template={ EButtonTemplate.link }
							icon={ EIconName.search }
							inverse
						> Link </Button>
					</Col>

					<Col>
						<Button
							theme={ EButtonTheme.primary }
							icon={ EIconName.profileUser }
							square
							inverse
						/>
					</Col>

					<Col>
						<Button
							theme={ EButtonTheme.primary }
							template={ EButtonTemplate.ghost }
							icon={ EIconName.profileUser }
							square
							inverse
						/>
					</Col>

					<Col>
						<Button
							theme={ EButtonTheme.primary }
							template={ EButtonTemplate.link }
							icon={ EIconName.profileUser }
							square
							inverse
						/>
					</Col>
				</Row>

				<h6 className={ '_mt_5' }>Disabled</h6>

				<Row>
					<Col>
						<Button
							theme={ EButtonTheme.primary }
							icon={ EIconName.logout }
							disabled
							inverse
						> Default </Button>
					</Col>

					<Col>
						<Button
							theme={ EButtonTheme.primary }
							template={ EButtonTemplate.ghost }
							icon={ EIconName.arrowRight }
							iconPosition={ 'end' }
							disabled
							inverse
						> Ghost </Button>
					</Col>

					<Col>
						<Button
							theme={ EButtonTheme.primary }
							template={ EButtonTemplate.link }
							icon={ EIconName.search }
							disabled
							inverse
						> Link </Button>
					</Col>

					<Col>
						<Button
							theme={ EButtonTheme.primary }
							icon={ EIconName.profileUser }
							square
							inverse
							disabled
						/>
					</Col>

					<Col>
						<Button
							theme={ EButtonTheme.primary }
							template={ EButtonTemplate.ghost }
							icon={ EIconName.profileUser }
							square
							inverse
							disabled
						/>
					</Col>

					<Col>
						<Button
							theme={ EButtonTheme.primary }
							template={ EButtonTemplate.link }
							icon={ EIconName.profileUser }
							square
							inverse
							disabled
						/>
					</Col>
				</Row>
			</Section>

			<Section className={ '_mt_5' }>
				<h5>Theme: secondary</h5>

				<Row>
					<Col>
						<Button
							theme={ EButtonTheme.secondary }
							icon={ EIconName.logout }
						> Default </Button>
					</Col>

					<Col>
						<Button
							theme={ EButtonTheme.secondary }
							template={ EButtonTemplate.ghost }
							icon={ EIconName.arrowRight }
							iconPosition={ 'end' }
						> Ghost </Button>
					</Col>

					<Col>
						<Button
							theme={ EButtonTheme.secondary }
							template={ EButtonTemplate.link }
							icon={ EIconName.search }
						> Link </Button>
					</Col>

					<Col>
						<Button
							theme={ EButtonTheme.secondary }
							icon={ EIconName.profileUser }
							square
						/>
					</Col>

					<Col>
						<Button
							theme={ EButtonTheme.secondary }
							template={ EButtonTemplate.ghost }
							icon={ EIconName.profileUser }
							square
						/>
					</Col>

					<Col>
						<Button
							theme={ EButtonTheme.secondary }
							template={ EButtonTemplate.link }
							icon={ EIconName.profileUser }
							square
						/>
					</Col>
				</Row>

				<h6 className={ '_mt_5' }>Disabled</h6>

				<Row>
					<Col>
						<Button
							theme={ EButtonTheme.secondary }
							icon={ EIconName.logout }
							disabled
						> Default </Button>
					</Col>

					<Col>
						<Button
							theme={ EButtonTheme.secondary }
							template={ EButtonTemplate.ghost }
							icon={ EIconName.arrowRight }
							iconPosition={ 'end' }
							disabled
						> Ghost </Button>
					</Col>

					<Col>
						<Button
							theme={ EButtonTheme.secondary }
							template={ EButtonTemplate.link }
							icon={ EIconName.search }
							disabled
						> Link </Button>
					</Col>

					<Col>
						<Button
							theme={ EButtonTheme.secondary }
							icon={ EIconName.profileUser }
							square
							disabled
						/>
					</Col>

					<Col>
						<Button
							theme={ EButtonTheme.secondary }
							template={ EButtonTemplate.ghost }
							icon={ EIconName.profileUser }
							square
							disabled
						/>
					</Col>

					<Col>
						<Button
							theme={ EButtonTheme.secondary }
							template={ EButtonTemplate.link }
							icon={ EIconName.profileUser }
							square
							disabled
						/>
					</Col>
				</Row>
			</Section>

			<Section className={ '_mt_5 _inverse' }>
				<h5>Theme: secondary</h5>

				<Row>
					<Col>
						<Button
							theme={ EButtonTheme.secondary }
							icon={ EIconName.logout }
							inverse
						> Default </Button>
					</Col>

					<Col>
						<Button
							theme={ EButtonTheme.secondary }
							template={ EButtonTemplate.ghost }
							icon={ EIconName.arrowRight }
							iconPosition={ 'end' }
							inverse
						> Ghost </Button>
					</Col>

					<Col>
						<Button
							theme={ EButtonTheme.secondary }
							template={ EButtonTemplate.link }
							icon={ EIconName.search }
							inverse
						> Link </Button>
					</Col>

					<Col>
						<Button
							theme={ EButtonTheme.secondary }
							icon={ EIconName.profileUser }
							square
							inverse
						/>
					</Col>

					<Col>
						<Button
							theme={ EButtonTheme.secondary }
							template={ EButtonTemplate.ghost }
							icon={ EIconName.profileUser }
							square
							inverse
						/>
					</Col>

					<Col>
						<Button
							theme={ EButtonTheme.secondary }
							template={ EButtonTemplate.link }
							icon={ EIconName.profileUser }
							square
							inverse
						/>
					</Col>
				</Row>

				<h6 className={ '_mt_5' }>Disabled</h6>

				<Row>
					<Col>
						<Button
							theme={ EButtonTheme.secondary }
							icon={ EIconName.logout }
							disabled
							inverse
						> Default </Button>
					</Col>

					<Col>
						<Button
							theme={ EButtonTheme.secondary }
							template={ EButtonTemplate.ghost }
							icon={ EIconName.arrowRight }
							iconPosition={ 'end' }
							disabled
							inverse
						> Ghost </Button>
					</Col>

					<Col>
						<Button
							theme={ EButtonTheme.secondary }
							template={ EButtonTemplate.link }
							icon={ EIconName.search }
							disabled
							inverse
						> Link </Button>
					</Col>

					<Col>
						<Button
							theme={ EButtonTheme.secondary }
							icon={ EIconName.profileUser }
							square
							inverse
							disabled
						/>
					</Col>

					<Col>
						<Button
							theme={ EButtonTheme.secondary }
							template={ EButtonTemplate.ghost }
							icon={ EIconName.profileUser }
							square
							inverse
							disabled
						/>
					</Col>

					<Col>
						<Button
							theme={ EButtonTheme.secondary }
							template={ EButtonTemplate.link }
							icon={ EIconName.profileUser }
							square
							inverse
							disabled
						/>
					</Col>
				</Row>
			</Section>
		</div>
	);
};

export default PageUiKitButtons;
