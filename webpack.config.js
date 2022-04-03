import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export default (env, argv) => {
	return {
		mode: argv.mode,

		entry: './src/index.js',

		output: {
			filename: 'main.js',
			path: path.join(process.cwd(), 'dist'),
		},

		plugins: [
			new HtmlWebpackPlugin({
				template: './src/index.html',
			}),
		],

		module: {
			rules: [
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
						'sass-loader',
					],
				},
			],
		},
	};
};
