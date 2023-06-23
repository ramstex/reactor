import classBuilder from '../../../plugins/classBuilder';
import { getIconByName } from './helper';
import { isFunction } from '../../../helpers/checkers';

import type { TIconComponent } from './types';

import './style.scss';

const Icon: TIconComponent = ( props ) => {
	const {
		className,
		name,
		onClick,
	} = props;

	const classNameRoot = classBuilder( 'icon', className, { '_clickable': isFunction( onClick ) } );

	const Svg = getIconByName( name );

	return (
		<>
			{
				!!Svg &&
				<Svg
					className={ classNameRoot }
					onClick={ onClick }
				/>
			}
		</>
	);
}

export default Icon;
