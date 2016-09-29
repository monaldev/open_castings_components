const path = require('path');
const precss = require('precss');
const autoprefixer = require('autoprefixer');

module.exports = {
  externals: {
    jsdom: 'window',
    cheerio: 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': 'window',
    'react/addons': true,
  },
  module: {
    noParse: [
      /node_modules\/sinon\//,
    ],
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      include: path.resolve(__dirname, '../'),
    }, {
      test: /\.css$/,
      loaders: ['style', 'css'],
      exclude: /node_modules/,
      include: path.resolve(__dirname, '../'),
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
    }],
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
