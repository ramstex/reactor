import React from 'react';
import classnames from 'classnames';

const BaseImage = ( props ) => {
	const {
		className,
		src,
		alt,
		title,
	} = props;

	const classNameRoot = () => {
		return classnames( 'base-logo', className );
	};

	if ( typeof src === 'string' ) {
		return <img
			className={ classNameRoot() }
			src={ src }
			alt={ alt }
			title={ title }
		/>;
	}

	const Image = src;

	return <Image className={ classNameRoot() } />;
};

export default BaseImage;
