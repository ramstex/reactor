import React from 'react';
import classBuilder from '../../../../plugins/classBuilder';

import Section from '../../../../components/Markup/Section/Section';
import LocalNav from '../Nav/Nav.jsx';

const LocalLayout = ( props ) => {
	const {
		children,
		className,
		title,
	} = props;

	const classNameRoot = classBuilder( 'page-ui-kit-layout', className );

	return (
		<div className={ classNameRoot }>
			<Section title={ `Ui Kit - ${ title }` }>
				<LocalNav />
			</Section>

			<div className={ 'page-ui-kit-layout__body' }>
				{ children }
			</div>
		</div>
	);
}

export default LocalLayout;
