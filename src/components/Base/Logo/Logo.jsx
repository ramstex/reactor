import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import BaseImage from '../Image/Image.jsx';

import './Logo.scss';

class BaseLogo extends React.Component {
	//	Классы
	classNameRoot() {
		return classnames('base-logo');
	}

	classNameImage() {
		return classnames('base-logo__image');
	}

	render() {
		const {
			image,
			title,
			alt,
		} = this.props;

		return (
			<div className={ this.classNameRoot() }>
				<BaseImage className={ this.classNameImage() } image={ image } title={ title } alt={ alt } />
			</div>
		);
	}
}

BaseLogo.propTypes = {
	image: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.func,
	]),
	title: PropTypes.string,
	alt: PropTypes.string,
};

export default BaseLogo;
