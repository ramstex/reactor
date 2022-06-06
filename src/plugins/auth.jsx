import React from 'react';
import classnames from 'classnames';
import Form from './form.jsx';

import { Col, Row } from '../components/Grid/Grid.jsx';
import UiInput from '../components/Ui/Input/Input.jsx';
import UiCheckbox from '../components/Ui/Checkbox/Checkbox.jsx';
import UiButton from '../components/Ui/Button/Button.jsx';

class AuthFormComponent extends React.Component {
	constructor(props) {
		super(props);

		this.onSubmit = Form.onSubmit.bind(this);
		this.onSuccess = Form.onSuccess.bind(this);
		this.onInvalid = Form.onInvalid.bind(this);
		this.onChange = Form.onChange.bind(this);
	}

	//	Классы
	classNameRoot() {
		const { className } = this.props;
		const { formKey } = this.state;
		return classnames(`form-${formKey}`, className);
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
