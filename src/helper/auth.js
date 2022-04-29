import React from 'react';
import forms from '../../config/forms.js';
import classnames from 'classnames';
import _FORMS from '../../config/forms.js';

import { Col, Row } from '../components/Grid/Grid.jsx';
import UiInput from '../components/Ui/Input/Input.jsx';
import UiButton from '../components/Ui/Button/Button.jsx';

const getValidationMessage = (source, formKey, inputKey) => {
	const { validity } = source;

	const messageKey = Object.keys(Object.getPrototypeOf(validity)).find((key) => {
		return !!validity[key];
	});

	return (
		(forms.messages.forms[formKey] &&
			forms.messages.forms[formKey][inputKey] &&
			forms.messages.forms[formKey][inputKey][messageKey]) ||
		forms.messages.defaults[messageKey]
	);
};

const authForm = (formKey) => {
	return class AuthFormComponent extends React.Component {
		constructor(props) {
			super(props);

			this.state = {
				fields: _FORMS.contents[formKey],
			};

			this.onSubmit = this.onSubmit.bind(this);
			this.onInvalid = this.onInvalid.bind(this);
			this.onChange = this.onChange.bind(this);
		}

		//	Классы
		classNameRoot() {
			const { className } = this.props;
			return classnames(`form-${formKey}`, className);
		}

		onSubmit(event) {
			event.preventDefault();
		}

		onInvalid(inputKey) {
			return (event) => {
				event.preventDefault();

				const { fields } = this.state;
				fields[inputKey] = Object.assign(fields[inputKey], {
					error: true,
					message: getValidationMessage(event.target, formKey, inputKey),
				});

				this.setState({
					fields,
				});
			};
		}

		onChange(inputKey) {
			return (event) => {
				event.preventDefault();

				const { fields } = this.state;
				fields[inputKey] = Object.assign(fields[inputKey], {
					error: false,
					success: false,
					message: '',
					value: event.target.value,
				});

				this.setState({
					fields,
				});
			};
		}

		render() {
			const { fields } = this.state;

			return (
				<form className={this.classNameRoot()} onSubmit={this.onSubmit}>
					<Row>
						{Object.entries(fields).map(([key, value]) => {
							return (
								<Col col={5} key={key}>
									<UiInput
										{...value}
										pattern={key === 'confirmation' ? this.state.fields.password.value : undefined}
										onInvalid={this.onInvalid(value.name || key)}
										onChange={this.onChange(value.name || key)}
									>
										{value.caption}
									</UiInput>
								</Col>
							);
						})}
					</Row>

					<Row className={'_mt_4'}>
						<Col>
							<UiButton type={'submit'}>Отправить</UiButton>
						</Col>
					</Row>
				</form>
			);
		}
	};
};

const Auth = {
	authForm,
};

export default Auth;
