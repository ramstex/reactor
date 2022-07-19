import React from 'react';

import MarkupSection from '/src/components/Markup/Section/Section.jsx';
import FormLogin from '/src/components/Forms/Login/Login.jsx';
import LocalLayout from '../../components/Layout/Layout.jsx';

import './Forms.scss';

const PageUiKitForms = () => {
	return (
		<LocalLayout title={ 'Forms' }>
			<MarkupSection>
				<FormLogin />
			</MarkupSection>
		</LocalLayout>
	);
};

export default PageUiKitForms;
