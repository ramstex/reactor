import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './Color.scss';

class UiKitColor extends React.Component {
	//	Классы
	classNameRoot() {
		const { className } = this.props;
		return classnames( 'ui-kit-color', className );
	}

	styleSample() {
		const { code, border } = this.props;
		return {
			backgroundColor: code,
			borderColor: border || undefined,
		};
	}

	render() {
		const { title, description } = this.props;

		return (
			<div className={ this.classNameRoot() }>
				<div className={ 'ui-kit-color__sample' } style={ this.styleSample() }/>

				<p className='ui-kit-color__title'>
					{ title }
				</p>

				{ !!description &&
					<p className='ui-kit-color__description _sm'>
						{ description }
					</p>
				}
			</div>
		);
	}
}

UiKitColor.propTypes = {
	className: PropTypes.string,
	code: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	description: PropTypes.string,
	border: PropTypes.string,
};

export default UiKitColor;
