import React from 'react';

import MarkupSection from '../../../../components/Markup/Section/Section.jsx';
import LocalNav from '../Nav/Nav.jsx';

const LocalLayout = ( props ) => {
	const {
		children,
		title,
	} = props;

	return (
		<div className={ 'page-ui-kit-layout' }>
			<MarkupSection title={ `Ui Kit - ${ title }` }>
				<LocalNav />
			</MarkupSection>

			<div className={ 'page-ui-kit-layout__body' }>
				{ children }
			</div>
		</div>
	);
}

export default LocalLayout;
