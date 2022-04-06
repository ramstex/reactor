import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Layout from '../Layout/Layout.jsx';

class App extends React.Component {
	render() {
		const { children, className } = this.props;

		return (
			<div className={ classnames('app', className) }>
				<Layout className={ classnames('app__layout') }>
					{ children }
				</Layout>
			</div>
		);
	}
}

App.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
};

export default App;
