import React from 'react';
import classnames from 'classnames';
import { getChildrenByKey } from '../../../plugins/helpers';

import MarkupContainer from '../Container/Container.jsx';

import './Section.scss';

const MarkupSection = ( props ) => {
	const {
		className,
		children,
		header,
		body,
		title,
		titleTag,
	} = props;

	const classNameRoot = classnames( 'markup-section', className );

	const TitleTag = titleTag || 'h2';

	return (
		<section className={ classNameRoot }>
			<div className={ 'markup-section__header' }>
				<MarkupContainer { ...header }>
					<TitleTag className={ 'markup-section__title' }>{ title }</TitleTag>
				</MarkupContainer>
			</div>

			<div className={ 'markup-section__body' }>
				<MarkupContainer { ...body }>{ getChildrenByKey( children ) }</MarkupContainer>
			</div>
		</section>
	);
}

export default MarkupSection;
