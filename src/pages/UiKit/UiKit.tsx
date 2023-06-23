import { Link, Outlet } from 'react-router-dom';
import useNav from '../../hooks/useNav';
import Container from '../../components/markup/container/Container';
import Row from '../../components/grid/Row/Row';
import Col from '../../components/grid/Col/Col';
import Page from '../../components/markup/page/Page';

import type { FC } from 'react';

import './UiKit.scss';

const UiKit: FC = () => {
	const { routes } = useNav();

	return (
		<Page className={ 'page-ui-kit' }>
			<header className={ 'page-ui-kit__header' }>
				<Container>
					<h1 className={ 'page-ui-kit__title' }>UI KIT</h1>

					<nav className={ 'page-ui-kit__nav' }>
						<Row>
							<Col>
								<Link to={ routes.uiKitIcon }>Icon</Link>
							</Col>

							<Col>
								<Link to={ routes.uiKitInput }>Input</Link>
							</Col>

							<Col>
								<Link to={ routes.uiKitButton }>Button</Link>
							</Col>
						</Row>
					</nav>
				</Container>
			</header>

			<main className={ 'page-ui-kit__main' }>
				<Outlet />
			</main>
		</Page>
	);
};

export default UiKit;
