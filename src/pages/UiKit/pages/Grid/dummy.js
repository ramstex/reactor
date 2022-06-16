import React from 'react';

const dummy = {
	rows: [
		{
			title: 'Стандартная сетка:',

			cols: [
				{
					props: { col: 3 },
					content: '1. Ширина: 3',
				},

				{
					props: { col: 7 },
					content: '2. Ширина: 7',
				},

				{
					props: { col: 2 },
					content: '3. Ширина: 2',
				},

				{
					props: { col: 4 },
					content: '4. Ширина: 4',
				},

				{
					props: { col: 4 },
					content: '5. Ширина: 4',
				},

				{
					props: { col: 4 },
					content: '6. Ширина: 4',
				},
			],
		},

		{
			title: 'Сетка с реверсом:',

			props: { reverse: true },

			cols: [
				{
					props: { col: 3 },
					content: '1. Ширина: 3',
				},

				{
					props: { col: 7 },
					content: '2. Ширина: 7',
				},

				{
					props: { col: 2 },
					content: '3. Ширина: 2',
				},

				{
					props: { col: 4 },
					content: '4. Ширина: 4',
				},

				{
					props: { col: 4 },
					content: '5. Ширина: 4',
				},

				{
					props: { col: 4 },
					content: '6. Ширина: 4',
				},
			],
		},

		{
			title: 'Сетка с выравниванием по правому краю:',

			props: { alignH: 'end' },

			cols: [
				{
					props: { col: 3 },
					content: '1. Ширина: 3',
				},

				{
					props: { col: 2 },
					content: '2. Ширина: 2',
				},

				{
					props: { col: 4 },
					content: '3. Ширина: 4',
				},

				{
					props: { col: 4 },
					content: '4. Ширина: 4',
				},

				{
					props: { col: 5 },
					content: '5. Ширина: 5',
				},

				{
					props: { col: 2 },
					content: '6. Ширина: 2',
				},
			],
		},

		{
			title: 'Сетка с выравниванием по нижнему краю:',

			props: { alignV: 'end' },

			cols: [
				{
					props: { col: 3 },
					content: <React.Fragment>1. Ширина: 3<br />Строка</React.Fragment>,
				},

				{
					props: { col: 2 },
					content: '2. Ширина: 2',
				},

				{
					props: { col: 4 },
					content: '3. Ширина: 4',
				},

				{
					props: { col: 4 },
					content: '4. Ширина: 4',
				},

				{
					props: { col: 5 },
					content: <React.Fragment>5. Ширина: 5<br />Строка</React.Fragment>,
				},

				{
					props: { col: 2 },
					content: '6. Ширина: 2',
				},
			],
		},
	],
};

export default dummy;
