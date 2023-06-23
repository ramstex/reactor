import { forwardRef } from 'react';
import classBuilder from '../../../plugins/classBuilder';
import { EIconName } from '../../Base/Icon/helper';
import { EButtonTemplate } from '../Button/helpers';

import type { TInputComponent } from './types';
import { EInputType } from './helpers';
import Button from '../Button/Button';

import './style.scss';
import { useState } from 'react';

const Input: TInputComponent = forwardRef( ( props, ref ) => {
	const {
		children,
		className,
		type,
		name,
		placeholder,
		message,
		textarea,
		disabled,
		required,
		clearable,
		readOnly,
		value,
		onChange,
		onClear,
	} = props;

	const classNameRoot = classBuilder( 'input', {
		_required: required,
		_textarea: textarea,
	}, className );

	const [ typeLocal, setTypeLocal ] = useState( type );

	const onClearClick = () => {
		onClear && onClear();
	};

	const onEyeClick = () => {
		const newType = typeLocal === EInputType.password
			? EInputType.text
			: EInputType.password;

		setTypeLocal( newType );
	};

	return (
		<div className={ classNameRoot }>
			{
				!!children &&
				<p className={ 'input__caption' }>{ children }</p>
			}

			<div className={ 'input__body' }>
				{
					textarea
						? <textarea
							className={ 'input__field' }
							ref={ ref }
							name={ name }
							placeholder={ placeholder }
							disabled={ disabled }
							readOnly={ readOnly }
							onChange={ onChange }
						/>
						: <input
							className={ 'input__field' }
							ref={ ref }
							type={ typeLocal }
							name={ name }
							placeholder={ placeholder }
							disabled={ disabled }
							readOnly={ readOnly }
							value={ value }
							onChange={ onChange }
						/>
				}

				{
					clearable && value &&
					<Button
						className={ 'input__button input__clear' }
						template={ EButtonTemplate.link }
						icon={ EIconName.close }
						square
						onClick={ onClearClick }
					/>
				}

				{
					type === EInputType.password &&
					<Button
						className={ 'input__button input__eye' }
						template={ EButtonTemplate.link }
						icon={
							typeLocal === EInputType.password
								? EIconName.eyeClosed
								: EIconName.eyeOpened
						}
						square
						onClick={ onEyeClick }
					 />
				}
			</div>

			{
				!!message &&
				<p className={ 'input__message' }>{ message }</p>
			}
		</div>
	)
} );

export default Input;
