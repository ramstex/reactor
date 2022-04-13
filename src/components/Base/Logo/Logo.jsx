import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import BaseImage from '../Image/Image.jsx';
import BaseLink from '../Link/Link.jsx';

import './Logo.scss';

class BaseLogo extends React.Component {
	//	Классы
	classNameRoot() {
		const { className } = this.props;
		return classnames( 'base-logo', className );
	}

	classNameImage() {
		return classnames( 'base-logo__image' );
	}

	render() {
		const {
			className,
			href,
			image,
			title,
			alt,
			...attrs
		} = this.props;

		return (
			<BaseLink className={ this.classNameRoot() } href={ href } { ...attrs }>
				<BaseImage className={ this.classNameImage() } image={ image } title={ title } alt={ alt } />
			</BaseLink>
		);
	}
}

BaseLogo.propTypes = {
	className: PropTypes.string,
	href: PropTypes.string,
	image: PropTypes.oneOfType( [
		PropTypes.string,
		PropTypes.func,
	] ),
	title: PropTypes.string,
	alt: PropTypes.string,
};

export default BaseLogo;
