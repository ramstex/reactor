import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import BaseLink from '../../../../Base/Link/Link.jsx';

import './Tab.scss';

class LocalTab extends React.Component {
	//	Классы
	classNameRoot() {
		const { className } = this.props;

		return classnames( 'ui-tabs-tab', className );
	}

	onClick( tab ) {
		const { id, onClick } = this.props;

		return () => {
			if ( tab.onClick ) {
				tab.onClick();
			}

			this.setCurrentId( id );
		};
	}

	render() {
		const { href, title } = this.props;

		if ( href ) {
			return (
				<BaseLink
					className={ this.classNameRoot() }
					href={ href }
					onClick={ this.onClick }
				>
					{ title }
				</BaseLink>
			);
		}

		return (
			<div
				className={ this.classNameTab() }
				onClick={ this.onTabClick() }
			>
				{ title }
			</div>
		);
	}
}

LocalTab.propTypes = {
	className: PropTypes.string,
	id: PropTypes.oneOfType( [
		PropTypes.number,
		PropTypes.string,
	] ),

	title: PropTypes.oneOfType( [
		PropTypes.number,
		PropTypes.string,
		PropTypes.node,
	] ),

	content: PropTypes.node,
	onClick: PropTypes.func,
	href: PropTypes.func,
};

export default LocalTab;
