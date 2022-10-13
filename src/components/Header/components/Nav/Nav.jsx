import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import BaseLink from '../../../Base/Link/Link.jsx';
import { GridRow, GridCol } from '../../../Grid/Grid.jsx';

import _ROUTES from '../../../../../config/routes.js';

import './Nav.scss';

class LocalNav extends React.Component {
	//	Классы
	classNameRoot() {
		const { className } = this.props;

		return classnames( 'header-nav', className );
	}

	render() {
		return (
			<GridRow className={ this.classNameRoot() }
					 tag={ 'ul' }>
				<GridCol tag={ 'li' }>
					<BaseLink href={ '/' }>Главная</BaseLink>
				</GridCol>

				<GridCol tag={ 'li' }>
					<BaseLink href={ _ROUTES.uiKit.root }>Ui-Kit</BaseLink>
				</GridCol>
			</GridRow>
		);
	}
}

LocalNav.propTypes = { className: PropTypes.string };

export default LocalNav;
