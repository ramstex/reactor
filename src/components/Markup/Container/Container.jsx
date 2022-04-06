import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import './Container.scss';

class MarkupContainer extends React.Component {
	render() {
		const { children } = this.props;

		return (
			<div className={ classnames('markup-container') }>
				{ children }
			</div>
		);
	}
}

MarkupContainer.propTypes = {
	children: PropTypes.node,
};

export default MarkupContainer;
