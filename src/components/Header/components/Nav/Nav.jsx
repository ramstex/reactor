import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import BaseLink from '../../../Base/Link/Link.jsx';
import { Row, Col } from '../../../Grid/Grid.jsx';

import './Nav.scss';

class LocalNav extends React.Component {
	//	Классы
	classNameRoot() {
		const { className } = this.props;
		return classnames('header-nav', className);
	}

	render() {
		return (
			<Row className={this.classNameRoot()} tag={'ul'}>
				<Col tag={'li'}>
					<BaseLink href={'/'}>Главная</BaseLink>
				</Col>

				<Col tag={'li'}>
					<BaseLink href={'/ui-kit'}>Ui-Kit</BaseLink>
				</Col>
			</Row>
		);
	}
}

LocalNav.propTypes = {
	className: PropTypes.string,
};

export default LocalNav;
