const _BUILD = {
	development: {
		output: {
			filename: 'js/main.js?v=[fullhash]',
			path: 'production',
			publicPath: '/',
		},
	},

	production: {
		output: {
			filename: 'js/main.js?v=[fullhash]',
			path: '../SGM/Staging',
			publicPath: '/visual/',
		},
	},
};

export default _BUILD;
