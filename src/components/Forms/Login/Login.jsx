import React from 'react';
import Auth from '../../../plugins/auth.js';
import { cloneDeep } from 'lodash';

import './Login.scss';
import _FORMS from '../../../../config/forms.js';

class FormLogin extends Auth.AuthFormComponent {
	constructor(props) {
		super(props);

		this.state = {
			formKey: 'login',
			fields: cloneDeep(_FORMS.contents['login']),
		};
	}
}

export default FormLogin;
