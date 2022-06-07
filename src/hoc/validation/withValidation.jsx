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
				if ( !!onChange ) {
					onChange( event );
				}

				this.setState( { valid: !!this.checkValidity( event ).valid } );
			};

			this.onMounted = ( event ) => {
				if ( !!onMounted ) {
					onMounted( event );
				}

				this.setState( { valid: !!this.checkValidity( event ).valid } );
			};

			this.checkValidity = ( event ) => {
				return !!event
					? Object.assign( event.target.validity, validity )
					: { ...validity };
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

	Validation.defaultProps = { validity: {} };

	return Validation;
}
