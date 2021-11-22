import React from 'react';

import style from './Button.module.scss';

const Button = ( props ) => {
	const onClick = ( event ) => {
		props.onClick( event );
	};

	return (
		<div className={ style.button + ' ' + style[props.status] }>
			<div className={ style.fill } />
			<button
				className={ style.body }
				disabled={ props.disabled }
				onClick={ onClick }
			>{ props.children }</button>
		</div>
	)
};

export default Button;
