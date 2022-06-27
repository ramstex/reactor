import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import { isAbsoluteUrl } from '../../../plugins/helpers';

const BaseLink = ( props = {
	...props,
	tag: 'span'
} ) => {
	const {
		className,
		children,
		tag: TagName,
		href,
		...attrs
	} = props;

	const classNameRoot = classnames(
		'base-link',
		{ '_href': !!href },
		{ '_no-href': !href },
		className
	);

	const isExternal = !!href && isAbsoluteUrl( href );
	const isInternal = !!href && !isAbsoluteUrl( href );

	if ( isInternal ) {
		return (
			<Link
				className={ classNameRoot }
				to={ href }
				{ ...attrs }
			>
				{ children }
			</Link>
		);
	}

	if ( isExternal ) {
		return (
			<a
				className={ classNameRoot }
				href={ href }
				{ ...attrs }
			>
				{ children }
			</a>
		);
	}

	return <TagName { ...attrs }>{ children }</TagName>;
};

export default BaseLink;
