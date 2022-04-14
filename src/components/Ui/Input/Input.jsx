import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import omit from 'lodash/omit';

import './Input.scss';

class UiInput extends React.Component {
	//	Классы
	classNameRoot() {
		const { className, textarea } = this.props;
		return classnames(
			'ui-input',
			className,
			{ _textarea: textarea },
		);
	}

	classNameInput() {
		return classnames( 'ui-input__input', );
	}

	render() {
		const { textarea, type, placeholder } = this.props;

		const attrs = omit( this.props, [
			'className',
			'children',
			'textarea',
			'placeholder',
			'type',
		] );

		return (
			<div className={ this.classNameRoot() }>
				{ textarea ?
					<textarea className={ this.classNameInput() } placeholder={ placeholder } { ...attrs } />
					:
					<input className={ this.classNameInput() } type={ type } placeholder={ placeholder } { ...attrs } />
				}
			</div>
		)
	}
}

UiInput.propTypes = {
	className: PropTypes.string,
	textarea: PropTypes.bool,
	placeholder: PropTypes.string,

	type: PropTypes.oneOf( [
		'text',
		'password',
		'email',
		'number',
		'tel',
	] ),
};

UiInput.defaultProps = {
	type: 'text',
};

export default UiInput;
