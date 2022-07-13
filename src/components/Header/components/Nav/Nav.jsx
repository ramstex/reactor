import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import BaseLink from '../../../Base/Link/Link.jsx';
import { GridRow, GridCol } from '../../../Grid/Grid.jsx';

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
					<BaseLink href={ '/ui-kit' }>Ui-Kit</BaseLink>
				</GridCol>
			</GridRow>
		);
	}
}

LocalNav.propTypes = { className: PropTypes.string };

export default LocalNav;
