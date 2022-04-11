import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export default ( env, argv ) => {
	return {
		mode: argv.mode,

		entry: './src/index.jsx',

		output: {
			filename: 'main.js',
			path: path.join( process.cwd(), 'dist' ),
			publicPath: '/',
		},

		devServer: {
			port: 8080,
			historyApiFallback: true,
		},

		plugins: [
			new HtmlWebpackPlugin( {
				template: './src/index.html',
			} ),

			new MiniCssExtractPlugin(),
		],

		module: {
			rules: [
				{
					test: /\.(js|jsx)$/,
					exclude: /node_modules/,
					use: [{
						loader: 'babel-loader',
						options: {
							presets: [
								['@babel/preset-env', {
									targets: 'defaults',
								}],
								'@babel/preset-react',
							],
						},
					}],
				},

				{
					test: /\.(sa|sc|c)ss$/,
					use: [
						MiniCssExtractPlugin.loader,

						'css-loader',

						{
							loader: 'postcss-loader',
							options: {
								postcssOptions: {
									plugins: [
										[
											'postcss-preset-env',
										],
									],
								},
							},
						},

						'resolve-url-loader',

						{
							loader: 'sass-loader',
							options: {
								sourceMap: true,
							},
						},
					],
				},

				{
					test: /\.svg$/,
					use: [
						{
							loader: 'babel-loader',
						},
						{
							loader: 'react-svg-loader',
						},
					],
				},

				{
					test: /\.(png|jpg|jpeg)$/,
					use: [
						{
							loader: 'url-loader',
						},
					],
				},
			],
		},
	};
};
