import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import omit from 'lodash/omit.js';

import BaseIcon from '../../Base/Icon/Icon.jsx';
import BaseLink from '../../Base/Link/Link.jsx';

import './Button.scss';

const UiButton = ( props ) => {
	const {
		children,
		type = 'button',
		template = 'default',
		theme = 'primary',
		size = 'md',
		wide,
		disabled,
		hover,
		href,
		icon,
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
		'children',
		'className',
		'template',
		'theme',
		'size',
		'wide',
		'hover',
		'icon',
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
					? <BaseLink
						className={ classNameRoot }
						{ ...omittedProps }
						href={ href }
					>
						{
							!!children &&
							<span
								className="ui-button__caption">
								{ children }
							</span>
						}

						{
							!!icon &&
							<BaseIcon
								className={ 'ui-button__icon' }
								icon={ icon }
							/>
						}
					</BaseLink>
					: <button
						className={ classNameRoot }
						{ ...omittedProps }
						type={ type }
					>
						{
							!!children &&
							<span
								className="ui-button__caption">
								{ children }
							</span>
						}

						{
							!!icon &&
							<BaseIcon
								className={ 'ui-button__icon' }
								icon={ icon }
							/>
						}
					</button>
			}
		</React.Fragment>
	);
};

export default UiButton;
