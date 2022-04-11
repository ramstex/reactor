import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from 'react-router-dom';

import Layout from '../Layout/Layout.jsx';
import PageHome from '../../pages/Home/Home.jsx';
import PageUiKit from '../../pages/UiKit/UiKit.jsx';
import PageUiKitTypography from '../../pages/UiKit/pages/Typography.jsx';

class App extends React.Component {
	//	Классы
	classNameRoot() {
		const { className } = this.props;
		return classnames( 'app', className );
	}

	classNameLayout() {
		return classnames( 'app__layout' );
	}

	render() {
		return (
			<div className={ this.classNameRoot() }>
				<Router>
					<Layout className={ this.classNameLayout() }>
						<Routes>
							<Route path={ '/' } element={ <PageHome /> } />
							<Route path={ '/ui-kit' } element={ <PageUiKit /> } />
							<Route path={ '/ui-kit/typography' } element={ <PageUiKitTypography /> } />
						</Routes>
					</Layout>
				</Router>
			</div>
		);
	}
}

App.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
};

export default App;
