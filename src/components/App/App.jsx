import React from 'react';
import classnames from 'classnames';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import _UI_KIT_CONFIG from '/src/pages/UiKit/config.jsx';

import Layout from '/src/components/Layout/Layout.jsx';
import PageHome from '/src/pages/Home/Home.jsx';

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
