import React from 'react';
import classnames from 'classnames';

import MarkupSection from '/src/components/Markup/Section/Section.jsx';
import FormLogin from '/src/components/Forms/Login/Login.jsx';

const PageLogin = ( props ) => {
	const { className } = props;

	const classNameRoot = classnames( 'page page-login', className );

	return (
		<div className={ classNameRoot }>
			<MarkupSection title={ 'Login' }>
				<FormLogin />
			</MarkupSection>
		</div>
	);
};

export default PageLogin;
