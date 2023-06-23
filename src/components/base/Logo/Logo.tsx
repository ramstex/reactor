import buildClass from '../../../plugins/classBuilder';

import Image from '../Image/Image';
import Link from '../Link/Link';

import './style.scss';

import type { TComponent } from '../../../types/types';
import type { ILogoProps } from './types';

const Logo: TComponent<ILogoProps> = ( props ) => {
	const {
		className,
		href,
		src,
		title,
		alt,
		...attrs
	} = props;

	const classNameRoot = () => {
		return buildClass( 'logo', className );
	}

	const classNameImage = () => {
		return buildClass( 'logo__image' );
	}

	return (
		<Link className={ classNameRoot() }
			href={ href }
			{ ...attrs }>
			<Image className={ classNameImage() }
				src={ src }
				title={ title }
				alt={ alt } />
		</Link>
	);
}

export default Logo;
