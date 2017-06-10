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
    use: ['css-loader', 'sass-loader'],
    publicPath: '/'
});

var cssConfig = isProd ? cssProd : cssDev;

var bootstrapConfig = isProd ? bootstrapEntryPoints.prod : bootstrapEntryPoints.dev;

var htmlPlugin = new HtmlWebpackPlugin({
            title: 'Tracte Just',
            description: '',
            /*minify: {
                 collapseWhitespace: true
            },*/
            hash: true,
            template: './src/index.html',
            chunksSortMode: packageSort(['bootstrap', 'app'])
});

var extractPlugin = new ExtractTextPlugin({
            filename: 'css/[name].css',
            disable: !isProd,
            allChunks: true
});

var config = {
  entry: {
    bootstrap: bootstrapConfig,
    app: SRC_DIR + '/js/index.js'
  },
  output: {
    path: DIST_DIR,
    filename: 'js/[name].bundle.js',
    publicPath: '/'
  },
  module : {
      loaders: [
          {
              test : /\.js$/,
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
          {   test: /\.(ttf|eot|svg)$/,
              exclude: [SRC_DIR + '/svg', SRC_DIR + '/images'],
              use: 'file-loader?name=fonts/[name].[ext]'
          },
          {
              test: /\.(jpe?g|png|ico|svg|gif)$/i,
              include: SRC_DIR + '/images',
              use: [
                  'file-loader?name=[path][name].[ext]&context=./src',
                  {
                    loader: 'image-webpack-loader',
                    query: {
                      bypassOnDebug: true,
                      progressive: true,

                      optipng: {
                        optimizationLevel: 5
                      },
                      pngquant: {
                        quality: '65-90',
                        speed: 4
                      },
                      mozjpeg: {
                        quality: 75
                      },
                      gifsicle: {
                        interlaced: false
                      }
                    }
                  }
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

function packageSort(packages) {
    return function sort(left, right) {
        var leftIndex = packages.indexOf(left.names[0]);
        var rightindex = packages.indexOf(right.names[0]);

        if ( leftIndex < 0 || rightindex < 0) {
            throw "unknown package";
        }

        if (leftIndex > rightindex){
            return 1;
        }

        return -1;
    }
};

module.exports = config;
