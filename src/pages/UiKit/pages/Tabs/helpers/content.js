import React from 'react';

export const content = {
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
			title: 'Callbacks',
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
			title: 'Internal link',
			href: '/ui-kit/buttons',

			onClick() {
				console.log( 'CALLBACK LINK', this );
			},
		},

		{
			id: 6,
			title: 'External link',
			href: 'https://google.com',
			target: '_blank',

			onClick() {
				console.log( 'CALLBACK EXTERNAL LINK', this );
			},
		},
	],
};
