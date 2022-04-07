import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

class BaseImage extends React.Component {
	//	Классы
	classNameRoot() {
		const { className } = this.props;

		return classnames('base-image', className);
	}

	render() {
		const {
			image,
			alt,
			title,
		} = this.props;

		if (typeof image === 'string') {
			return (
				<img className={ this.classNameRoot() } src={ image } alt={ alt } title={ title } />
			);
		}

		const Image = image;

		return (
			<Image className={ this.classNameRoot() } />
		);
	}
}

BaseImage.propTypes = {
	className: PropTypes.string,
	image: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.func,
	]),
	alt: PropTypes.string,
	title: PropTypes.string,
};

export default BaseImage;
