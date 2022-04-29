import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { content } from './helpers/content.js';

import MarkupSection from '../../../../components/Markup/Section/Section.jsx';
import UiTabs from '../../../../components/Ui/Tabs/Tabs.jsx';
import LocalNav from '../../components/Nav/Nav.jsx';

class PageUiKitTabs extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			tabs: [...content.tabs],
			current: 1,
		};

		this.onUpdateCurrent = this.onUpdateCurrent.bind(this);
	}

	//	Классы
	classNameRoot() {
		const { className } = this.props;
		return classnames('page-ui-kit-tabs', className);
	}

	onUpdateCurrent(current) {
		this.setState({
			current: current,
		});
	}

	render() {
		const { current, tabs } = this.state;

		return (
			<div className={this.classNameRoot()}>
				<MarkupSection title={'Ui Kit - Tabs'}>
					<LocalNav />

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
