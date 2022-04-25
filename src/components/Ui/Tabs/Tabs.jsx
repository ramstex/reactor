// ToDo: Методы nextTab/prevTab/toTab

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

		const currentId = current || tabs[ 0 ].id;
		const currentTab = this.getCurrentTab( currentId ) || tabs[ 0 ];

		this.state = {
			currentId,
			currentTab,
		};

		this.getCurrentTab = this.getCurrentTab.bind( this );
		this.setCurrent = this.setCurrent.bind( this );
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

	/**
	 * getCurrentTab - получение текущей вкладки по ID
	 * @param id { Number | String } - ID вкладки
	 * @return { Object } - объект с данными вкладки
	 */
	getCurrentTab( id ) {
		const { tabs } = this.props;

		return tabs.find( ( tab ) => {
			return tab.id === id;
		} );
	}

	/**
	 * setCurrent - установка текущей вкладки по ID.
	 * @param id { Number | String } - ID вкладки
	 */
	setCurrent( id ) {
		this.setState( {
			currentId: id,
			currentTab: this.getCurrentTab( id ),
		} );
	}

	/**
	 * isTabCurrent проверяет, является ли вкладка с переданным ID текущей.
	 * @param id { Number | String } - ID вкладки, которую надо проверить
	 * @return { boolean } - вкладка текущая или нет
	 */
	isTabCurrent( id ) {
		const { currentId } = this.state;
		return currentId === id;
	}

	/**
	 * isTabDisabled проверяет, отключена ли вкладка с переданным ID.
	 * @param id { Number | String } - ID вкладки, которую надо проверить
	 * @return {boolean}
	 */
	isTabDisabled( id ) {
		const tab = this.getCurrentTab( id );

		return !!tab && (
			!!tab.disabled || (
				!tab.content &&
				!tab.href &&
				!tab.onClick
			)
		);
	}

	/**
	 * onTabClick - обработчик клика по вкладке с переданным ID.
	 * Если вкладка не отключена, делает её текущей и выполняет её обработчик клика, если он есть.
	 * @param id { Number | String } - ID вкладки
	 * @return { (function(*): void) | undefined }
	 */
	onTabClick( id ) {
		const tab = this.getCurrentTab( id );

		if ( !this.isTabDisabled( id ) ) {
			return ( event ) => {
				if ( tab.content ) {
					this.setCurrent( id );
				}

				if ( isFunction( tab.onClick ) ) {
					tab.onClick( event, tab );
				}
			}
		}

		return undefined;
	}

	componentDidUpdate( prevProps, prevState ) {
		const { current, onChange } = this.props;
		const { currentId, currentTab } = this.state;

		// Если изменился props.current, меняем текущую вкладку в state
		if (
			prevProps.current !== current &&
			currentId !== current
		) {
			this.setCurrent( current );
		}

		// Если изменился state.currentId
		if (
			prevState.currentId !== currentId &&
			currentId !== current
		) {
			// Если для старой вкладки задан props.onLeave - выполняем его
			if ( isFunction( prevState.currentTab.onLeave ) ) {
				prevState.currentTab.onLeave( {
					currentId,
					currentTab,
					prevId: prevState.currentId,
					prevTab: prevState.currentTab,
				} );
			}

			// Если для новой вкладки задан props.onEnter - выполняем его
			if ( isFunction( currentTab.onEnter ) ) {
				currentTab.onEnter( {
					currentId,
					currentTab,
					prevId: prevState.currentId,
					prevTab: prevState.currentTab,
				} );
			}

			// Если для компонента задан props.onChange - выполняем его
			if ( isFunction( onChange ) ) {
				onChange( {
					currentId,
					currentTab,
					prevId: prevState.currentId,
					prevTab: prevState.currentTab,
				} );
			}
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
							disabled={ this.isTabDisabled( tab.id ) }
							current={ this.isTabCurrent( tab.id ) }
							onClick={ this.onTabClick( tab.id ) }
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

	tabs: PropTypes.arrayOf( PropTypes.shape( TabType ) ),

	current: PropTypes.oneOfType( [
		PropTypes.number,
		PropTypes.string,
	] ),

	onChange: PropTypes.func,
};

export default UiTabs;
