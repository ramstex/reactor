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
		this.state = {
			v1: false,
			v2: false,
			v3: true,
			v4: true,
			v5: false,
			v6: false,
			v7: false,
			v8: false,
		};

		this.onChange = this.onChange.bind(this);
	}

	//	Классы
	classNameRoot() {
		const { className } = this.props;
		return classnames('page page-ui-kit-checkboxes', className);
	}

	onChange(key) {
		return (event) => {
			this.setState({
				[key]: event.target.checked,
			});
		};
	}

	render() {
		return (
			<div className={this.classNameRoot()}>
				<MarkupSection title={'Ui Kit - Checkboxes'}>
					<LocalNav />

					<Row>
						<Col col={4}>
							<UiCheckbox className={'_mb_2'} checked={this.state.v1} onChange={this.onChange('v1')}>
								Чекбокс
							</UiCheckbox>

							<UiCheckbox className={'_mb_2'} checked={this.state.v3} onChange={this.onChange('v3')}>
								Отмеченный чекбокс
							</UiCheckbox>

							<UiCheckbox
								className={'_mb_2'}
								checked={this.state.v5}
								onChange={this.onChange('v5')}
								required
							>
								Обязательный чекбокс
							</UiCheckbox>

							<UiCheckbox
								className={'_mb_2'}
								checked={this.state.v7}
								onChange={this.onChange('v7')}
								success
								message={'Это успех!'}
							>
								Успешный чекбокс
							</UiCheckbox>
						</Col>

						<Col col={4}>
							<UiCheckbox
								className={'_mb_2'}
								disabled
								checked={this.state.v2}
								onChange={this.onChange('v2')}
							>
								Выключенный чекбокс
							</UiCheckbox>

							<UiCheckbox
								className={'_mb_2'}
								disabled
								checked={this.state.v4}
								onChange={this.onChange('v4')}
							>
								Отмеченный выключенный чекбокс
							</UiCheckbox>

							<UiCheckbox
								className={'_mb_2'}
								checked={this.state.v6}
								onChange={this.onChange('v6')}
								required
								disabled
							>
								Обязательный выключенный чекбокс
							</UiCheckbox>

							<UiCheckbox
								className={'_mb_2'}
								checked={this.state.v8}
								onChange={this.onChange('v8')}
								error
								message={'Произошла ошибка'}
							>
								Ошибочный чекбокс
							</UiCheckbox>
						</Col>
					</Row>
				</MarkupSection>
			</div>
		);
	}
}

PageUiKitCheckboxes.propTypes = {
	className: PropTypes.string,
};

export default PageUiKitCheckboxes;
