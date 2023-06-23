import { INavRoute } from '../src/hooks/useNav';

const _NAV: INavRoute[] = [
	{
		title: 'Home',
		key: 'home',
		path: '/',
	},

	{
		title: 'Ui-Kit',
		key: 'uiKit',
		path: '/ui-kit',
		children: [
			{
				title: 'Ui-Kit Icon',
				key: 'icon',
				path: '/icon',
			},

			{
				title: 'Ui-Kit Input',
				key: 'input',
				path: '/input',
			},

			{
				title: 'Ui-Kit Button',
				key: 'button',
				path: '/button',
			},
		],
	},
];

export default _NAV;
