const path    = require('path'),
      webpack = require('webpack');

module.exports = {
  context : path.resolve(__dirname, '.'),
  entry   : [
    './src/printers/printer.js'
  ],
  output : {
    path       : path.resolve(__dirname, './dist'),
    filename   : '[name].bundle.js',
    publicPath : '/assets'
  },
  resolve : {
    extensions: ['.js']
  },

  module : {
    rules : [{
      test    : /\.jsx?$/,
      exclude : /node_modules/,
      use     : [{
        loader  : 'babel-loader',
        options : { presets : ['es2015', 'es2016', 'stage-3', 'react'] },
      }]
    }]
  }
};
