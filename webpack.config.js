const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './javascripts/index.js',
  output: {
    path: path.resolve('./public'),
    filename: 'bundle.js'
  },
  resolve: {
    mainFields: ['browser', 'main', 'module'],
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['babel-loader', 'ts-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  devServer: {
    contentBase: './public',
    host: '0.0.0.0'
  },
  devtool: 'source-map'
};
