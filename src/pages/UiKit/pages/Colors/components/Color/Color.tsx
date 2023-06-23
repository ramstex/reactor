import classnames from 'classnames';
import { isString, isBoolean } from '../../../../../../helpers/checkers';

import './style.scss';

import type { FC } from 'react';
import type { IUiKitColorProps } from './types';

const UiKitColor: FC<IUiKitColorProps> = ( props ) => {
	const {
		className,
		children,
		color,
		border,
		description,
	} = props;

	const classNameRoot = classnames( 'ui-kit-color', {
		[`_color_${ color }`]: color,
		[`_border_${ border }`]: isString( border ),
		_border: isBoolean( border, true ),
	}, className );

	return (
		<div className={ classNameRoot }>
			<div className={ 'ui-kit-color__sample' } />

			<p className="ui-kit-color__title _sm _b">{ children }</p>

			{ !!description && <p className="ui-kit-color__description _sm">{ description }</p> }
		</div>
	);
}

export default UiKitColor;
