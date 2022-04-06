import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import LayoutDefault from './Default/Default.jsx';

class Layout extends React.Component {
	render() {
		const { children } = this.props;

		return (
			<LayoutDefault className={ classnames('layout') }>
				{ children }
			</LayoutDefault>
		);
	}
}

Layout.propTypes = {
	children: PropTypes.node,
};

export default Layout;
