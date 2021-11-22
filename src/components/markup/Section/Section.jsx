import React from 'react';
import PropTypes from 'prop-types';

const Section = ( {
	title,
	TitleTag = 'h1',
	children,
} ) => {
	return (
		<section className={ 'markup-section' }>
			<div className="markup-section__header container">
				<TitleTag className="markup-section__title">{ title }</TitleTag>
			</div>
			<div className="markup-section__body container">
				{ children }
			</div>
		</section>
	);
};

Section.propTypes = {
	name: PropTypes.string,
	age: PropTypes.number,
};

export default Section;
