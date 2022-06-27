import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import { isAbsoluteUrl } from '../../../plugins/helpers';

class BaseLink extends React.Component {
	//	Классы
	classNameRoot() {
		const {
			className,
			href,
		} = this.props;

		return classnames(
			'base-link',
			{ '_href': !!href },
			{ '_no-href': !href },
			className
		);
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
			className, children, tag: TagName, href, ...attrs
		} = this.props;

		if ( this.isInternal() ) {
			return (
				<Link className={ this.classNameRoot() } to={ href } { ...attrs }>
					{children}
				</Link>
			);
		}

		if ( this.isExternal() ) {
			return (
				<a className={ this.classNameRoot() } href={ href } { ...attrs }>
					{children}
				</a>
			);
		}

		return <TagName { ...attrs }>{children}</TagName>;
	}
}

BaseLink.propTypes = {
	href: PropTypes.string,
	tag: PropTypes.string,
	className: PropTypes.string,
	children: PropTypes.node,
};

BaseLink.defaultProps = { tag: 'span' };

export default BaseLink;
