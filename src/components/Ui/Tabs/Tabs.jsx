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

	classNameTab( current ) {
		const { currentId } = this.state;

		return classnames( 'ui-tabs__tab', {
			_current: currentId === current,
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
			this.setCurrentId( tab.id );
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
		const { tabs, contents } = this.props;
		const { currentId } = this.state;

		return (
			<div className={ this.classNameRoot() }>
				<div className={ this.classNameHeader() }>
					{ tabs.map( ( tab ) => (
						<div
							key={ tab.id }
							className={ this.classNameTab( tab.id ) }
							onClick={ this.onTabClick( tab ) }
						>
							<p> { tab.title } </p>
						</div>
					) ) }
				</div>

				<div className={ this.classNameBody() }>
					{ contents.map( ( item ) => {
						console.log( item );
						return ( item.key === currentId && item )
					} ) }
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
		] ),
	} ) ),

	current: PropTypes.oneOfType( [
		PropTypes.number,
		PropTypes.string,
	] ),

	contents: PropTypes.arrayOf( PropTypes.node ),
};

export default UiTabs;
