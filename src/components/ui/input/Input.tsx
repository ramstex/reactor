// ToDo: textarea
// ToDo: icons

import { forwardRef } from 'react';
import classnames from 'classnames';

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type {
	TInputRef, TInputType, TUiState, IComponentProps
} from '../../../modules/helper';

import './Input.scss'

interface IInputProps extends IComponentProps {
	textarea?: boolean,
	type?: TInputType,
	placeholder?: string,
	label?: string | boolean,
	name?: string,
	value?: string,
	message?: string,
	state?: TUiState,
	disabled?: boolean,
	resize?: boolean,
}

const Input: ForwardRefExoticComponent<IInputProps & RefAttributes<TInputRef>> = forwardRef((props, ref) => {
	const {
		className,
		children,
		textarea,
		type = 'text',
		placeholder,
		name,
		value,
		message,
		state,
		disabled,
	} = props;

	const rootClass: string = classnames('input', className, {
		'_textarea': textarea,
		'_disabled': disabled,
		[`_state_${ state }`]: state,
	});

	return (
		<label className={ rootClass }>
			{
				!!children &&
				<p className={ 'input__label' }>
					{ children }
				</p>
			}

			{
				textarea
					? <textarea
						className={ 'input__input' }
						ref={ ref }
						name={ name }
						value={ value }
						placeholder={ placeholder }
						disabled={ disabled }
					/>
					: <input
						className={ 'input__input' }
						ref={ ref }
						type={ type }
						name={ name }
						value={ value }
						placeholder={ placeholder }
						disabled={ disabled }
					/>
			}

			{
				!!message &&
				<p className={ 'input__message' }>
					{ message }
				</p>
			}
		</label>
	);
});

export default Input;
