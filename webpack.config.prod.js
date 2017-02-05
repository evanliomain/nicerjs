const path    = require('path'),
      webpack = require('webpack');

module.exports = {
  context : path.resolve(__dirname, '.'),
  entry   : [
    // the entry point of our app
    './src/app/index.jsx'
  ],
  output : {
    path       : path.resolve(__dirname, './dist'),
    filename   : '[name].bundle.js',
    publicPath : '/assets'
  },
  devtool   : 'eval',

  devServer : {
    contentBase : path.resolve(__dirname, './src/app'),

    publicPath: '/assets'
    // match the output `publicPath`
  },

  resolve : {
    extensions: ['.js', '.jsx']
  },

  module : {
    rules : [{
      test    : /\.jsx?$/,
      exclude : /node_modules/,
      use     : [{
        loader  : 'babel-loader',
        options : { presets : ['es2015', 'es2016', 'stage-3', 'react'] },
      }]
    }, {
      test : /\.css$/,
      use  : [ 'style-loader', 'css-loader' ]
    }, {
      test : /\.less$/,
      use  : [
        'style-loader',
        'css-loader',
        'less-loader'
      ]
    }]
  }
};
