import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './Icon.scss';

import Check from '../../../assets/icons/check.svg';

class BaseIcon extends React.Component {
	//	Классы
	classNameRoot() {
		const { className } = this.props;
		return classnames('base-icon', className);
	}

	getIcon() {
		switch (this.props.icon) {
			case 'check':
				return Check;
		}
	}

	render() {
		const Svg = this.getIcon();

		return <Svg className={this.classNameRoot()} />;
	}
}

BaseIcon.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	icon: PropTypes.oneOf(['check']),
};

export default BaseIcon;
