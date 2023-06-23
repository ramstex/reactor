import Page from '../../../../components/markup/page/Page';
import Container from '../../../../components/markup/container/Container';
import Row from '../../../../components/grid/Row/Row';
import Col from '../../../../components/grid/Col/Col';
import Icon from '../../../../components/base/Icon/Icon';

import type { FC } from 'react';
import { TIconOnClick } from '../../../../components/base/Icon/types';

import './Icon.scss';

const UiKitIcon: FC = () => {
	const onClick: TIconOnClick = (event) => {
		console.log('Icon click', event);
	};

	return (
		<Page className={ 'page-ui-kit-icon' }>
			<Container>
				<h2>Icon</h2>

				<Row>
					<Col>
						<Icon
							name={ 'arrow-up' }
							onClick={ onClick }
						/>
					</Col>

					<Col>
						<Icon
							name={ 'arrow-down' }
							onClick={ onClick }
						/>
					</Col>

					<Col>
						<Icon
							name={ 'arrow-left' }
							onClick={ onClick }
						/>
					</Col>

					<Col>
						<Icon
							name={ 'arrow-right' }
							onClick={ onClick }
						/>
					</Col>
				</Row>

				<Row>
					<Col>
						<Icon name={ 'eye-closed' } />
					</Col>

					<Col>
						<Icon name={ 'eye-opened' } />
					</Col>
				</Row>

				<Row>
					<Col>
						<Icon name={ 'profile-login' } />
					</Col>

					<Col>
						<Icon name={ 'profile-logout' } />
					</Col>
				</Row>

				<Row>
					<Col>
						<Icon name={ 'vkontakte' } />
					</Col>

					<Col>
						<Icon name={ 'telegram' } />
					</Col>

					<Col>
						<Icon name={ 'odnoklassniki' } />
					</Col>
				</Row>

				<Row>
					<Col>
						<Icon name={ 'check' } />
					</Col>

					<Col>
						<Icon name={ 'close' } />
					</Col>

					<Col>
						<Icon name={ 'plus' } />
					</Col>

					<Col>
						<Icon name={ 'minus' } />
					</Col>

					<Col>
						<Icon name={ 'search' } />
					</Col>

					<Col>
						<Icon name={ 'refresh' } />
					</Col>

					<Col>
						<Icon name={ 'play' } />
					</Col>
				</Row>
			</Container>
		</Page>
	);
};

export default UiKitIcon;
