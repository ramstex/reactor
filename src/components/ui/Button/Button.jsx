import React from 'react';
import PropTypes from 'prop-types';
import Classnames from 'classnames';

import Statuses from '../../../plugins/constant';

import style from './Button.module.scss';

const Button = ( props ) => {
	const onClick = ( event ) => {
		props.onClick( event );
	};



	const RootClass = Classnames([
		style.button,
		style[props.status]
	]);

	return (
		<div className={ RootClass }>
			<div className={ style.fill } />
			<button
				className={ style.body }
				disabled={ props.disabled }
				onClick={ onClick }
			>{ props.children }</button>
		</div>
	)
};

Button.propTypes = {
	status: PropTypes.oneOf( Statuses ),
	disabled: PropTypes.bool,
	onClick: PropTypes.func,
};

export default Button;
