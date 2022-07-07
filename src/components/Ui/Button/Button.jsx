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
		square,
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
		{ '_square': square },
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

	const propsForLink = {
		className: classNameRoot,
		...omittedProps,
		href,
	};

	const propsForButton = {
		className: classNameRoot,
		...omittedProps,
		type,
	};

	const propsForRoot =
		isHref
			? propsForLink
			: propsForButton;

	const ComponentName = isHref
		? 'BaseLink'
		: 'button';

	return (
		<ComponentName { ...propsForRoot }>
			<div className="ui-button__body">
				{
					!!children && !square &&
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
			</div>

			{
				!!children && !!square &&
				<span
					className="ui-button__caption">
					{ children }
				</span>
			}
		</ComponentName>
	);
};

export default UiButton;
