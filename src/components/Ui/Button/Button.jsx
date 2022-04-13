import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import BaseLink from '../../Base/Link/Link.jsx';

import './Button.scss';

class UiButton extends React.Component {
	//	Классы
	classNameRoot() {
		const { className, wide, ghost } = this.props;
		return classnames(
			'ui-button',
			className,
			{ _wide: wide },
			{ _ghost: ghost }
		);
	}

	render() {
		const { children, href, type } = this.props;

		if ( href ) {
			return (
				<BaseLink className={ this.classNameRoot() } href={ href }>
					{ children }
				</BaseLink>
			);
		}

		return (
			<button className={ this.classNameRoot() } type={ type }>
				{ children }
			</button>
		);
	}
}

UiButton.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node,
	href: PropTypes.string,
	disabled: PropTypes.bool,
	ghost: PropTypes.bool,
	wide: PropTypes.bool,

	type: PropTypes.oneOf( [
		'button',
		'submit',
		'reset',
	] ),

	size: PropTypes.oneOf( [
		'lg',
		'md',
		'sm',
	] ),
};

UiButton.defaultProps = {
	type: 'button',
	size: 'md',
};

export default UiButton;
