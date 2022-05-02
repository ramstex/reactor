import React from 'react';
import Auth from '../../../plugins/auth.jsx';
import { cloneDeep } from 'lodash';

import './Registration.scss';
import _FORMS from '../../../../config/forms.jsx';

class FormRegistration extends Auth.AuthFormComponent {
	constructor(props) {
		super(props);

		this.state = {
			formKey: 'registration',
			fields: cloneDeep(_FORMS.contents['registration']),
		};
	}
}

export default FormRegistration;
