import React from 'react';
import classnames from 'classnames';

import './Form.scss';

const UiForm = ( props ) => {
	const {
		className,
		children,
		onSubmit,
		onInvalid,
	} = props;

	const classNameRoot = classnames( className );

	const onSubmitLocal = ( event ) => {
		if ( !!onSubmit ) {
			onSubmit( event );
		}
	};

	const onInvalidLocal = ( event ) => {
		if ( !!onInvalid ) {
			onInvalid( event );
		}
	};

	return (
		<form
			className={ classNameRoot }
			{ ...props }
			onSubmit={ onSubmitLocal }
			onInvalid={ onInvalidLocal }
		>
			{ children }
		</form>
	);
};

export default UiForm;
