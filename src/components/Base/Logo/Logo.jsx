import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import BaseImage from '../Image/Image.jsx';

import './Logo.scss';

class BaseLogo extends React.Component {
	render() {
		const {
			image,
			title,
			alt,
		} = this.props;

		return (
			<div className={ classnames('base-logo') }>
				<BaseImage className={ classnames('base-logo__image') } image={ image } title={ title } alt={ alt } />
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
