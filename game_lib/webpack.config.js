var webpack = require('webpack');
var path = require('path');
// build library
var BUILD_DIR = path.resolve(__dirname, '../assets/js/');

// source file location
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
  entry: './src/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'game_bundle.js'
  },

  module : {
    loaders : [
      {
        test : /\.js?/,
        include : APP_DIR,
        loader : 'babel-loader'
      },
	{
		// Load all images as base64 encoding if they are smaller than 8192 bytes
		test: /\.(png|jpg|gif)$/,
		use: [
			{
				loader: 'url-loader',
				options: {
					name: '[name].[hash:20].[ext]',
					limit: 8192
				}
			}
		]
	},
	  {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader?url=false' ]
      }
    ]
  },

  resolve: {
     modules: [
        "node_modules",
        APP_DIR
    ],
  },
};
 
module.exports = config;