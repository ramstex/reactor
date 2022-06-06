import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './Form.scss';

class UiForm extends React.Component {
	constructor(props) {
		super(props);
	}

	//	Классы
	classNameRoot() {
		const { className } = this.props;
		return classnames(className);
	}

	render() {
		const { action } = this.props;

		return (
			<form className={this.classNameRoot()} action={action}>
				{this.children}
			</form>
		);
	}
}

UiForm.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	action: PropTypes.string,
};

export default UiForm;
