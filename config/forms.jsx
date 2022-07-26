import React from 'react';

import BaseLink from '../src/components/Base/Link/Link.jsx';

import AgreementPdf from '/src/assets/rules.pdf';

const messages = {
	defaults: {
		alreadyExists: 'Такой адрес уже зарегистрирован',
		valueMissing: 'Обязательное поле',
	},

	forms: {
		registration: {
			email: { typeMismatch: 'Адрес заполнен некорректно' },

			confirmation: { patternMismatch: 'Введённые пароли не совпадают' },
		},

		login: { email: { pattern: 'Email заполнен некорректно.' } },

		remind: { email: { typeMismatch: 'Адрес заполнен некорректно' } },
	},
};

const contents = {
	registration: {
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

		agreement: {
			name: 'agreement',
			type: 'checkbox',
			caption: (
				<React.Fragment>
					{ 'Я соглашаюсь с ' }
					<BaseLink href={ AgreementPdf }
							  target="_blank">
						условиями регистрации
					</BaseLink>
				</React.Fragment>
			),
			required: true,
			error: false,
			success: false,
			checked: false,
		},
	},

	login: {
		email: {
			name: 'email',
			type: 'email',
			caption: 'E-mail',
			required: true,
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
	},

	remind: {
		email: {
			name: 'email',
			type: 'email',
			caption: 'E-mail',
			required: true,
			error: false,
			success: false,
			value: '',
		},
	},
};

const FormsConfig = {
	messages,
	contents,
};

export default FormsConfig;
