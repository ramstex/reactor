import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import omit from 'lodash/omit.js';

import BaseLink from '../../Base/Link/Link.jsx';

import './Button.scss';

const UiButton = ( props ) => {
	const {
		type = 'button',
		template = 'default',
		theme = 'primary',
		size = 'md',
		wide,
		disabled,
		hover,
		href,
	} = props;

	const [ isHref, setIsHref ] = useState( !!href );
	useEffect( () => {
		setIsHref( !!href );
	}, [ href ] );

	const classNameRoot = classnames(
		'ui-button',
		`_template_${ template }`,
		`_theme_${ theme }`,
		`_size_${ size }`,
		{ '_wide': wide },
		{ '_disabled': disabled },
		{ '_hover': hover }
	);

	const generalOmittedProps = [
		'className',
		'template',
		'theme',
		'size',
		'wide',
		'hover',
	];
	const omittedProps =
		isHref
			? omit( props, [
				...generalOmittedProps,
				'type',
			] )
			: omit( props, [
				...generalOmittedProps,
				'href',
				'target',
			] );

	return (
		<React.Fragment>
			{
				isHref
					? <BaseLink className={ classNameRoot }
						{ ...omittedProps }
						href={ href } />
					: <button className={ classNameRoot }
						{ ...omittedProps }
						type={ type } />
			}
		</React.Fragment>
	);
}

export default UiButton;
