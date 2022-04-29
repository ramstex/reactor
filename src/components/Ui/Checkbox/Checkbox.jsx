import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { Row, Col } from '../../Grid/Grid.jsx';

import './Checkbox.scss';

class UiCheckbox extends React.Component {
	//	Классы
	classNameRoot() {
		const { className, error, success, required, disabled } = this.props;
		return classnames(
			'ui-checkbox',
			className,
			{ _required: required },
			{ _disabled: disabled },
			{ _error: error },
			{ _success: success }
		);
	}

	render() {
		const { children } = this.props;

		return (
			<label className={this.classNameRoot()}>
				<Row>
					<Col>
						<input type={'checkbox'} />
					</Col>

					<Col>{children}</Col>
				</Row>
			</label>
		);
	}
}

UiCheckbox.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	required: PropTypes.bool,
	disabled: PropTypes.bool,
	error: PropTypes.bool,
	success: PropTypes.bool,
	checked: PropTypes.bool,
	message: PropTypes.string,
};

export default UiCheckbox;
