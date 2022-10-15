import React from 'react';
import classnames from 'classnames';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import _ROUTES from '../../../config/routes.js';
import _UI_KIT_CONFIG from '/src/pages/UiKit/config.jsx';

import Layout from '/src/components/Layout/Layout.jsx';
import PageHome from '/src/pages/Home/Home.jsx';
import PageRegistration from '../../pages/Registration/Registration.jsx';
import PageLogin from '../../pages/Login/Login.jsx';

const App = ( props ) => {
	const { className } = props;

	const classNameRoot = classnames( 'app', className );

	return (
		<div className={ classNameRoot }>
			<BrowserRouter>
				<Layout className={ 'app__layout' }>
					<Routes>
						<Route path={ '/' }
							   element={ <PageHome /> } />

						<Route path={ _ROUTES.registration }
							   element={ <PageRegistration /> } />

						<Route path={ _ROUTES.login }
							   element={ <PageLogin /> } />

						{
							_UI_KIT_CONFIG.enabled && _UI_KIT_CONFIG.pages.map( ( page ) => {
								return (
									<Route
										key={ page.name }
										path={ page.href }
										element={ page.component }
									/>
								);
							} )
						}
					</Routes>
				</Layout>
			</BrowserRouter>
		</div>
	);
};

export default App;
