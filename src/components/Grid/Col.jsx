import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import './Col.scss';

class Col extends React.Component {
	//	Классы
	classNameRoot() {
		const { className, col, offset } = this.props;
		return classnames(
			'col',
			className,
			{ [`_col_${col}`]: col },
			{ [`_offset_${offset}`]: offset },
		);
	}

	render() {
		const { children, tag } = this.props;

		const Tag = tag || 'div';

		return (
			<Tag className={ this.classNameRoot() }>
				{ children }
			</Tag>
		);
	}
}

Col.propTypes = {
	children: PropTypes.node,

	className: PropTypes.string,

	tag: PropTypes.string,

	col: PropTypes.oneOf( [
		'auto',
		PropTypes.number,
	] ),

	offset: PropTypes.oneOf( [
		'auto',
		PropTypes.number,
	] ),
};

export default Col;
