import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { getChildrenByKey } from '../../../plugins/helpers';

import MarkupContainer from '../Container/Container.jsx';

class MarkupSection extends React.Component {
	//	Классы
	classNameRoot() {
		const { className } = this.props;
		return classnames('markup-section', className);
	}

	classNameHeader() {
		return classnames('markup-section__header');
	}

	classNameBody() {
		return classnames('markup-section__body');
	}

	render() {
		const { children, header, body } = this.props;

		return (
			<section className={ this.classNameRoot() }>
				<div className={ this.classNameHeader() }>
					<MarkupContainer { ...header }>
						{ getChildrenByKey(children, 'header') }
					</MarkupContainer>
				</div>

				<div className={ this.classNameBody() }>
					<MarkupContainer { ...body }>
						{ getChildrenByKey(children) }
					</MarkupContainer>
				</div>
			</section>
		);
	}
}

MarkupSection.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	body: PropTypes.object,
	header: PropTypes.object,
};

export default MarkupSection;
