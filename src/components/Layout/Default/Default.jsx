import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import Header from '../../Header/Header.jsx';

class LayoutDefault extends React.Component {
	//	Классы
	classNameRoot() {
		return classnames('layout-default');
	}

	render() {
		const { children } = this.props;

		return (
			<div className={ this.classNameRoot() }>
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
