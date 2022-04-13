import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import './Container.scss';

class MarkupContainer extends React.Component {
	//	Классы
	classNameRoot() {
		const { wide, tight } = this.props;
		return classnames( 'markup-container', { _wide: wide }, { _tight: tight } );
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
	tight: PropTypes.bool,
	wide: PropTypes.bool,
};

export default MarkupContainer;
