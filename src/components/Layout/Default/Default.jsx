import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import Header from '../../Header/Header.jsx';

class LayoutDefault extends React.Component {
	render() {
		const { children } = this.props;

		return (
			<div className={ classnames('layout-default') }>
				<Header />
				{ children }
			</div>
		);
	}
}

LayoutDefault.propTypes = {
	children: PropTypes.node,
};

export default LayoutDefault;
