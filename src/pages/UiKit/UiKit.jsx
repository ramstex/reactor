import React from 'react';
import classnames from 'classnames';

import MarkupSection from '/src/components/Markup/Section/Section.jsx';
import LocalNav from './components/Nav/Nav.jsx';

const PageUiKit = ( props ) => {
	const { className } = props;

	const classNameRoot = classnames( 'page page-ui-kit', className );

	return (
		<div className={ classNameRoot }>
			<MarkupSection title={ 'Ui Kit' }>
				<LocalNav />

				<p>Ui Kit Page</p>
			</MarkupSection>
		</div>
	);
};

export default PageUiKit;
