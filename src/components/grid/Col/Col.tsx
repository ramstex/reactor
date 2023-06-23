import buildClass from '../../../plugins/classBuilder';

import './style.scss';

import type { TColComponent } from './types';

const Col: TColComponent = ( props ) => {
	const {
		className,
		children,
		cols,
		offset,
		tag = 'div',
	} = props;

	const rootClass: string = buildClass( 'col', {
		[ `_cols_${ cols }` ]: !!cols,
		[ `_offset_${ offset }` ]: !!offset,
	}, className );

	const TagName = tag;

	return (
		<TagName className={ rootClass }>
			{ children }
		</TagName>
	);
}

export default Col;
