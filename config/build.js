const _BUILD = {
	development: {
		output: {
			filename: 'js/main.js?v=[hash]',
			path: 'dist',
			publicPath: '/',
		},
	},

	production: {
		output: {
			filename: 'js/main.js?v=[hash]',
			path: 'dist',
			publicPath: '/visual/',
		},
	},
};

export default _BUILD;
