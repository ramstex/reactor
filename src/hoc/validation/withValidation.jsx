// ToDo: если передано value, но не передано onChange, надо прокинуть value в инпут в качестве первичного значения.
// Логика внутри инпута от этого не меняется. Отличие только в том, что новое значение не передаётся родителям.

import React from 'react';
import PropTypes from 'prop-types';

export function withValidation( WrappedComponent ) {
	class Validation extends React.Component {
		constructor( props ) {
			super( props );

			const {
				validity,
				onChange,
				onMounted,
			} = this.props;

			this.state = { valid: true };

			this.onChange = ( event ) => {
				onChange
					? onChange( event )
					: this.setValue( event.target.value );
			};

			this.onMounted = ( event ) => {
				onMounted
					? onMounted( event )
					: console.log( this.checkValidity( event ) );
			};

			this.checkValidity = ( event ) => {
				return !!event
					? Object.assign( event.target.validity, validity )
					: { ...validity };
			};

			this.setValue = ( value ) => {
				this.setState( { value } );
			};
		}

		render() {
			return <WrappedComponent { ...this.props } onChange={ this.onChange } onMounted={ this.onMounted } />;
		}
	}

	Validation.propTypes = {
		validity: PropTypes.object,
		onChange: PropTypes.func,
		onMounted: PropTypes.func,
	};

	return Validation;
}
