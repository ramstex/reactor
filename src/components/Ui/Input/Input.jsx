import React from 'react';
import PropTypes, { instanceOf } from 'prop-types';
import classnames from 'classnames';
import omit from 'lodash/omit';

import './Input.scss';
import { withValidation } from '../../../hoc/validation/withValidation.jsx';

class UiInput extends React.Component {
	constructor( props ) {
		super( props );

		this.input = React.createRef();
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

	classNameCaption() {
		return classnames( 'ui-input__caption' );
	}

	classNameInput() {
		return classnames( 'ui-input__input' );
	}

	classNameMessage() {
		return classnames( 'ui-input__message' );
	}

	componentDidMount() {
		const { onMounted } = this.props;
		try {
			onMounted( { target: this.input.current } );
		} catch {
			console.warn( 'UiInput Warning: this.prop.onMounted is not a function', this );
		}
	}

	render() {
		const {
			children,
			required,
			disabled,
			textarea,
			type,
			message,
			placeholder,
			onChange,
		} = this.props;

		const attrs = omit( this.props, [
			'className',
			'children',
			'required',
			'textarea',
			'disabled',
			'error',
			'success',
			'message',
			'placeholder',
			'type',
			'onChange',
			'onMounted',
		] );

		return (
			<div className={ this.classNameRoot() }>
				<label>
					{ !!children && <p className={ this.classNameCaption() }> { children } </p> }

					{ textarea
						?
						(
							<textarea
								{ ...attrs }
								className={ this.classNameInput() }
								ref={ this.input }
								required={ required }
								disabled={ disabled }
								placeholder={ placeholder }
								onChange={ onChange }
							/>
						)
						:
						(
							<input
								{ ...attrs }
								className={ this.classNameInput() }
								ref={ this.input }
								required={ required }
								disabled={ disabled }
								type={ type }
								placeholder={ placeholder }
								onChange={ onChange }
							/>
						) }

					{ !!message && <p className={ this.classNameMessage() }> { message } </p> }
				</label>
			</div>
		);
	}
}

UiInput.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	required: PropTypes.bool,
	disabled: PropTypes.bool,
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
