import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Layout from '../Layout/Layout.jsx';

class App extends React.Component {
	//	Классы
	classNameRoot() {
		const { className } = this.props;
		return classnames('app', className);
	}

	classNameLayout() {
		return classnames('app__layout');
	}

	render() {
		const { children } = this.props;

		return (
			<div className={ this.classNameRoot() }>
				<Layout className={ this.classNameLayout() }>
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
