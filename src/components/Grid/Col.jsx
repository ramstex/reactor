import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import './Col.scss';

class Col extends React.Component {
	//	Классы
	classNameRoot() {
		const {
			className,
			col,
			offset,
			alignV,
			alignH,
		} = this.props;

		return classnames( [
			'col',
			className,
			{ [ `_col_${ col }` ]: !!col },
			{ [ `_offset_${ offset }` ]: !!offset },
			{ [ `_align-v_${ alignV }` ]: alignV },
			{ [ `_align-h_${ alignH }` ]: alignH },
		] );
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

Col.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	tag: PropTypes.string,
	col: PropTypes.oneOfType( [
		PropTypes.oneOf( [ 'auto' ] ),
		PropTypes.number,
	] ),

	offset: PropTypes.oneOfType( [
		PropTypes.oneOf( [ 'auto' ] ),
		PropTypes.number,
	] ),

	alignV: PropTypes.oneOf( [
		'start',
		'end',
		'center',
		'stretch',
	] ),

	alignH: PropTypes.oneOf( [
		'start',
		'end',
		'center',
		'stretch',
	] ),
};

export default Col;
