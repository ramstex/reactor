import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import omit from 'lodash/omit';
import { isComponentUpdated } from '../../../plugins/helpers.js';
import { withValidation } from '../../../hoc/validation/withValidation.jsx';

import './Input.scss';

class UiInput extends React.Component {
	constructor( props ) {
		super( props );

		const {
			value,
			onChange,
		} = this.props;

		this.input = React.createRef();

		// В поле ввода подаётся значение из state, а не из props.
		this.state = { value };

		// Обработчик ввода текста в поле.
		this.onChange = ( event ) => {
			if ( !!onChange ) {
				onChange( event );
			}

			this.setState( { value: event.target.value } );
		};
	}

	//	Классы
	classNameRoot() {
		const {
			className,
			error,
			success,
			required,
			disabled,
			textarea,
		} = this.props;

		return classnames(
			'ui-input',
			className,
			{ _required: required },
			{ _disabled: disabled },
			{ _textarea: textarea },
			{ _error: error },
			{ _success: success }
		);
	}

	componentDidUpdate( prevProps, prevState, snapshot ) {
		// Если изменился пропс value - пишем его в стейт
		if ( isComponentUpdated( prevProps.value, this.props.value, this.state.value ) ) {
			this.setState( { value: this.props.value } );
		}
	}

	componentDidMount() {
		const { onMounted } = this.props;

		// При монтировании компонента выполняем пропс onMounted, если он задан
		if ( !!onMounted ) {
			onMounted( { target: this.input.current } );
		}
	}

	render() {
		const {
			children,
			textarea,
			type,
			message,
		} = this.props;

		const { value } = this.state;

		// Формируем список пропсов, которые нужно указать в поле ввода как есть.
		// Для этого из общего списка пропсов исключаются те, которые требуют доп. обработки перед указанием.
		// Пропс type указывается как он есть, но всё равно исключается, так как не является валидным для textarea.
		const attrsAsIs = omit( this.props, [
			'className',
			'children',
			'value',
			'textarea',
			'error',
			'success',
			'message',
			'type',
			'onChange',
			'onMounted',
		] );

		return (
			<div className={ this.classNameRoot() }>
				<label>
					{ !!children && <p className={ 'ui-input__caption' }> { children } </p> }

					{ textarea
						? (
							<textarea
								{ ...attrsAsIs }
								className={ 'ui-input__input' }
								ref={ this.input }
								value={ value }
								onChange={ this.onChange }
							/>
						)
						: (
							<input
								{ ...attrsAsIs }
								className={ 'ui-input__input' }
								ref={ this.input }
								value={ value }
								type={ type }
								onChange={ this.onChange }
							/>
						) }

					{ !!message && <p className={ 'ui-input__message' }> { message } </p> }
				</label>
			</div>
		);
	}
}

UiInput.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,

	value: PropTypes.oneOfType( [
		PropTypes.string,
		PropTypes.number,
	] ),

	required: PropTypes.bool,
	disabled: PropTypes.bool,
	readOnly: PropTypes.bool,
	error: PropTypes.bool,
	success: PropTypes.bool,
	textarea: PropTypes.bool,
	placeholder: PropTypes.string,
	message: PropTypes.string,

	type: PropTypes.oneOf( [ 'text', 'password', 'email', 'number', 'tel' ] ),

	onChange: PropTypes.func,
	onMounted: PropTypes.func,
};

UiInput.defaultProps = { type: 'text' };

export default withValidation( UiInput );
