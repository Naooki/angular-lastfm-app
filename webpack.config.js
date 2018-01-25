const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  devtool: 'inline-sourcemap',
  entry: {
    polyfills: './src/polyfills.ts',
    vendor: './src/vendor.ts',
    app: './src/main.ts'
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
        test: /\.scss$/,
        loaders: ['raw-loader', 'sass-loader'],
        exclude: /node_modules/
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
      name: ['app', 'vendor', 'polyfills']
    }),

    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),

    new CopyWebpackPlugin([
      { from: 'node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css', to: 'styles/' },
      { from: 'assets/lastfm-logo.png', to: 'assets/' },
    ]),
  ]
};