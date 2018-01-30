const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');

module.exports = {
  devtool: 'inline-sourcemap',
  entry: {
    polyfills: './src/polyfills.ts',
    vendor: './src/vendor.ts',
    app: './src/main.ts',
    theme: './src/theme.scss',
  },

  output: {
    filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist')
  },

  resolve: {
    extensions: ['.ts', '.js', 'html', 'css', 'scss']
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        loaders: [ 'ts-loader', 'angular2-template-loader' ],
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file-loader?name=assets/[name].[hash].[ext]'
      },
      {
        test: /theme.scss/,
        loader: ExtractTextPlugin.extract({
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.scss$/,
        loaders: ['raw-loader', 'sass-loader'],
        exclude: [/node_modules/, /theme.scss/],
      },
      /* Embed files. */
      { 
        test: /\.(html|css)$/, 
        loader: 'raw-loader',
        exclude: /\.async\.(html|css)$/
      },
      /* Async loading. */
      {
        test: /\.async\.(html|css)$/, 
        loaders: ['file?name=[name].[hash].[ext]', 'extract']
      }
    ]
  },

  plugins: [
    // Workaround for angular/angular#11580 (https://angular.io/guide/webpack)
    new webpack.ContextReplacementPlugin(
      /(.+)?angular(\\|\/)core(.+)?/,
      path.resolve(__dirname, './src')
  ),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      chunks: ['app', 'vendor', 'polyfills']
    }),

    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),

    new CopyWebpackPlugin([
      { from: 'assets/lastfm-logo.png', to: 'assets/' },
    ]),

    new ExtractTextPlugin('styles/theme.css'),
  ]
};