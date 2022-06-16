import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import './Row.scss';

class Row extends React.Component {
	//	Классы
	classNameRoot() {
		const {
			className,
			col,
			alignH,
			alignV,
			reverse,
		} = this.props;

		return classnames(
			'row',
			className,
			{ [ `_align-h_${ alignH }` ]: alignH },
			{ [ `_align-v_${ alignV }` ]: alignV },
			{ [ `_col_${ col }` ]: col },
			{ _reverse: reverse }
		);
	}

	render() {
		const {
			children,
			tag,
		} = this.props;

		const Tag = tag || 'div';

		return <Tag className={ this.classNameRoot() }>{ children }</Tag>;
	}
}

Row.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	tag: PropTypes.string,
	col: PropTypes.oneOf( [ 'auto', PropTypes.number ] ),
	alignH: PropTypes.oneOf( [ 'start', 'end', 'center', 'stretch' ] ),
	alignV: PropTypes.oneOf( [ 'start', 'end', 'center', 'stretch' ] ),
	reverse: PropTypes.bool,
};

export default Row;
