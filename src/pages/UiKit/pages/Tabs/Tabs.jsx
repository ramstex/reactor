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
					title: 'Simple tab',
					content: <div key={ 1 }>
						<p>Задача организации, в особенности же постоянный количественный рост и сфера нашей активности
							обеспечивает широкому кругу (специалистов) участие в формировании позиций, занимаемых
							участниками в отношении поставленных задач. Значимость этих проблем настолько очевидна,
							что укрепление и развитие структуры позволяет оценить значение модели развития.</p>

						<p>Товарищи! Новая модель организационной деятельности в значительной степени обуславливает
							создание новых предложений. Таким образом консультация с широким активом требуют определения
							и уточнения соответствующий условий активизации. Задача организации, в особенности же
							начало повседневной работы по формированию позиции способствует подготовки и реализации
							направлений прогрессивного развития.</p>
					</div>,
				},

				{
					id: '2',
					title: <h6> BIG TAB 2</h6>,
					content: <div key={ 2 }>
						<h2>Yeah! BIG TAB</h2>
					</div>,
				},

				{
					id: 3,
					title: 'Disabled tab',
				},

				{
					id: 4,
					title: 'Tab with callbacks',
					content: <div key={ 4 }> Watch the console, bro! </div>,

					onClick( event, tab ) {
						console.log( 'CLICK', this );
						console.log( event );
						console.log( tab );
					},

					onEnter( data ) {
						console.log( 'ENTER', data );
					},

					onLeave( data ) {
						console.log( 'LEAVE', data );
					},
				},

				{
					id: 5,
					title: 'Tab with link',
					href: '/ui-kit/buttons',

					onClick() {
						console.log( 'CALLBACK LINK', this );
					},
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

	onUpdateCurrent( data ) {
		this.setState( {
			current: data.currentId,
		} );
	}

	render() {
		const { current } = this.state;

		return (
			<div className={ this.classNameRoot() }>
				<MarkupSection title={ 'Ui Kit - Tabs' }>
					<LocalNav />

					<p> ID текущей вкладки: { current } </p>

					<UiTabs
						tabs={ this.state.tabs }
						current={ current }
						onChange={ this.onUpdateCurrent }
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
