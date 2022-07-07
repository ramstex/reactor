import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import omit from 'lodash/omit';

import './Input.scss';

const UiInput = ( props ) => {
	const {
		type = 'text',
		value = '',
		state = 'default',
		children,
		textarea,
		resize,
		disabled,
		required,
		message,
		onChange,
		onMount,
	} = props;

	const [
		valueLocal,
		setValueLocal,
	] = useState( value );

	useEffect( () => {
		!!onMount && onMount();
	}, [] );

	useEffect( () => {
		if ( value !== valueLocal ) {
			setValueLocal( value );
		}
	}, [ value ] );

	const onChangeLocal = ( event ) => {
		!!onChange && onChange( event );
		setValueLocal( event.target.value );
	};

	const classNameRoot = () => {
		return classnames(
			'ui-input',
			{ '_textarea': textarea },
			{ '_disabled': disabled },
			{ '_required': required },
			{ '_resize': textarea && resize },
			`_state_${ state }`
		);
	};

	// Формируем список пропсов, которые нужно указать в поле ввода как есть.
	// Для этого из общего списка пропсов исключаются те, которые требуют доп. обработки перед указанием.
	// Пропс type указывается как он есть, но всё равно исключается, так как не является валидным для textarea.
	const attrsAsIs = omit( props, [
		'className',
		'children',
		'value',
		'textarea',
		'resize',
		'state',
		'message',
		'type',
		'onChange',
		'onMounted',
	] );

	return (
		<div className={ classNameRoot() }>
			<label className={ 'ui-input__label' }>
				{ !!children && <p className={ 'ui-input__caption' }> { children } </p> }

				<div className="ui-input__body">
					{ textarea
						? (
							<textarea
								{ ...attrsAsIs }
								className={ 'ui-input__input' }
								value={ valueLocal }
								onChange={ onChangeLocal }
							/>
						)
						: (
							<input
								{ ...attrsAsIs }
								className={ 'ui-input__input' }
								value={ valueLocal }
								type={ type }
								onChange={ onChangeLocal }
							/>
						) }
				</div>

				{ !!message && <p className={ 'ui-input__message' }> { message } </p> }
			</label>
		</div>
	);
};

export default UiInput;
