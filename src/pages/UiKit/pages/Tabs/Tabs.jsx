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
					content: <div key={ 1 }> Tab 1 </div>,
				},

				{
					id: '2',
					title: <h6> BIG TAB 2</h6>,
					content: <div key={ 2 }> Tab 2 </div>,
				},

				{
					id: 3,
					title: 'Tab 3',
					disabled: true,
					content: <div key={ 3 }> Tab 3 </div>,
				},

				{
					id: 4,
					title: 'Tab 4',
					content: <div key={ 4 }> Tab 4 </div>,
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
