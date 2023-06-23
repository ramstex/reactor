import classBuilder from '../../../plugins/classBuilder';

import Icon from '../../Base/Icon/Icon';

import './style.scss';

import { EButtonTemplate, EButtonTheme, EButtonType } from './helpers';

import type { TButtonComponent } from './types';

const Button: TButtonComponent = ( props ) => {
	const {
		className,
		children,
		type = EButtonType.button,
		theme,
		template,
		inverse,
		wide,
		disabled,
		icon,
		iconPosition = 'start',
		square,
		onClick,
		onMouseEnter,
		onMouseLeave,
	} = props;

	const isIconPositionStart = !!icon && iconPosition === 'start';
	const isIconPositionEnd = !!icon && iconPosition === 'end';

	const classNameRoot = classBuilder( 'button', {
		[ `_theme_${ theme }` ]: !!theme && theme != EButtonTheme.default,
		[ `_template_${ template }` ]: !!template && template != EButtonTemplate.default,
		[ '_icon-position_start' ]: isIconPositionStart,
		[ '_icon-position_end' ]: isIconPositionEnd,
		_inverse: inverse,
		_wide: wide,
		_disabled: disabled,
		_square: square,
	}, className );

	return (
		<button
			className={ classNameRoot }
			type={ type }
			disabled={ disabled }
			onClick={ onClick }
			onMouseEnter={ onMouseEnter }
			onMouseLeave={ onMouseLeave }
		>
			{
				isIconPositionStart &&
				<Icon
					className={ 'button__icon' }
					name={ icon }
				/>
			}

			{
				!!children &&
				<span className={ 'button__caption' }>{ children }</span>
			}

			{
				isIconPositionEnd &&
				<Icon
					className={ 'button__icon' }
					name={ icon }
				/>
			}
		</button>
	);
};

export default Button;
