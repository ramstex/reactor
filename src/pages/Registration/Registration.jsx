import React from 'react';
import classnames from 'classnames';

import MarkupSection from '/src/components/Markup/Section/Section.jsx';
import FormRegistration from '/src/components/Forms/Registration/Registration.jsx';

const PageRegistration = ( props ) => {
	const { className } = props;

	const classNameRoot = classnames( 'page page-registration', className );

	return (
		<div className={ classNameRoot }>
			<MarkupSection title={ 'Registration' }>
				<FormRegistration />
			</MarkupSection>
		</div>
	);
};

export default PageRegistration;
