import React from 'react';
import Auth from '../../../plugins/auth.jsx';
import { cloneDeep } from 'lodash';

import './Login.scss';
import _FORMS from '../../../../config/forms.jsx';

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
