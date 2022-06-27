import React from 'react';
import classnames from 'classnames';

import BaseImage from '../Image/Image.jsx';
import BaseLink from '../Link/Link.jsx';

import './Logo.scss';

const BaseLogo = ( props ) => {
	const {
		className,
		href,
		src,
		title,
		alt,
		...attrs
	} = props;

	const classNameRoot = () => {
		return classnames( 'base-logo', className );
	}

	const classNameImage = () => {
		return classnames( 'base-logo__image' );
	}

	return (
		<BaseLink className={ classNameRoot() } href={ href } { ...attrs }>
			<BaseImage className={ classNameImage() } src={ src } title={ title } alt={ alt } />
		</BaseLink>
	);
}

export default BaseLogo;
