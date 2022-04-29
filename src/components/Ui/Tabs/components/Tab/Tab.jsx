import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { TabType } from '../../helpers/types.js';

import BaseLink from '../../../../Base/Link/Link.jsx';

import './Tab.scss';

class LocalTab extends React.Component {
	//	Классы
	classNameRoot() {
		const { className, current, disabled } = this.props;

		return classnames(['ui-tabs-tab', className, { _current: current }, { _disabled: disabled }]);
	}

	render() {
		const { href, title, target, onClick } = this.props;

		return (
			<React.Fragment>
				{!!href ? (
					<BaseLink className={this.classNameRoot()} href={href} target={target} onClick={onClick}>
						{title}
					</BaseLink>
				) : (
					<div className={this.classNameRoot()} onClick={onClick}>
						{title}
					</div>
				)}
			</React.Fragment>
		);
	}
}

LocalTab.propTypes = {
	...TabType,
	className: PropTypes.string,
	current: PropTypes.bool,
};

export default LocalTab;
