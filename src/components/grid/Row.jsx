import React from 'react';
import classnames from 'classnames';

import './Row.scss';

const Row = ( props ) => {
	const {
		className,
		children,
		tag,
		alignH,
		alignV,
		reverse,
	} = props;

	const classNameRoot = classnames(
		'row',
		className,
		{ [ `_align-h_${ alignH }` ]: alignH },
		{ [ `_align-v_${ alignV }` ]: alignV },
		{ _reverse: reverse }
	);

	const Tag = tag || 'div';

	return <Tag className={ classNameRoot }>{ children }</Tag>;
}

export default Row;
