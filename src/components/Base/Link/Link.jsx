import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import { isAbsoluteUrl } from '../../../plugins/helpers';

class BaseLink extends React.Component {
	//	Классы
	classNameRoot() {
		const { className } = this.props;
		return classnames( 'base-link', className );
	}

	isExternal() {
		const { href } = this.props;
		return !!href && isAbsoluteUrl( href );
	}

	isInternal() {
		const { href } = this.props;
		return !!href && !isAbsoluteUrl( href );
	}

	render() {
		const {
			className,
			children,
			href,
			...attrs
		} = this.props;

		if ( this.isInternal() ) {
			return (
				<Link className={ this.classNameRoot() } to={ href } { ...attrs }>
					{ children }
				</Link>
			);
		}

		if ( this.isExternal() ) {
			return (
				<a className={ this.classNameRoot() } href={ href } { ...attrs }>
					{ children }
				</a>
			);
		}

		return (
			<div { ...attrs }>
				{ children }
			</div>
		);
	}
}

BaseLink.propTypes = {
	href: PropTypes.string,
	className: PropTypes.string,
	children: PropTypes.node,
};

export default BaseLink;
