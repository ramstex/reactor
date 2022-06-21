import React from 'react';

import MarkupSection from '../../../../components/Markup/Section/Section.jsx';
import LocalNav from '../../components/Nav/Nav.jsx';

import './Media.scss';

class PageUiKitMedia extends React.Component {
	// static contextType = MediaConsumer;

	render() {
		return (
			<div className={ 'page-ui-kit-media' }>
				<MarkupSection title={ 'Ui Kit - Media' }>
					<LocalNav />

				</MarkupSection>
			</div>
		);
	}
}

export default PageUiKitMedia;
