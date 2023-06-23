import buildClass from '../../../plugins/classBuilder';
import { Link as RouterLink } from '../../../plugins/router';
import { isAbsoluteUrl } from '../../../plugins/helpers';

import type { TLinkComponent } from './types';

const Link: TLinkComponent = ( props ) => {
	const {
		className,
		children,
		tag = 'span',
		href,
		target,
	} = props;

	const classNameRoot = buildClass(
		'link',
		{ '_href': !!href },
		{ '_no-href': !href },
		className
	);

	const isExternal = !!href && isAbsoluteUrl( href );
	const isInternal = !!href && !isAbsoluteUrl( href );

	if ( isInternal ) {
		return (
			<RouterLink
				className={ classNameRoot }
				to={ href }
			>
				{ children }
			</RouterLink>
		);
	} else if ( isExternal ) {
		return (
			<a
				className={ classNameRoot }
				href={ href }
				target={ target }
			>
				{ children }
			</a>
		);
	}

	const TagName = tag;

	return <TagName className={ classNameRoot }>{ children }</TagName>;
};

export default Link;
