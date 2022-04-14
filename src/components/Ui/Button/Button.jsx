import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import omit from 'lodash/omit';

import BaseLink from '../../Base/Link/Link.jsx';

import './Button.scss';

class UiButton extends React.Component {
	//	Классы
	classNameRoot() {
		const { className, theme, size, wide, ghost } = this.props;
		return classnames(
			'ui-button',
			className,
			`_theme_${theme}`,
			`_size_${size}`,
			{ _wide: wide },
			{ _ghost: ghost }
		);
	}

	render() {
		const { children, href, type } = this.props;

		const listeners = omit( this.props, [
			'className',
			'children',
			'href',
			'disabled',
			'ghost',
			'wide',
		] );

		if ( href ) {
			return (
				<BaseLink className={ this.classNameRoot() } href={ href } { ...listeners }>
					{ children }
				</BaseLink>
			);
		}

		return (
			<button className={ this.classNameRoot() } type={ type } { ...listeners }>
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

	theme: PropTypes.oneOf( ['primary', 'secondary', 'success', 'warning', 'danger', 'info'] ),

	type: PropTypes.oneOf( ['button', 'submit', 'reset'] ),

	size: PropTypes.oneOf( ['lg', 'md', 'sm'] ),
};

UiButton.defaultProps = {
	type: 'button',
	size: 'md',
	theme: 'primary',
};

export default UiButton;
