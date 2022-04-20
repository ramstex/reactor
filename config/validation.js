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

			password: {
				typeMismatch: 'Введённые пароли не совпадают',
			},

			confirmation: {
				patternMismatch: 'Введённые пароли не совпадают',
			},
		},
	},
};

const validation = {
	messages,
};

export default validation;
