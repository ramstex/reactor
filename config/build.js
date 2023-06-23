const _BUILD = {
	development: {
		output: {
			filename: 'js/main.js?v=[fullhash]',
			path: 'dist',
			publicPath: '/',
		},
	},

	production: {
		output: {
			filename: 'js/main.js?v=[fullhash]',
			path: 'dist',
			publicPath: '/visual/',
		},
	},
};

export default _BUILD;
