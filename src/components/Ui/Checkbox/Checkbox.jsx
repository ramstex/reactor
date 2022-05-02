import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { isFunction } from 'lodash';

import BaseIcon from '../../Base/Icon/Icon.jsx';

import './Checkbox.scss';
import omit from 'lodash/omit.js';

class UiCheckbox extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			checked: this.props.checked || false,
		};

		this.setChecked = this.setChecked.bind(this);
		this.onCheck = this.onCheck.bind(this);
	}

	//	Классы
	classNameRoot() {
		const { className, error, success, required, disabled } = this.props;
		const { checked } = this.state;

		return classnames(
			'ui-checkbox',
			className,
			{ _checked: checked },
			{ _required: required },
			{ _disabled: disabled },
			{ _error: error },
			{ _success: success }
		);
	}

	setChecked(checked) {
		this.setState({
			checked: checked,
		});
	}

	onCheck(event) {
		this.setChecked(event.target.checked);

		if (isFunction(this.props.onChange)) {
			this.props.onChange(event);
		}
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		// Изменилось props.value
		if (this.props.checked !== this.state.checked && this.props.checked !== prevProps.checked) {
			this.setChecked(this.props.checked);
		}
	}

	render() {
		const { message, children, required } = this.props;
		const { checked } = this.state;

		const attrs = omit(this.props, ['className', 'children', 'success', 'error', 'message', 'error', 'onChange']);

		return (
			<label className={this.classNameRoot()}>
				<div className={'ui-checkbox__header'}>
					<input
						{...attrs}
						className={'ui-checkbox__input'}
						type={'checkbox'}
						checked={checked}
						onChange={this.onCheck}
					/>

					<div className={'ui-checkbox__box'}>
						{checked && <BaseIcon className={'ui-checkbox__icon'} icon={'check'} />}
					</div>
				</div>

				{(!!children || !!message || required) && (
					<div className={'ui-checkbox__text'}>
						{(!!children || required) && <p className={'ui-checkbox__caption _sm'}>{children}</p>}
						{!!message && <p className={'ui-checkbox__message'}>{message}</p>}
					</div>
				)}
			</label>
		);
	}
}

UiCheckbox.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	checked: PropTypes.bool,
	required: PropTypes.bool,
	disabled: PropTypes.bool,
	error: PropTypes.bool,
	success: PropTypes.bool,
	message: PropTypes.string,
	onChange: PropTypes.func,
};

export default UiCheckbox;
