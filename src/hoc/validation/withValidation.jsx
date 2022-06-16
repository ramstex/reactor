import React from 'react';
import PropTypes from 'prop-types';
import { isComponentUpdated } from '../../plugins/helpers.js';
import omit from 'lodash/omit';

export function withValidation( WrappedComponent ) {
	class Validation extends React.Component {
		constructor( props ) {
			super( props );

			const {
				validity,
				validityMessages,
				onChange,
				onMounted,
				onValid,
				onInvalid,
			} = this.props;

			this.state = { valid: true };

			this.onChange = ( event ) => {
				this.checkValidity( event, onChange );
			};

			this.onMounted = ( event ) => {
				this.checkValidity( event, onMounted );
			};

			this.checkValidity = ( event, handler ) => {
				// Выполняем метод валидируемого компонента, если он передан.
				if ( !!handler ) {
					handler( event );
				}

				// Старое и новое значение стейта valid
				const validPrev = this.state.valid;
				const valid = !!this.getTotalValidity( event ).valid;

				this.setState( { valid } );

				// Если стейт valid изменился, выполняем соответствующие обработчики, если они есть в пропсах
				if ( validPrev !== valid ) {
					if ( valid ) {
						if ( !!onValid ) {
							onValid( event );
						}
					} else {
						if ( !!onInvalid ) {
							onInvalid( event );
						}
					}
				}
			};

			this.getTotalValidity = ( event ) => {
				return !!event
					? Object.assign( event.target.validity, validity )
					: { ...validity };
			};
		}

		render() {
			const propsToPass = omit( this.props, [
				'validity',
				'onValid',
				'onInvalid',
			] );

			return <WrappedComponent { ...propsToPass } onChange={ this.onChange } onMounted={ this.onMounted } />;
		}
	}

	Validation.propTypes = {
		validity: PropTypes.object,
		validityMessages: PropTypes.object,
		onValid: PropTypes.func,
		onInvalid: PropTypes.func,
	};

	Validation.defaultProps = { validity: {} };

	return Validation;
}
