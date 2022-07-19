import React, { useState, useEffect, forwardRef } from 'react';
import classnames from 'classnames';
import useInputProps from './hooks/useInputProps.jsx';

import UiButton from '../Button/Button.jsx';

import './Input.scss';

const UiInput = forwardRef( ( props, ref ) => {
	const {
		className,
		type = 'text',
		value = '',
		state = 'default',
		size = 'md',
		theme = 'primary',
		children,
		aside,
		textarea,
		resize,
		disabled,
		required,
		message,
		autoFocus,
		switchable,
		clearable,
		onChange,
		onMount,
		onFocus,
		onBlur,
	} = props;

	useEffect( () => {
		!!onMount && onMount();
	}, [] );

	const [
		valueLocal,
		setValueLocal,
	] = useState( value );

	useEffect( () => {
		if ( value !== valueLocal ) {
			setValueLocal( value );
		}
	}, [ value ] );

	const [
		typeLocal,
		setTypeLocal,
	] = useState( type );

	useEffect( () => {
		setTypeLocal( type );
	}, [ type ] );

	const [
		isPasswordVisible,
		setPasswordVisibility,
	] = useState( false );

	const [
		passwordSwitchIcon,
		setPasswordSwitchIcon,
	] = useState( 'eye-opened' );

	useEffect( () => {
		if ( type === 'password' ) {
			setPasswordSwitchIcon( isPasswordVisible
				? 'eye-closed'
				: 'eye-opened' );

			setTypeLocal( isPasswordVisible
				? 'text'
				: 'password' );
		}
	}, [ isPasswordVisible ] );

	const onPasswordSwitchClick = () => {
		setPasswordVisibility( !isPasswordVisible );
	};

	const [
		isFocused,
		setFocused,
	] = useState( autoFocus );

	useEffect( () => {
		if ( autoFocus !== isFocused ) {
			setFocused( autoFocus );
		}
	}, autoFocus );

	const onChangeLocal = ( event ) => {
		if ( !!onChange ) {
			onChange( event );
		}
		setValueLocal( event.target.value );
	};

	const onClearClick = () => {
		!!onChange && onChange( { target: { value: '' } } );
		setValueLocal( '' );
	};

	const onFocusLocal = ( event ) => {
		!!onFocus && onFocus( event );
		setFocused( true );
	};

	const onBlurLocal = ( event ) => {
		!!onBlur && onBlur( event );
		setFocused( false );
	};

	const { inputProps } = useInputProps(
		props,
		{
			value: valueLocal,
			type: textarea
				? undefined
				: typeLocal,
			autoFocus: isFocused,
			onChange: onChangeLocal,
			onFocus: onFocusLocal,
			onBlur: onBlurLocal,
		}
	);

	const classNameRoot = () => {
		return classnames(
			className,
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
							className={ 'ui-input__input' }
							ref={ ref }
							{ ...inputProps }
						/>

						{
							clearable &&
							value &&
							!textarea &&
							<UiButton
								className={ 'ui-input__button' }
								template={ 'text' }
								icon={ 'close' }
								tight
								onClick={ onClearClick }
							/>
						}

						{
							switchable &&
							!textarea &&
							<UiButton
								className={ 'ui-input__button' }
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
} );

export default UiInput;
