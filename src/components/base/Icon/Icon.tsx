import classnames from 'classnames';
import Helper from './helper';
import { isFunction } from '../../../modules/checkers';

import type { FC } from 'react';
import type { TIconOnClick, IIconProps } from './types';

import './Icon.scss';

const Icon: FC<IIconProps> = ( props ) => {
	const {
		className,
		name,
		onClick: onClickProp,
	} = props;

	const rootClass = classnames('icon', className, { '_clickable': isFunction(onClickProp) });

	const Svg = Helper.getIconByName( name );

	const onClick: TIconOnClick = (event) => {
		!!onClickProp && isFunction(onClickProp) && onClickProp(event);
	};

	return (
		<>
			{
				!!Svg &&
				<Svg
					className={ rootClass }
					onClick={ onClick }
				/>
			}
		</>
	);
}

export default Icon;
