import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import omit from 'lodash/omit';

import './Input.scss';

const UiInput = ( props ) => {
	const {
		type = 'text',
		value = '',
		state = 'default',
		size = 'md',
		theme = 'primary',
		children,
		textarea,
		resize,
		disabled,
		required,
		message,
		autoFocus,
		onChange,
		onMount,
		onFocus,
		onBlur,
	} = props;

	const [
		valueLocal,
		setValueLocal,
	] = useState( value );

	const [
		isFocused,
		setFocused,
	] = useState( autoFocus );

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

	const onFocusLocal = ( event ) => {
		!!onFocus && onFocus( event );
		setFocused( true );
	};

	const onBlurLocal = ( event ) => {
		!!onBlur && onBlur( event );
		setFocused( false );
	};

	const classNameRoot = () => {
		return classnames(
			'ui-input',
			{ '_textarea': textarea },
			{ '_disabled': disabled },
			{ '_required': required },
			{ '_resize': textarea && resize },
			{ '_focus': isFocused },
			`_state_${ state }`,
			`_size_${ size }`,
			`_theme_${ theme }`
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
		'size',
		'theme',
		'message',
		'type',
		'onChange',
		'onMounted',
	] );

	const inputAttrs = {
		...attrsAsIs,
		value: valueLocal,
		onChange: onChangeLocal,
		onFocus: onFocusLocal,
		onBlur: onBlurLocal,
		type: textarea
			? undefined
			: type,
	};

	const InputComponent = textarea
		? 'textarea'
		: 'input';

	return (
		<div className={ classNameRoot() }>
			<label className={ 'ui-input__label' }>
				{ !!children && <p className={ 'ui-input__caption' }> { children } </p> }

				<div className="ui-input__body">
					<InputComponent
						{ ...inputAttrs }
						className={ 'ui-input__input' }
						onFocus={ onFocusLocal }
						onBlur={ onBlurLocal }
					/>
				</div>

				{ !!message && <p className={ 'ui-input__message' }> { message } </p> }
			</label>
		</div>
	);
};

export default UiInput;
