const path = require('path');
const precss = require('precss');
const autoprefixer = require('autoprefixer');

module.exports = {
  externals: {
    'react-bootstrap': 'ReactBootstrap',
  },
  module: {
    noParse: [
      /node_modules\/sinon\//,
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        include: path.resolve(__dirname, '../'),
      }, {
        test: /\.css$/,
        loaders: ['style', 'css'],
        include: path.resolve(__dirname, '../'),
      }, {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&minetype=application/font-woff',
      }, {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader',
      }, {
        test: /\.json$/,
        loaders: ['json'],
        exclude: /node_modules/,
        include: path.resolve(__dirname, '../'),
      }, {
        test: /\.scss$/,
        loaders: [
          'style',
          'css?modules&importLoaders=1' +
            '&localIdentName=[name]__[local]___[hash:base64:5]!postcss',
        ],
        exclude: /node_modules/,
        include: path.resolve(__dirname, '../'),
      }, {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
        loader: 'url-loader?limit=10000&name=assets/[hash].[ext]',
        exclude: /node_modules/,
        include: path.resolve(__dirname, '../'),
      },
    ],
  },
  resolve: {
    alias: {
      sinon: 'sinon/pkg/sinon',
    },
  },
  node: {
    fs: 'empty',
  },
  postcss: () => [precss, autoprefixer],
};
