import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

class BaseImage extends React.Component {
	render() {
		const {
			image,
			alt,
			title,
			className,
		} = this.props;

		if (typeof image === 'string') {
			return (
				<img className={ classnames('base-image', className) } src={ image } alt={ alt } title={ title } />
			);
		}

		const Image = image;

		return (
			<Image className={ classnames('base-image', className) } />
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
