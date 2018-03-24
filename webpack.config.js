const path = require('path')
const webpack = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const name = 'validator'

module.exports = {
  entry: `./src/validator.js`,
  output: {
    path: path.join(__dirname, `./lib`),
    filename: `${name}.js`,
    libraryTarget: 'umd'
  },
  module: {
    rules: [{
	test: /\.js$/,
	exclude: /node_modules/,
	loader: 'babel-loader'
    }]
  },
  plugins: [
    new UglifyJsPlugin()
  ],
  mode: 'production'
}
