import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import MarkupContainer from '../Container/Container.jsx';

class MarkupSection extends React.Component {
	//	Классы
	classNameRoot() {
		const { className } = this.props;

		return classnames('markup-section', className);
	}

	classNameBody() {
		return classnames('markup-section__body');
	}

	render() {
		const { children } = this.props;

		return (
			<section className={ this.classNameRoot() }>
				<div className={ this.classNameBody() }>
					<MarkupContainer>
						{ children }
					</MarkupContainer>
				</div>
			</section>
		);
	}
}

MarkupSection.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
};

export default MarkupSection;
