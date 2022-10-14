import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import jsonImporter from 'node-sass-json-importer';

import _BUILD from './config/build.js';

export default ( env, argv ) => {
	const isProduction = argv.mode === 'production';
	const isDevelopment = argv.mode === 'development';

	const plugins = [
		new MiniCssExtractPlugin( { filename: 'css/[name].css?v=[fullhash]' } ),

		new webpack.DefinePlugin( { process: { env: { MODE: JSON.stringify( argv.mode ) } } } ),
	];

	if ( isProduction ) {
		plugins.push(
			new HtmlWebpackPlugin( {
				template: './src/index.prod.html',
				filename: 'index.tpl',
				minify: false,
			} )
		);

		plugins.push(
			new HtmlWebpackPlugin( {
				template: './src/main.html',
				filename: 'main.tpl',
				inject: false,
				minify: false,
			} )
		);
	}

	if ( isDevelopment ) {
		plugins.push( new HtmlWebpackPlugin( { template: './src/index.html' } ) );
	}

	return {
		mode: argv.mode,

		entry: './src/index.jsx',

		output: {
			filename: _BUILD[ argv.mode ].output.filename,
			path: path.join( process.cwd(), _BUILD[ argv.mode ].output.path ),
			publicPath: _BUILD[ argv.mode ].output.publicPath,
		},

		devServer: {
			port: 4000,
			historyApiFallback: true,
		},

		plugins,

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
					generator: { filename: 'assets/docs/[name][ext]?v=[contenthash]' },
				},

				{
					test: /\.(png|jpe?g|gif)$/i,
					type: 'asset/resource',
					generator: { filename: 'assets/images/[name][ext]?v=[contenthash]' },
				},

				{
					test: /\.(mp4|mpg|mov|avi|webm)$/i,
					type: 'asset/resource',
					generator: { filename: 'assets/video/[name][ext]?v=[contenthash]' },
				},

				{
					test: /.(ttf|otf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
					type: 'asset/resource',
					generator: { filename: 'assets/fonts/[name][ext]?v=[contenthash]' },
				},
			],
		},
	};
};
