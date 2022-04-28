import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { content } from './helpers/content.js';

import MarkupSection from '../../../../components/Markup/Section/Section.jsx';
import UiTabs from '../../../../components/Ui/Tabs/Tabs.jsx';
import UiButton from '../../../../components/Ui/Button/Button.jsx';
import LocalNav from '../../components/Nav/Nav.jsx';

class PageUiKitTabs extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			tabs: [...content.tabs],
			current: 1,
		};

		this.onUpdateCurrent = this.onUpdateCurrent.bind(this);
		this.onIncreaseClick = this.onIncreaseClick.bind(this);
		this.increaseCurrent = this.increaseCurrent.bind(this);
		this.getTabById = this.getTabById.bind(this);
		this.isTabDisabled = this.isTabDisabled.bind(this);
	}

	//	Классы
	classNameRoot() {
		const { className } = this.props;
		return classnames('page-ui-kit-tabs', className);
	}

	onUpdateCurrent(current) {
		console.log(current);
		this.setState({
			current: current,
		});
	}

	getTabById(id) {
		const { tabs } = this.state;

		return tabs.find((tab) => {
			return tab.id === id;
		});
	}

	isTabDisabled(id) {
		const tab = this.getTabById(id);

		return !!tab && (!!tab.disabled || (!tab.content && !tab.href && !tab.onClick));
	}

	increaseCurrent() {
		const { tabs, current } = this.state;
		let newCurrent = current;

		const getNextId = () => {
			let i = tabs.findIndex((tab) => {
				return tab.id === newCurrent;
			});

			if (i >= tabs.length - 1) {
				i = 0;
			} else {
				i += 1;
			}

			return tabs[i].id;
		};

		while (newCurrent === current || this.isTabDisabled(newCurrent)) {
			newCurrent = getNextId(newCurrent);
		}

		this.setState({
			current: newCurrent,
		});
	}

	onIncreaseClick() {
		this.increaseCurrent();
	}

	render() {
		const { current, tabs } = this.state;

		return (
			<div className={this.classNameRoot()}>
				<MarkupSection title={'Ui Kit - Tabs'}>
					<LocalNav />

					<UiButton onClick={this.onIncreaseClick}> Следующая вкладка </UiButton>
					<p className={'_mt_2 _mb_4'}> ID текущей вкладки: {current} </p>

					<UiTabs tabs={tabs} current={current} onChange={this.onUpdateCurrent} />
				</MarkupSection>
			</div>
		);
	}
}

PageUiKitTabs.propTypes = {
	className: PropTypes.string,
};

export default PageUiKitTabs;
