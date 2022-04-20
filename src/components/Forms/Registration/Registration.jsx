import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import auth from '../../../helper/auth.js';

import { Row, Col } from '../../Grid/Grid.jsx';
import UiButton from '../../Ui/Button/Button.jsx';
import UiInput from '../../Ui/Input/Input.jsx';

import './Registration.scss';

class FormRegistration extends React.Component {
	constructor( props ) {
		super( props );

		this.state = {
			fields: {
				email: {
					name: 'email',
					type: 'email',
					caption: 'E-mail',
					required: true,
					error: false,
					success: false,
					value: '',
				},

				name: {
					name: 'name',
					caption: 'Имя пользователя',
					error: false,
					success: false,
					value: '',
				},

				password: {
					name: 'password',
					type: 'password',
					caption: 'Пароль',
					required: true,
					error: false,
					success: false,
					value: '',
				},

				confirmation: {
					name: 'confirmation',
					type: 'password',
					caption: 'Повторите пароль',
					required: true,
					error: false,
					success: false,
					value: '',
				},
			},
		};

		this.onSubmit = this.onSubmit.bind( this );
		this.onInvalid = this.onInvalid.bind( this );
		this.onChange = this.onChange.bind( this );
	}

	//	Классы
	classNameRoot() {
		const { className } = this.props;
		return classnames( 'form-registration', className );
	}

	onSubmit( event ) {
		event.preventDefault();

	}

	onInvalid( inputKey ) {
		return ( event ) => {
			event.preventDefault();

			const { fields } = this.state;
			fields[ inputKey ] = Object.assign( fields[ inputKey ], {
				error: true,
				message: auth.getValidationMessage( event.target, 'registration', inputKey ),
			} );

			this.setState( {
				fields,
			} );
		};
	}

	onChange( inputKey ) {
		return ( event ) => {
			event.preventDefault();

			const { fields } = this.state;
			fields[ inputKey ] = Object.assign( fields[ inputKey ], {
				error: false,
				success: false,
				message: '',
				value: event.target.value,
			} );

			this.setState( {
				fields,
			} );
		};
	}

	render() {
		return (
			<form className={ this.classNameRoot() } onSubmit={ this.onSubmit }>
				<Row>
					{ Object.entries( this.state.fields ).map( ( [ key, value ] ) => (
						<Col col={ 5 } key={ key }>
							<UiInput
								{ ...value }
								pattern={
									key === 'confirmation'
										?
										this.state.fields.password.value
										:
										undefined
								}
								onInvalid={ this.onInvalid( value.name || key ) }
								onChange={ this.onChange( value.name || key ) }
							> { value.caption } </UiInput>
						</Col>
					) ) }
				</Row>

				<Row className={ '_mt_4' }>
					<Col>
						<UiButton type={ 'submit' }> Отправить </UiButton>
					</Col>
				</Row>
			</form>
		);
	}
}

FormRegistration.propTypes = {
	className: PropTypes.string,
};

export default FormRegistration;
