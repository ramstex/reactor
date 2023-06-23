import Page from '../../../../components/markup/page/Page';
import Container from '../../../../components/markup/container/Container';
import Section from '../../../../components/markup/section/Section';
import Row from '../../../../components/grid/Row/Row';
import Col from '../../../../components/grid/Col/Col';
import Button from '../../../../components/ui/button/Button';

import type { FC } from 'react';
import type { TButtonOnClick } from '../../../../components/ui/button/types';

import './Button.scss';

const UiKitButton: FC = () => {
	const onClick1: TButtonOnClick = (event) => {
		console.log('onClick1: ', event);
	};

	return (
		<Page className={ 'page-ui-kit-button' }>
			<Section>
				<Container>
					<h2>Button</h2>
				</Container>
			</Section>

			<Section>
				<Container>
					<Row>
						<Col>
							<Button
								icon={ 'check' }
								onClick={ onClick1 }
							>button</Button>
						</Col>

						<Col offset={ 1 }>
							<Button
								icon={ 'check' }
								onClick={ onClick1 }
							/>
						</Col>

						<Col
							cols={ 3 }
							offset={ 1 }
						>
							<Button
								wide
								onClick={ onClick1 }
							>button</Button>
						</Col>

						<Col
							cols={ 3 }
							offset={ 1 }
						>
							<Button
								wide
								disabled
								onClick={ onClick1 }
							>button</Button>
						</Col>
					</Row>

					<Row>
						<Col>
							<Button
								icon={ 'check' }
								template={ 'ghost' }
								onClick={ onClick1 }
							>button</Button>
						</Col>

						<Col offset={ 1 }>
							<Button
								icon={ 'check' }
								template={ 'ghost' }
								onClick={ onClick1 }
							/>
						</Col>

						<Col
							cols={ 3 }
							offset={ 1 }
						>
							<Button
								template={ 'ghost' }
								wide
								onClick={ onClick1 }
							>button</Button>
						</Col>

						<Col
							cols={ 3 }
							offset={ 1 }
						>
							<Button
								template={ 'ghost' }
								wide
								disabled
								onClick={ onClick1 }
							>button</Button>
						</Col>
					</Row>
				</Container>
			</Section>

			<Section className={ '_secondary' }>
				<Container>
					<Row>
						<Col>
							<Button
								icon={ 'check' }
								theme={ 'inverse' }
								onClick={ onClick1 }
							>button</Button>
						</Col>

						<Col offset={ 1 }>
							<Button
								icon={ 'check' }
								theme={ 'inverse' }
								onClick={ onClick1 }
							/>
						</Col>

						<Col
							cols={ 3 }
							offset={ 1 }
						>
							<Button
								theme={ 'inverse' }
								wide
								onClick={ onClick1 }
							>button</Button>
						</Col>

						<Col
							cols={ 3 }
							offset={ 1 }
						>
							<Button
								theme={ 'inverse' }
								wide
								disabled
								onClick={ onClick1 }
							>button</Button>
						</Col>
					</Row>

					<Row>
						<Col>
							<Button
								icon={ 'check' }
								template={ 'ghost' }
								theme={ 'inverse' }
								onClick={ onClick1 }
							>button</Button>
						</Col>

						<Col offset={ 1 }>
							<Button
								icon={ 'check' }
								template={ 'ghost' }
								theme={ 'inverse' }
								onClick={ onClick1 }
							/>
						</Col>

						<Col
							cols={ 3 }
							offset={ 1 }
						>
							<Button
								template={ 'ghost' }
								theme={ 'inverse' }
								wide
								onClick={ onClick1 }
							>button</Button>
						</Col>

						<Col
							cols={ 3 }
							offset={ 1 }
						>
							<Button
								template={ 'ghost' }
								theme={ 'inverse' }
								wide
								disabled
								onClick={ onClick1 }
							>button</Button>
						</Col>
					</Row>
				</Container>
			</Section>

			<Section>
				<Container>
					<Row>
						<Col>
							<Button
								icon={ 'check' }
								theme={ 'primary' }
								onClick={ onClick1 }
							>button</Button>
						</Col>

						<Col offset={ 1 }>
							<Button
								icon={ 'check' }
								theme={ 'primary' }
								onClick={ onClick1 }
							/>
						</Col>

						<Col
							cols={ 3 }
							offset={ 1 }
						>
							<Button
								theme={ 'primary' }
								wide
								onClick={ onClick1 }
							>button</Button>
						</Col>

						<Col
							cols={ 3 }
							offset={ 1 }
						>
							<Button
								theme={ 'primary' }
								wide
								disabled
								onClick={ onClick1 }
							>button</Button>
						</Col>
					</Row>

					<Row>
						<Col>
							<Button
								icon={ 'check' }
								template={ 'ghost' }
								theme={ 'primary' }
								onClick={ onClick1 }
							>button</Button>
						</Col>

						<Col offset={ 1 }>
							<Button
								icon={ 'check' }
								template={ 'ghost' }
								theme={ 'primary' }
								onClick={ onClick1 }
							/>
						</Col>

						<Col
							cols={ 3 }
							offset={ 1 }
						>
							<Button
								template={ 'ghost' }
								theme={ 'primary' }
								wide
								onClick={ onClick1 }
							>button</Button>
						</Col>

						<Col
							cols={ 3 }
							offset={ 1 }
						>
							<Button
								template={ 'ghost' }
								theme={ 'primary' }
								wide
								disabled
								onClick={ onClick1 }
							>button</Button>
						</Col>
					</Row>
				</Container>
			</Section>

			<Section>
				<Container>
					<Row>
						<Col>
							<Button
								icon={ 'check' }
								theme={ 'secondary' }
								onClick={ onClick1 }
							>button</Button>
						</Col>

						<Col offset={ 1 }>
							<Button
								icon={ 'check' }
								theme={ 'secondary' }
								onClick={ onClick1 }
							/>
						</Col>

						<Col
							cols={ 3 }
							offset={ 1 }
						>
							<Button
								theme={ 'secondary' }
								wide
								onClick={ onClick1 }
							>button</Button>
						</Col>

						<Col
							cols={ 3 }
							offset={ 1 }
						>
							<Button
								theme={ 'secondary' }
								wide
								disabled
								onClick={ onClick1 }
							>button</Button>
						</Col>
					</Row>

					<Row>
						<Col>
							<Button
								icon={ 'check' }
								template={ 'ghost' }
								theme={ 'secondary' }
								onClick={ onClick1 }
							>button</Button>
						</Col>

						<Col offset={ 1 }>
							<Button
								icon={ 'check' }
								template={ 'ghost' }
								theme={ 'secondary' }
								onClick={ onClick1 }
							/>
						</Col>

						<Col
							cols={ 3 }
							offset={ 1 }
						>
							<Button
								template={ 'ghost' }
								theme={ 'secondary' }
								wide
								onClick={ onClick1 }
							>button</Button>
						</Col>

						<Col
							cols={ 3 }
							offset={ 1 }
						>
							<Button
								template={ 'ghost' }
								theme={ 'secondary' }
								wide
								disabled
								onClick={ onClick1 }
							>button</Button>
						</Col>
					</Row>
				</Container>
			</Section>
		</Page>
	);
}

export default UiKitButton;
