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

const getMessage = ( source, formKey, inputKey ) => {
	const { validity } = source;

	const messageKey = Object.keys( Object.getPrototypeOf( validity ) ).find( ( key ) => {
		return !!validity[ key ];
	} );

	return (
		messages.forms[ formKey ] &&
		messages.forms[ formKey ][ inputKey ] &&
		messages.forms[ formKey ][ inputKey ][ messageKey ]
	) ||
	messages.defaults[ messageKey ];
};

const validation = {
	messages,
	getMessage,
};

export default validation;
