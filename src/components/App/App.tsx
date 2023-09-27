import { useEffect } from 'react';
import buildClass from '../../plugins/classBuilder';
import { Routes, Route } from '../../plugins/router';
import useUser from '../../services/user/useUser';
import _ROUTES from '../../../config/routes';

import Header from '../Header/Header';
import Home from '../../../src/pages/Home/Home';

import UiKit from '../../../src/pages/UiKit/UiKit';
import UiKitGrid from '../../pages/UiKit/pages/Grid/Grid';
import UiKitMedia from '../../pages/UiKit/pages/Media/Media';
import UiKitTypography from '../../pages/UiKit/pages/Typography/Typography';
import UiKitColors from '../../pages/UiKit/pages/Colors/Colors';
import UiKitIcons from '../../pages/UiKit/pages/Icons/Icons';
import UiKitInputs from '../../pages/UiKit/pages/Inputs/Inputs';
import UiKitCheckbox from '../../pages/UiKit/pages/Checkbox/Checkbox';
import UiKitButtons from '../../pages/UiKit/pages/Buttons/Buttons';
import UiKitForms from '../../pages/UiKit/pages/Forms/Forms';

import './style.scss';

import type { TAppComponent } from './types';

const App: TAppComponent = ( props ) => {
	const { className } = props;

	const { update } = useUser();

	const classNameRoot = buildClass( 'app', className );

	useEffect( () => {
		const fetchData = async () => {
			await update();
		}

		fetchData()
			.catch( console.error );
	}, [] );

	return (
		<div className={ classNameRoot }>
			<Header />

			<Routes>
				<Route
					path={ '/' }
					element={ <Home /> }
				/>

				<Route
					path={ _ROUTES.uiKit.root }
					element={ <UiKit /> }
				>
					<Route
						path={ _ROUTES.uiKit.grid }
						element={ <UiKitGrid /> }
					/>

					<Route
						path={ _ROUTES.uiKit.media }
						element={ <UiKitMedia /> }
					/>

					<Route
						path={ _ROUTES.uiKit.typography }
						element={ <UiKitTypography /> }
					/>

					<Route
						path={ _ROUTES.uiKit.colors }
						element={ <UiKitColors /> }
					/>

					<Route
						path={ _ROUTES.uiKit.icons }
						element={ <UiKitIcons /> }
					/>

					<Route
						path={ _ROUTES.uiKit.buttons }
						element={ <UiKitButtons /> }
					/>

					<Route
						path={ _ROUTES.uiKit.inputs }
						element={ <UiKitInputs /> }
					/>

					<Route
						path={ _ROUTES.uiKit.checkbox }
						element={ <UiKitCheckbox /> }
					/>

					<Route
						path={ _ROUTES.uiKit.forms }
						element={ <UiKitForms /> }
					/>
				</Route>
			</Routes>
		</div>
	);
};

export default App;
