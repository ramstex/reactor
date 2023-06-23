import { Link, Routes, Route } from 'react-router-dom';
import useNav from '../hooks/useNav';
import Row from '../components/grid/Row/Row';
import Col from '../components/grid/Col/Col';

import UiKit from '../pages/UiKit/UiKit';
import UiKitIcon from '../pages/UiKit/pages/icon/Icon';
import UiKitInput from '../pages/UiKit/pages/input/Input';
import UiKitButton from '../pages/UiKit/pages/button/Button';

import './App.scss';

const App = () => {
	const { routes } = useNav();

	return (
		<div className={ 'app' }>
			<nav>
				<Row>
					<Col>
						<Link to={ routes.home }>Home</Link>
					</Col>
					<Col>
						<Link to={ routes.uiKit }>Ui-kit</Link>
					</Col>
				</Row>
			</nav>

			<Routes>
				<Route path={ routes.home } >
					<Route
						element={ <h1>INDEX</h1> }
						index
					/>

					<Route
						element={ <UiKit /> }
						path={ routes.uiKit }
					>
						<Route
							path={ routes.uiKitIcon }
							element={ <UiKitIcon /> }
						/>

						<Route
							path={ routes.uiKitInput }
							element={ <UiKitInput /> }
						/>

						<Route
							path={ routes.uiKitButton }
							element={ <UiKitButton /> }
						/>
					</Route>
				</Route>
			</Routes>
		</div>
	);
}

export default App;
