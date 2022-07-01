import React, { useState, useEffect, useRef } from 'react';
import { Transition } from 'react-transition-group';

import './Dropdown.scss';

const BaseDropdown = ( props = { opened: false } ) => {
	const root = useRef();
	const content = useRef();

	const onEntering = () => {
		console.log( content.current.clientHeight );
	};

	const onEntered = () => {

	};

	const onExiting = () => {

	};

	const onExited = () => {

	};

	const transitions = {
		entering: {
			height: 0,
			display: 'block',
		},
		entered: {
			height: 'auto',
			display: 'block',
		},
		exiting: {
			height: 'auto',
			display: 'block',
		},
		exited: {
			height: 0,
			display: 'none',
		},
	};

	return (
		<React.Fragment>
			<Transition
				in={ props.opened }
				timeout={ 500 }
				onEntering={ onEntering }
				onEntered={ onEntered }
				onExiting={ onExiting }
				onExited={ onExited }
			>
				{ ( state ) => {
					return (
						<div className="base-dropdown"
							 style={ { ...transitions[ state ] } }
						>
							<div className="base-dropdown__content"
								 ref={ content }>
								{ props.children }
							</div>
						</div>
					);
				} }
			</Transition>
		</React.Fragment>
	);
};

export default BaseDropdown;
