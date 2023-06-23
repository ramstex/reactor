import { forwardRef } from 'react';
import classnames from 'classnames';
import { isFunction } from '../../../modules/checkers';
import Icon from '../../base/Icon/Icon';

import type { RefAttributes, ForwardRefExoticComponent } from 'react';
import type { TButtonRef } from '../../../modules/helper';
import type { TButtonOnClick, IButtonProps } from './types';

import './Button.scss';

const Button: ForwardRefExoticComponent<IButtonProps & RefAttributes<TButtonRef>> = forwardRef((props, ref) => {
	const {
		children,
		className,
		template,
		theme,
		wide,
		disabled,
		icon,
		onClick: onClickProp,
	} = props;

	const rootClass: string = classnames('button', className, {
		[`_template_${ template }`]: template,
		[`_theme_${ theme }`]: theme,
		'_wide': wide,
		'_disabled': disabled,
	});

	const onClick: TButtonOnClick = (event) => {
		!!onClickProp && isFunction(onClickProp) && onClickProp(event);
	};

	return (
		<>
			<button
				className={ rootClass }
				ref={ ref }
				disabled={ disabled }
				onClick={ onClick }
			>
				{
					!!icon &&
					<Icon
						className={ 'button__icon' }
						name={ icon }
					/>
				}

				{
					!!children &&
					<span className={ 'button__caption' }>
						{ children }
					</span>
				}
			</button>
		</>
	);
});

export default Button;
