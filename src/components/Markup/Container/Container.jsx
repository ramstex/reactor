import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import './Container.scss';

class MarkupContainer extends React.Component {
	//	Классы
	classNameRoot() {
		return classnames('markup-container');
	}

	render() {
		const { children } = this.props;

		return (
			<div className={ this.classNameRoot() }>
				{ children }
			</div>
		);
	}
}

MarkupContainer.propTypes = {
	children: PropTypes.node,
};

export default MarkupContainer;
