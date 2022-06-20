import React from 'react';
import Media from '../../../../plugins/media.jsx';
import MediaQuery from 'react-responsive';

import MarkupSection from '../../../../components/Markup/Section/Section.jsx';
import LocalNav from '../../components/Nav/Nav.jsx';

import './Media.scss';

class PageUiKitMedia extends React.Component {
	render() {
		console.log( Media );

		return (
			<div className={ 'page-ui-kit-media' }>
				<MarkupSection title={ 'Ui Kit - Media' }>
					<LocalNav />

					<MediaQuery minWidth={ Media.breakpoint( 'desktop', 'sm' ) }>
						<p>minWidth: DESKTOP SM { Media.breakpoint( 'desktop', 'sm' ) }</p>
					</MediaQuery>
				</MarkupSection>
			</div>
		);
	}
}

export default PageUiKitMedia;
