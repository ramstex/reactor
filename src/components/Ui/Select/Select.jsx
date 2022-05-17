import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './Select.scss';

class UiSelect extends React.Component {
	//	Классы
	classNameRoot() {
		const { className, error, success, required, disabled, textarea } = this.props;
		return classnames(
			'ui-input',
			className,
			{ _required: required },
			{ _disabled: disabled },
			{ _error: error },
			{ _success: success }
		);
	}

	classNameCaption() {
		return classnames('ui-select__caption');
	}

	classNameMessage() {
		return classnames('ui-select__message');
	}

	render() {
		const { children, required, disabled, message, placeholder } = this.props;

		return (
			<div className={this.classNameRoot()}>
				<label>{!!children && <p className={'ui-select__caption'}> {children} </p>}</label>

				<div className={'ui-select__body'}>
					<div className={'ui-select__header'}>
						<p className={'ui-select__placeholder'}>HEADER</p>
					</div>
				</div>

				{!!message && <p className={'ui-select__message'}> {message} </p>}
			</div>
		);
	}
}

UiSelect.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	required: PropTypes.bool,
	disabled: PropTypes.bool,
	error: PropTypes.bool,
	success: PropTypes.bool,
	placeholder: PropTypes.string,
	message: PropTypes.string,
	options: PropTypes.array,
};

export default UiSelect;
