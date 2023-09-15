import classBuilder from '../../../plugins/classBuilder';

import './style.scss';

import type { TFormComponent, TFormTextFieldComponent, TFormSubmitComponent } from './types';

const Form: TFormComponent = ( props ) => {
	const {
		className,
		children,
		action,
		onSubmit,
		onInvalid,
	} = props;

	const classNameRoot = classBuilder( 'form', className );

	return (
		<form
			className={ classNameRoot }
			action={ action }
			onSubmit={ onSubmit }
			onInvalid={ onInvalid }
		>
			{ children }
		</form>
	);
};

export default Form;

export const FormTextField: TFormTextFieldComponent = ( props ) => {
	const {
		className,
		children,
	} = props;

	const classNameRoot = 'form-text-field';
	const classNames = { root: classBuilder( classNameRoot, className ) };

	return (
		<div className={ classNames.root }>
			{ children }
		</div>
	);
}

export const FormSubmit: TFormSubmitComponent = ( props ) => {
	const {
		className,
		children,
	} = props;

	const classNameRoot = 'form-submit';
	const classNames = { root: classBuilder( classNameRoot, className ) };

	return (
		<div className={ classNames.root }>
			{ children }
		</div>
	);
}
