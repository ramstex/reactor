// ToDo: проверить актуальность пакетов:
// resolve-url-loader

import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import jsonImporter from 'node-sass-json-importer';

export default ( env, argv ) => {
	return {
		mode: argv.mode,

		entry: './src/index.jsx',

		output: {
			filename: 'main.js?v=[hash]',
			path: path.join( process.cwd(), 'dist' ),
			publicPath: '',
		},

		devServer: {
			port: 4000,
			historyApiFallback: true,
		},

		plugins: [
			new HtmlWebpackPlugin( { template: './src/index.html' } ),

			new MiniCssExtractPlugin( { filename: '[name].css?v=[hash]' } ),
		],

		module: {
			rules: [
				{
					test: /\.(js|jsx)$/,
					exclude: /node_modules/,
					use: [
						{
							loader: 'babel-loader',
							options: {
								presets: [
									[
										'@babel/preset-env',
										{ targets: 'defaults' },
									],
									'@babel/preset-react',
								],
							},
						},
					],
				},

				{
					test: /\.(sa|sc|c)ss$/,
					use: [
						MiniCssExtractPlugin.loader,
						'css-loader',

						{
							loader: 'sass-loader',
							options: {
								sourceMap: true,
								sassOptions: { importer: jsonImporter() },
							},
						},
					],
				},

				{
					test: /\.svg$/,
					use: [
						{ loader: 'babel-loader' },
						{ loader: 'react-svg-loader' },
					],
				},

				{
					test: /\.(pdf|doc?x|xls?x)$/i,
					type: 'asset/resource',
					generator: { filename: 'assets/docs/[name].[ext]?v=[hash]' },
				},

				{
					test: /\.(png|jpe?g|gif)$/i,
					type: 'asset/resource',
					generator: { filename: 'assets/images/[name].[ext]?v=[hash]' },
				},

				{
					test: /\.(mp4|mpg|mov|avi|webm)$/i,
					type: 'asset/resource',
					generator: { filename: 'assets/video/[name].[ext]?v=[hash]' },
				},

				{
					test: /.(ttf|otf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
					type: 'asset/resource',
					generator: { filename: 'assets/fonts/[name].[ext]?v=[hash]' },
				},
			],
		},
	};
};
