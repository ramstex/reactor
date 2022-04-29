const messages = {
	defaults: {
		alreadyExists: 'Такой адрес уже зарегистрирован',
		valueMissing: 'Обязательное поле',
	},

	forms: {
		registration: {
			email: {
				typeMismatch: 'Адрес заполнен некорректно',
			},

			confirmation: {
				patternMismatch: 'Введённые пароли не совпадают',
			},
		},

		login: {
			email: {
				typeMismatch: 'Адрес заполнен некорректно',
			},
		},
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

const _FORMS = {
	messages,
	contents,
};

export default _FORMS;
