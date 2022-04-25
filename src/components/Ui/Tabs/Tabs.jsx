import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { isFunction } from '../../../plugins/helpers.js';
import { TabType } from './helpers/types.js';

import LocalTab from './components/Tab/Tab.jsx';

import './Tabs.scss';

class UiTabs extends React.Component {
	constructor( props ) {
		super( props );

		const { current, tabs } = this.props;

		this.state = {
			currentId: current || tabs[ 0 ].id,
			currentTab: this.getCurrentTab() || tabs[ 0 ],
		};

		this.getCurrentTab = this.getCurrentTab.bind( this );
		this.setCurrentTab = this.setCurrentTab.bind( this );
		this.setCurrentId = this.setCurrentId.bind( this );
	}

	//	Классы
	classNameRoot() {
		const { className } = this.props;
		return classnames( 'ui-tabs', className );
	}

	classNameHeader() {
		return classnames( 'ui-tabs__header' );
	}

	classNameBody() {
		return classnames( 'ui-tabs__body' );
	}

	getCurrentTab() {
		const { tabs, current } = this.props;

		return tabs.find( ( tab ) => {
			return tab.id === current;
		} );
	}

	setCurrentTab() {
		this.setState( {
			currentTab: this.getCurrentTab(),
		} );
	}

	setCurrentId( value ) {
		this.setState( {
			currentId: value,
		} );
	}

	isTabCurrent( tab ) {
		const { currentId } = this.state;
		return currentId === tab.id;
	}

	isTabDisabled( tab ) {
		return !!tab.disabled || (
			!tab.content &&
			!tab.href &&
			!tab.onClick
		);
	}

	onTabClick( tab ) {
		if ( !this.isTabDisabled( tab ) ) {
			return ( event ) => {
				this.setCurrentTab( tab );
				this.setCurrentId( tab.id );

				if ( isFunction( tab.onClick ) ) {
					tab.onClick( event, tab );
				}
			}
		}

		return undefined;
	}

	componentDidUpdate( prevProps, prevState ) {
		const { current, updateCurrent } = this.props;
		const { currentId } = this.state;

		if ( prevProps.current !== current ) {
			this.setCurrentId( current );
			this.setCurrentTab();
		}

		if ( prevState.currentId !== currentId && !!updateCurrent ) {
			updateCurrent( currentId );
		}
	}

	render() {
		const { tabs } = this.props;
		const { currentId } = this.state;

		return (
			<div className={ this.classNameRoot() }>
				<div className={ this.classNameHeader() }>
					{ tabs.map( ( tab ) => (
						<LocalTab
							key={ tab.id }
							{ ...tab }
							disabled={ this.isTabDisabled( tab ) }
							onClick={ this.onTabClick( tab ) }
							current={ this.isTabCurrent( tab ) }
						/>
					) ) }
				</div>

				<div className={ this.classNameBody() }>
					{ tabs.map( ( item ) => (
						item.id === currentId && item.content
					) ) }
				</div>
			</div>
		);
	}
}

UiTabs.propTypes = {
	className: PropTypes.string,
	updateCurrent: PropTypes.func,

	tabs: PropTypes.arrayOf( PropTypes.shape( TabType ) ),

	current: PropTypes.oneOfType( [
		PropTypes.number,
		PropTypes.string,
	] ),
};

export default UiTabs;
