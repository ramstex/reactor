import React from 'react';
import classnames from 'classnames';

import './Icon.scss';

import Helper from './helper.jsx';

const BaseIcon = ( props ) => {
	const {
		className,
		icon,
		size = 'md',
		onClick,
	} = props;

	const classNameRoot = classnames(
		'base-icon',
		className,
		{ [`_size_${ size }`]: size !== 'md' }
	);

	const getIcon = () => {
		return Helper.getIconByName( icon );
	}

	const Svg = getIcon();

	return <Svg
		className={ classNameRoot }
		onClick={ onClick }
	/>;
}

export default BaseIcon;
