import { useState, useEffect } from 'react';
import classBuilder from '../../../plugins/classBuilder';
import { EIconName } from '../../Base/Icon/helper';

import Icon from '../../Base/Icon/Icon';

import './style.scss';

import type { TCheckbox, TCheckboxOnChange } from './types';

const Checkbox: TCheckbox = ( props ) => {
	const {
		children,
		className,
		checked: checkedProp = false,
		required,
		invalid,
		name,
		message,
		onChange,
	} = props;

	const [ checked, setChecked ] = useState<boolean>( checkedProp );
	useEffect( () => {
		setChecked( checkedProp );
	}, [ checkedProp ] );

	const rootClassName = 'checkbox';
	const classNames = {
		root: classBuilder( rootClassName, className, {
			_required: required,
			_checked: checked,
			_invalid: invalid,
		} ),
		label: classBuilder( `${ rootClassName }__label` ),
		body: classBuilder( `${ rootClassName }__body` ),
		box: classBuilder( `${ rootClassName }__box` ),
		icon: classBuilder( `${ rootClassName }__icon` ),
		input: classBuilder( `${ rootClassName }__input` ),
		message: classBuilder( `${ rootClassName }__message` ),
	};

	const onCheckboxChange: TCheckboxOnChange = ( event ) => {
		const newValue = !!event?.target.checked;
		setChecked( newValue );
		!!onChange && onChange( event );
	}

	return (
		<label className={ classNames.root }>
			<div className={ classNames.body }>
				<input
					className={ classNames.input }
					type="checkbox"
					required={ required }
					name={ name }
					checked={ checked }
					onChange={ onCheckboxChange }
				/>

				<div className={ classNames.box }>
					<Icon
						className={ classNames.icon }
						name={ EIconName.check }
					/>
				</div>

				{
					!!children &&
					<p className={ classNames.label }>{ children }</p>
				}
			</div>

			{
				!!message &&
				<p className={ classNames.message }>{ message }</p>
			}
		</label>
	);
};

export default Checkbox;
