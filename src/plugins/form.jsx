import _FORMS from '../../config/forms.jsx';

const getValidationMessage = ( source, formKey, inputKey ) => {
	const { validity } = source;

	const messageKey = Object.keys( Object.getPrototypeOf( validity ) ).find( ( key ) => {
		return !!validity[key];
	} );

	return (
		( _FORMS.messages.forms[formKey] &&
			_FORMS.messages.forms[formKey][inputKey] &&
			_FORMS.messages.forms[formKey][inputKey][messageKey] ) ||
		_FORMS.messages.defaults[messageKey]
	);
};

const onSubmit = function( event ) {
	event.preventDefault();
	this.onSuccess();
};

const onSuccess = function() {
	console.log( 'SUBMIT SUCCESS' );
};

const onInvalid = function( inputKey ) {
	return ( event ) => {
		event.preventDefault();

		const {
			fields,
			formKey,
		} = this.state;
		fields[inputKey] = Object.assign( fields[inputKey], {
			error: true,
			message: getValidationMessage( event.target, formKey, inputKey ),
		} );

		this.setState( { fields } );
	};
};

const onChange = function( inputKey ) {
	return ( event ) => {
		const { fields } = this.state;
		fields[inputKey] = Object.assign( fields[inputKey], {
			error: false,
			success: false,
			message: '',
		} );

		if ( fields[inputKey].hasOwnProperty( 'value' ) ) {
			event.preventDefault();
			fields[inputKey].value = event.target.value;
		}

		if ( fields[inputKey].hasOwnProperty( 'checked' ) ) {
			fields[inputKey].checked = event.target.checked;
		}

		this.setState( { fields } );
	};
};

const Form = {
	onSubmit,
	onSuccess,
	onInvalid,
};

export default Form;
