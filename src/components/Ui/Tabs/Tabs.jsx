// ToDo: Методы nextTab/prevTab/toTab

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { isFunction } from '../../../plugins/helpers.js';
import { TabType } from './helpers/types.js';

import LocalTab from './components/Tab/Tab.jsx';

import './Tabs.scss';

class UiTabs extends React.Component {
	constructor(props) {
		super(props);

		const { tabs } = this.props;

		this.state = {
			current: tabs[0].id,
		};

		this.getTab = this.getTab.bind(this);
		this.setCurrent = this.setCurrent.bind(this);
		this.isTabCurrent = this.isTabCurrent.bind(this);
		this.isTabDisabled = this.isTabDisabled.bind(this);
		this.onTabClick = this.onTabClick.bind(this);
	}

	//	Классы
	classNameRoot() {
		const { className } = this.props;
		return classnames('ui-tabs', className);
	}

	classNameHeader() {
		return classnames('ui-tabs__header');
	}

	classNameBody() {
		return classnames('ui-tabs__body');
	}

	/**
	 * getTab - получение вкладки по ID
	 * @param id { Number | String } - ID вкладки
	 * @return { Object } - объект с данными вкладки
	 */
	getTab(id) {
		const { tabs } = this.props;
		return tabs.find((tab) => {
			return tab.id === id;
		});
	}

	/**
	 * setCurrent - установка текущей вкладки по ID.
	 * @param id { Number | String } - ID вкладки
	 */
	setCurrent(id) {
		this.setState({
			current: id,
		});
	}

	/**
	 * isTabCurrent проверяет, является ли вкладка с переданным ID текущей.
	 * @param id { Number | String } - ID вкладки, которую надо проверить
	 * @return { boolean } - вкладка текущая или нет
	 */
	isTabCurrent(id) {
		const { current } = this.state;
		return current === id;
	}

	/**
	 * isTabDisabled проверяет, отключена ли вкладка с переданным ID.
	 * @param id { Number | String } - ID вкладки, которую надо проверить
	 * @return {boolean}
	 */
	isTabDisabled(id) {
		const tab = this.getTab(id);
		return !!tab && (!!tab.disabled || (!tab.content && !tab.href && !tab.onClick));
	}

	/**
	 * onTabClick - обработчик клика по вкладке с переданным ID.
	 * Если вкладка не отключена, делает её текущей и выполняет её обработчик клика, если он есть.
	 * @param id { Number | String } - ID вкладки
	 * @return { (function(*): void) | undefined }
	 */
	onTabClick(id) {
		const tab = this.getTab(id);

		if (!this.isTabDisabled(id)) {
			return (event) => {
				if (!!tab.content) {
					this.setCurrent(id);
				}

				if (isFunction(tab.onClick)) {
					tab.onClick(event, tab);
				}
			};
		}

		return undefined;
	}

	componentDidUpdate(prevProps, prevState) {
		const { onChange } = this.props;

		// Если изменился props.current, меняем текущую вкладку в state
		if (prevProps.current !== this.props.current && this.props.current !== this.state.current) {
			this.setCurrent(current);
		}

		// Если изменился state.currentId
		if (prevState.current !== this.state.current && this.props.current !== this.state.current) {
			// Если для старой вкладки задан onLeave - выполняем его
			if (isFunction(this.getTab(prevState.current).onLeave)) {
				this.getTab(prevState.current).onLeave();
			}

			// Если для новой вкладки задан onEnter - выполняем его
			if (isFunction(this.getTab(this.state.current).onEnter)) {
				this.getTab(this.state.current).onEnter();
			}

			// Если для компонента задан props.onChange - выполняем его
			if (isFunction(onChange)) {
				onChange(this.state.current);
			}
		}
	}

	render() {
		const { tabs } = this.props;
		const { current } = this.state;

		return (
			<div className={this.classNameRoot()}>
				<div className={this.classNameHeader()}>
					{tabs.map((tab) => {
						return (
							<LocalTab
								key={tab.id}
								{...tab}
								disabled={this.isTabDisabled(tab.id)}
								current={this.isTabCurrent(tab.id)}
								onClick={this.onTabClick(tab.id)}
							/>
						);
					})}
				</div>

				<div className={this.classNameBody()}>
					{tabs.map((item) => {
						return item.id === current && item.content;
					})}
				</div>
			</div>
		);
	}
}

UiTabs.propTypes = {
	className: PropTypes.string,
	tabs: PropTypes.arrayOf(PropTypes.shape(TabType)),
	current: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	onChange: PropTypes.func,
};

export default UiTabs;
