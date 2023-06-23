import buildClass from '../../../plugins/classBuilder';
import { ERowAlignH, ERowAlignV } from './helpers';

import './style.scss';

import type { TRowComponent } from './types';

const Row: TRowComponent = ( props ) => {
	const {
		className,
		children,
		reverse,
		alignH = ERowAlignH.start,
		alignV = ERowAlignV.start,
		tag = 'div',
	} = props;

	const rootClass = buildClass( 'row', className, {
		'_reverse': reverse,
		[ `_align-h_${ alignH }` ]: !!alignH && alignH !== ERowAlignH.start,
		[ `_align-v_${ alignV }` ]: !!alignV && alignV !== ERowAlignV.start,
	} );

	const TagName = tag;

	return (
		<TagName className={ rootClass }>
			{ children }
		</TagName>
	);
};

export default Row;
