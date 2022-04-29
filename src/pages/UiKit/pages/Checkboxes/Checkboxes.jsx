import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import MarkupSection from '../../../../components/Markup/Section/Section.jsx';
import { Row, Col } from '../../../../components/Grid/Grid.jsx';
import UiCheckbox from '../../../../components/Ui/Checkbox/Checkbox.jsx';
import LocalNav from '../../components/Nav/Nav.jsx';

import './Checkboxes.scss';

class PageUiKitCheckboxes extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};

		this.onChange = this.onChange.bind(this);
	}

	//	Классы
	classNameRoot() {
		const { className } = this.props;
		return classnames('page-ui-kit-checkboxes', className);
	}

	onChange(key) {
		return (event) => {
			this.setState({
				[key]: event.target.value,
			});
		};
	}

	render() {
		return (
			<div className={this.classNameRoot()}>
				<MarkupSection title={'Ui Kit - Checkboxes'}>
					<LocalNav />
					<UiCheckbox />
				</MarkupSection>
			</div>
		);
	}
}

PageUiKitCheckboxes.propTypes = {
	className: PropTypes.string,
};

export default PageUiKitCheckboxes;
