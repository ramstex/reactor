import React from 'react';
import classnames from 'classnames';

import './Col.scss';

const Col = ( props ) => {
	const {
		className,
		children,
		tag,
		col,
		offset,
		alignV,
		alignH,
	} = props;

	const classNameRoot = classnames( [
		'col',
		className,
		{ [ `_col_${ col }` ]: !!col },
		{ [ `_offset_${ offset }` ]: !!offset },
		{ [ `_align-v_${ alignV }` ]: alignV },
		{ [ `_align-h_${ alignH }` ]: alignH },
	] );

	const Tag = tag || 'div';

	return <Tag className={ classNameRoot }>{ children }</Tag>;
}

export default Col;
