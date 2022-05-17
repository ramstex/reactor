import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import MarkupSection from '../../../../components/Markup/Section/Section.jsx';
import { Row, Col } from '../../../../components/Grid/Grid.jsx';
import UiSelect from '../../../../components/Ui/Select/Select.jsx';
import LocalNav from '../../components/Nav/Nav.jsx';

import './Select.scss';

class PageUiKitSelect extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	//	Классы
	classNameRoot() {
		const { className } = this.props;
		return classnames('page page-ui-kit-select', className);
	}

	render() {
		return (
			<div className={this.classNameRoot()}>
				<MarkupSection title={'Ui Kit - Inputs'}>
					<LocalNav />

					<UiSelect>Caption</UiSelect>
				</MarkupSection>
			</div>
		);
	}
}

PageUiKitSelect.propTypes = {
	className: PropTypes.string,
};

export default PageUiKitSelect;
