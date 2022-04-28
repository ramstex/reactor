import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { getChildrenByKey } from '../../../plugins/helpers';

import MarkupContainer from '../Container/Container.jsx';

import './Section.scss';

class MarkupSection extends React.Component {
	//	Классы
	classNameRoot() {
		const { className } = this.props;
		return classnames('markup-section', className);
	}

	classNameHeader() {
		return classnames('markup-section__header');
	}

	classNameTitle() {
		return classnames('markup-section__title');
	}

	classNameBody() {
		return classnames('markup-section__body');
	}

	render() {
		const { children, header, body, title, titleTag } = this.props;

		const TitleTag = titleTag || 'h2';

		return (
			<section className={this.classNameRoot()}>
				<div className={this.classNameHeader()}>
					<MarkupContainer {...header}>
						<TitleTag className={this.classNameTitle()}>{title}</TitleTag>
					</MarkupContainer>
				</div>

				<div className={this.classNameBody()}>
					<MarkupContainer {...body}>{getChildrenByKey(children)}</MarkupContainer>
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
	title: PropTypes.string,
	titleTag: PropTypes.string,
};

export default MarkupSection;
