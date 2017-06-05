var webpack = require('webpack');
var path = require('path');
var bootstrapEntryPoints = require('./webpack.bootstrap.config');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');

var DIST_DIR = path.resolve(__dirname, 'dist');
var SRC_DIR = path.resolve(__dirname, 'src');

var isProd = process.env.NODE_ENV === 'production';
var cssDev = ['style-loader', 'css-loader?sourceMap', 'sass-loader'];
var cssProd = ExtractTextPlugin.extract({
    fallback: 'style-loader',
    loader: ['css-loader', 'sass-loader'],
    publicPath: '/dist/css'
});

var cssConfig = isProd ? cssProd : cssDev;

var bootstrapConfig = isProd ? bootstrapEntryPoints.prod : bootstrapEntryPoints.dev;

var htmlPlugin = new HtmlWebpackPlugin({
            title: 'Tracte Just',
            // minify: {
            //     collapseWhitespace: true
            // },
            hash: true,
            template: './src/index.html',
});

var extractPlugin = new ExtractTextPlugin({
            filename: '/css/[name].css',
            disable: !isProd,
            allChunks: true
});

var config = {
  entry: {
    app: SRC_DIR + '/index.js',
    bootstrap: bootstrapConfig
  },
  output: {
    path: DIST_DIR,
    filename: 'js/[name].bundle.js'
  },
  module : {
      loaders: [
          {
              test : /\.js?/,
              include : SRC_DIR,
              use : 'babel-loader'
          },
          {
              test: /\.scss$/,
              include : SRC_DIR,
              use: cssConfig
          },
          {
              test: /\.(woff2?)$/,
              use: 'url-loader?limit=10000&name=fonts/[name].[ext]'
          },
          {   test: /\.(ttf|eot)$/,
              use: 'file-loader?name=fonts/[name].[ext]'
          },
          {
              test:/bootstrap-sass[\/\\]assets[\/\\]javascripts[\/\\]/,
              use: 'imports-loader?jQuery=jquery'
          },
          {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                  'file-loader?name=images/[name].[ext]',
                  'image-webpack-loader?bypassOnDebug'
                ]
          }
      ]
  },
  devServer: {
    contentBase: DIST_DIR,
    compress: true,
    stats: "errors-only",
    open: true
  },
  plugins: [
    extractPlugin,
    htmlPlugin
  ]
};

module.exports = config;
