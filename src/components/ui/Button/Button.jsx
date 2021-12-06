import React from 'react';
import PropTypes from 'prop-types';
import Classnames from 'classnames';

import { ClassModifier, Statuses } from '../../../plugins/constant';

import style from './Button.module.scss';

const Button = ( props ) => {
	const statusClass = ClassModifier( `status${ ClassModifier( props.status ) }` );


	const RootClass = Classnames([
		style.button,
		style[ statusClass ],
		{ [ style[ ClassModifier( 'ghost' ) ] ]: props.ghost },
		{ [ style[ ClassModifier( 'full' ) ] ]: props.full },
	]);

	const onClick = ( event ) => {
		props.onClick( event );
	};

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

Button.defaultProps = {
	status: Statuses[0],
	ghost: false,
	full: false,
};

Button.propTypes = {
	status: PropTypes.oneOf( Statuses ),
	disabled: PropTypes.bool,
	ghost: PropTypes.bool,
	full: PropTypes.bool,
	onClick: PropTypes.func,
};

export default Button;
