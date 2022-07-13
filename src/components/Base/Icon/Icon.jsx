import React from 'react';
import classnames from 'classnames';

import './Icon.scss';

import Helper from './helper.jsx';

const BaseIcon = ( props ) => {
	const {
		className,
		icon,
		onClick,
	} = props;

	const classNameRoot = classnames( 'base-icon', className );

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
