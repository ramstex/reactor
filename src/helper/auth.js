import validation from '../../config/validation.js';

const getValidationMessage = (source, formKey, inputKey) => {
	const { validity } = source;

	const messageKey = Object.keys(Object.getPrototypeOf(validity)).find((key) => {
		return !!validity[key];
	});

	return (
		(validation.messages.forms[formKey] &&
			validation.messages.forms[formKey][inputKey] &&
			validation.messages.forms[formKey][inputKey][messageKey]) ||
		validation.messages.defaults[messageKey]
	);
};

const auth = {
	getValidationMessage,
};

export default auth;
