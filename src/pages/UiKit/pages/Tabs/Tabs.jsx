import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import MarkupSection from '../../../../components/Markup/Section/Section.jsx';
import UiTabs from '../../../../components/Ui/Tabs/Tabs.jsx';
import LocalNav from '../../components/Nav/Nav.jsx';

class PageUiKitTabs extends React.Component {
	constructor( props ) {
		super( props );

		this.state = {
			tabs: [
				{
					id: 1,
					title: 'Tab 1',
				},

				{
					id: 2,
					title: 'Tab 2',
				},

				{
					id: 3,
					title: 'Tab 3',
					disabled: true,
				},

				{
					id: 4,
					title: 'Tab 4',
				},
			],

			current: 1,
		};

		this.onUpdateCurrent = this.onUpdateCurrent.bind( this );
	}

	//	Классы
	classNameRoot() {
		const { className } = this.props;
		return classnames( 'page-ui-kit-tabs', className );
	}

	onUpdateCurrent( value ) {
		this.setState( {
			current: value,
		} );
	}

	render() {
		const { current } = this.state;

		return (
			<div className={ this.classNameRoot() }>
				<MarkupSection title={ 'Ui Kit - Tabs' }>
					<LocalNav />

					<UiTabs
						tabs={ this.state.tabs }
						current={ current }
						updateCurrent={ this.onUpdateCurrent }
						contents={ [
							<div key={ this.state.tabs[0].id }> AAAAAAAAAAAA 1 </div>,
							<div key={ this.state.tabs[1].id }> AAAAAAAAAAAA 2 </div>,
							<div key={ this.state.tabs[2].id }> AAAAAAAAAAAA 3 </div>,
							<div key={ this.state.tabs[3].id }> AAAAAAAAAAAA 4 </div>,
						] }
					/>
				</MarkupSection>
			</div>
		);
	}
}

PageUiKitTabs.propTypes = {
	className: PropTypes.string,
};

export default PageUiKitTabs;
