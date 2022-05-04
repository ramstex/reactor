import React from 'react';
import classnames from 'classnames';
import _FORMS from '../../config/forms.jsx';

import { Col, Row } from '../components/Grid/Grid.jsx';
import UiInput from '../components/Ui/Input/Input.jsx';
import UiCheckbox from '../components/Ui/Checkbox/Checkbox.jsx';
import UiButton from '../components/Ui/Button/Button.jsx';

const getValidationMessage = (source, formKey, inputKey) => {
	const { validity } = source;

	const messageKey = Object.keys(Object.getPrototypeOf(validity)).find((key) => {
		return !!validity[key];
	});

	return (
		(_FORMS.messages.forms[formKey] &&
			_FORMS.messages.forms[formKey][inputKey] &&
			_FORMS.messages.forms[formKey][inputKey][messageKey]) ||
		_FORMS.messages.defaults[messageKey]
	);
};

class AuthFormComponent extends React.Component {
	constructor(props) {
		super(props);

		this.onSubmit = this.onSubmit.bind(this);
		this.onSuccess = this.onSuccess.bind(this);
		this.onInvalid = this.onInvalid.bind(this);
		this.onChange = this.onChange.bind(this);
	}

	//	Классы
	classNameRoot() {
		const { className } = this.props;
		const { formKey } = this.state;
		return classnames(`form-${formKey}`, className);
	}

	onSubmit(event) {
		event.preventDefault();
		this.onSuccess();
	}

	onSuccess() {
		console.log('SUBMIT SUCCESS');
	}

	onInvalid(inputKey) {
		return (event) => {
			event.preventDefault();

			const { fields, formKey } = this.state;
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
			const { fields } = this.state;
			fields[inputKey] = Object.assign(fields[inputKey], {
				error: false,
				success: false,
				message: '',
			});

			if (fields[inputKey].hasOwnProperty('value')) {
				event.preventDefault();
				fields[inputKey].value = event.target.value;
			}

			if (fields[inputKey].hasOwnProperty('checked')) {
				fields[inputKey].checked = event.target.checked;
			}

			this.setState({
				fields,
			});
		};
	}

	FormFields() {
		const { fields } = this.state;

		return (
			<React.Fragment>
				{Object.entries(fields).map(([key, value]) => {
					switch (value.type) {
						case 'checkbox':
							return (
								<Col className={'_mb_2'} col={12} key={key}>
									<UiCheckbox
										{...value}
										onInvalid={this.onInvalid(value.name || key)}
										onChange={this.onChange(value.name || key)}
									>
										{value.caption}
									</UiCheckbox>
								</Col>
							);
						default:
							return (
								<Col className={'_mb_2'} col={5} key={key}>
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
					}
				})}
			</React.Fragment>
		);
	}

	FormTemplate() {
		return (
			<form className={this.classNameRoot()} onSubmit={this.onSubmit}>
				<Row>{this.FormFields()}</Row>

				<Row className={'_mt_4'}>
					<Col>
						<UiButton type={'submit'}>Отправить</UiButton>
					</Col>
				</Row>
			</form>
		);
	}

	render() {
		return this.FormTemplate();
	}
}

const Auth = {
	AuthFormComponent,
};

export default Auth;
