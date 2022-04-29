import React from 'react';

export const content = {
	tabs: [
		{
			id: 1,
			title: 'Simple tab',
			content: (
				<div>
					<p>
						Задача организации, в особенности же постоянный количественный рост и сфера нашей активности
						обеспечивает широкому кругу (специалистов) участие в формировании позиций, занимаемых
						участниками в отношении поставленных задач. Значимость этих проблем настолько очевидна, что
						укрепление и развитие структуры позволяет оценить значение модели развития.
					</p>

					<p>
						Товарищи! Новая модель организационной деятельности в значительной степени обуславливает
						создание новых предложений. Таким образом консультация с широким активом требуют определения и
						уточнения соответствующий условий активизации. Задача организации, в особенности же начало
						повседневной работы по формированию позиции способствует подготовки и реализации направлений
						прогрессивного развития.
					</p>
				</div>
			),

			onClick() {
				console.log('CLICK', this);
			},

			onEnter() {
				console.log('ENTER', this);
			},

			onLeave() {
				console.log('LEAVE', this);
			},
		},

		{
			id: '2',
			title: <h6> BIG TAB 2</h6>,
			content: (
				<div>
					<h2>Yeah! BIG TAB</h2>
				</div>
			),

			onClick() {
				console.log('CLICK', this);
			},

			onEnter() {
				console.log('ENTER', this);
			},

			onLeave() {
				console.log('LEAVE', this);
			},
		},

		{
			id: 3,
			title: 'Disabled tab',
			disabled: true,
			content: (
				<React.Fragment>
					<p>
						Разнообразный и богатый опыт постоянное информационно-пропагандистское обеспечение нашей
						деятельности представляет собой интересный эксперимент проверки системы обучения кадров,
						соответствует насущным потребностям. Повседневная практика показывает, что рамки и место
						обучения кадров требуют определения и уточнения форм развития. Значимость этих проблем настолько
						очевидна, что сложившаяся структура организации требуют от нас анализа новых предложений.
						Идейные соображения высшего порядка, а также сложившаяся структура организации играет важную
						роль в формировании направлений прогрессивного развития.
					</p>
				</React.Fragment>
			),

			onClick() {
				console.log('CLICK', this);
			},

			onEnter() {
				console.log('ENTER', this);
			},

			onLeave() {
				console.log('LEAVE', this);
			},
		},

		{
			id: 4,
			title: 'Callback without content',

			onClick(event, tab) {
				console.log('CLICK', this);
				console.log(event);
				console.log(tab);
				console.log('========================');
			},
		},

		{
			id: 5,
			title: 'Internal link',
			href: '/ui-kit/buttons',

			onClick() {
				console.log('CALLBACK INTERNAL LINK', this);
			},
		},

		{
			id: 6,
			title: 'External link',
			href: 'https://google.com',
			target: '_blank',

			onClick() {
				console.log('CALLBACK EXTERNAL LINK', this);
			},
		},
	],
};
