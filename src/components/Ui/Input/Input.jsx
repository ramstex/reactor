import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import omit from 'lodash/omit';

import UiButton from '../Button/Button.jsx';

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
		aside,
		passwordSwitch,
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
		typeLocal,
		setTypeLocal,
	] = useState( type );

	const [
		isFocused,
		setFocused,
	] = useState( autoFocus );

	const [
		isPasswordVisible,
		setPasswordVisibility,
	] = useState( false );

	const [
		passwordSwitchIcon,
		setPasswordSwitchIcon,
	] = useState( 'eye-opened' );

	useEffect( () => {
		!!onMount && onMount();
	}, [] );

	useEffect( () => {
		if ( value !== valueLocal ) {
			setValueLocal( value );
		}
	}, [ value ] );

	useEffect( () => {
		setTypeLocal( type );
	}, [ type ] );

	useEffect( () => {
		if ( type === 'password' ) {
			setTypeLocal( isPasswordVisible
				? 'text'
				: 'password' );

			setPasswordSwitchIcon( isPasswordVisible
				? 'eye-closed'
				: 'eye-opened' );
		}
	}, [ isPasswordVisible ] );

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

	const onPasswordSwitchClick = () => {
		setPasswordVisibility( !isPasswordVisible );
	}

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
		'typeLocal',
		'textarea',
		'resize',
		'state',
		'size',
		'theme',
		'message',
		'type',
		'aside',
		'passwordSwitch',
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
			: typeLocal,
	};

	const InputComponent = textarea
		? 'textarea'
		: 'input';

	return (
		<div className={ classNameRoot() }>
			<label className={ 'ui-input__label' }>
				{ !!children && <p className={ 'ui-input__caption' }> { children } </p> }

				<div className="ui-input__body">
					<div className="ui-input__field">
						<InputComponent
							{ ...inputAttrs }
							className={ 'ui-input__input' }
							onFocus={ onFocusLocal }
							onBlur={ onBlurLocal }
						/>

						{
							passwordSwitch &&
							<UiButton
								className={ 'ui-input__password-switch' }
								template={ 'text' }
								icon={ passwordSwitchIcon }
								tight
								onClick={ onPasswordSwitchClick }
							/>
						}
					</div>

					{ aside }
				</div>

				{ !!message && <p className={ 'ui-input__message' }> { message } </p> }
			</label>
		</div>
	);
};

export default UiInput;
