const path    = require('path'),
      webpack = require('webpack');

module.exports = {
  context : path.resolve(__dirname, '.'),
  entry   : [
    'react-hot-loader/patch',
    // activate HMR for React

    'webpack-dev-server/client?http://localhost:8080',
    // bundle the client for webpack-dev-server
    // and connect to the provided endpoint

    'webpack/hot/only-dev-server',
    // bundle the client for hot reloading
    // only- means to only hot reload for successful updates


    './src/app/index.jsx'
    // the entry point of our app
  ],
  output : {
    path       : path.resolve(__dirname, './dist'),
    filename   : '[name].bundle.js',
    publicPath : '/assets'
  },
  // devtool   : 'cheap-module-eval-source-map',
  devtool   : 'eval',

  devServer : {
    hot: true,
    // enable HMR on the server

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
        {
          loader  : 'css-loader',
          // options : {
          //   modules        : true,
          //   importLoaders  : 1,
          //   localIdentName : '[path][name]__[local]--[hash:base64:5]'
          // }
        },
        'less-loader'
      ]
    }]
  },

  plugins : [
    new webpack.HotModuleReplacementPlugin(),
    // enable HMR globally

    new webpack.NamedModulesPlugin(),
    // prints more readable module names in the browser console on HMR updates
  ]
};
