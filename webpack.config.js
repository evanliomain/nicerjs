const path    = require('path'),
      webpack = require('webpack');

module.exports = {
  context : path.resolve(__dirname, '.'),
  entry   : [
    // activate HMR for React
    'react-hot-loader/patch',

    // bundle the client for webpack-dev-server
    // and connect to the provided endpoint
    'webpack-dev-server/client?http://localhost:8080',

    // bundle the client for hot reloading
    // only- means to only hot reload for successful updates
    'webpack/hot/only-dev-server',

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
    // enable HMR on the server
    hot: true,

    contentBase : path.resolve(__dirname, './src/app'),

    // match the output `publicPath`
    publicPath: '/assets'
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
  },

  plugins : [
    // enable HMR globally
    new webpack.HotModuleReplacementPlugin(),

    // prints more readable module names in the browser console on HMR updates
    new webpack.NamedModulesPlugin()
  ]
};
