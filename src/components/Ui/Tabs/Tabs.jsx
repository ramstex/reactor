// ToDo: tab with onClick
// ToDo: tab with href
// ToDo: create the separate component for a single tab

/**
 * Behaviour cases:
 * 1. ( -href, -onClick, -content ) - disabled tab
 * 2. ( +href, -onClick, -content ) - standard following a link via BaseLink component
 * 3. ( -href, +onClick, -content ) - executing an onClick callback
 * 4. ( -href, -onClick, +content ) - switching to selected tab
 * 5. ( +href, +onClick, -content ) - both 2 and 3 cases
 * 6. ( +href, -onClick, +content ) - content has a priority, ignoring the href
 * 7. ( -href, +onClick, +content ) - both 3 and 4 cases
 * 8. ( +href, +onClick, +content ) - both 6 and 7 cases
 */


import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

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

	classNameTab( tab ) {
		const { currentId } = this.state;

		return classnames( 'ui-tabs__tab', {
			_current: currentId === tab.id,
			_disabled: !tab.content,
		} );
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

	onTabClick( tab ) {
		return () => {
			if ( !tab.disabled ) {
				this.setCurrentId( tab.id );
			}
		};
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
						<div
							key={ tab.id }
							className={ this.classNameTab( tab ) }
							onClick={ this.onTabClick( tab ) }
						>
							{ tab.title }
						</div>
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
	children: PropTypes.node,
	updateCurrent: PropTypes.func,

	tabs: PropTypes.arrayOf( PropTypes.shape( {
		id: PropTypes.oneOfType( [
			PropTypes.number,
			PropTypes.string,
		] ).isRequired,

		title: PropTypes.oneOfType( [
			PropTypes.number,
			PropTypes.string,
			PropTypes.node,
		] ),

		content: PropTypes.node,
	} ) ),

	current: PropTypes.oneOfType( [
		PropTypes.number,
		PropTypes.string,
	] ),
};

export default UiTabs;
