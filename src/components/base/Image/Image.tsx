import buildClass from '../../../plugins/classBuilder';

import type { TImageComponent } from './types';

const Image: TImageComponent = ( props ) => {
	const {
		className,
		src,
		alt,
		title,
	} = props;

	const classNameRoot = buildClass( 'image', className );

	if ( !!src ) {
		if ( typeof src === 'string' ) {
			return <img
				className={ classNameRoot }
				src={ src }
				alt={ alt }
				title={ title }
			/>;
		} else {
			const Svg = src;

			return <Svg className={ classNameRoot } />
		}
	}

	return null;
};

export default Image;
