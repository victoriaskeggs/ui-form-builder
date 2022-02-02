const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		index: './src/app.tsx'
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'src/index.ejs',
			title: 'Form Builder',
		})
	],
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
	},
	module: {
		rules: [
			{ test: /\.(ts|tsx)$/, loader: 'awesome-typescript-loader' }
		]
	}
};