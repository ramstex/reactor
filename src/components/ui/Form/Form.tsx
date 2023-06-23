import classBuilder from '../../../plugins/classBuilder';

import './style.scss';

import type { TFormComponent } from './types';

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
