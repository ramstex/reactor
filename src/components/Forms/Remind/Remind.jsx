import React from 'react';
import Auth from '../../../plugins/auth.js';
import { cloneDeep } from 'lodash';

import './Remind.scss';
import _FORMS from '../../../../config/forms.js';

class FormRemind extends Auth.AuthFormComponent {
	constructor(props) {
		super(props);

		this.state = {
			formKey: 'remind',
			fields: cloneDeep(_FORMS.contents['remind']),
			success: false,
		};
	}

	onSuccess() {
		this.setState({
			success: true,
		});
	}

	SuccessMessage() {
		return (
			<div>
				<h3>Это успех!</h3>
				<p>Ваш пароль изменён!</p>
			</div>
		);
	}

	render() {
		const { success } = this.state;

		return <React.Fragment>{success ? this.SuccessMessage() : this.FormTemplate()}</React.Fragment>;
	}
}

export default FormRemind;
