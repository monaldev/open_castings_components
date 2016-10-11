'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _storybook = require('@kadira/storybook');

var _ = require('~/');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _storybook.storiesOf)('ProfileImage', module).add('default view', function () {
  return _react2.default.createElement(
    _.ProfileImage,
    { onClick: (0, _storybook.action)('ProfileImage clicked') },
    'Hello'
  );
}).add('some emojies as the text', function () {
  return _react2.default.createElement(
    _.ProfileImage,
    null,
    '\uD83D\uDE00 \uD83D\uDE0E \uD83D\uDC4D \uD83D\uDCAF'
  );
}).add('custom styles', function () {
  var style = {
    fontSize: 20,
    textTransform: 'uppercase',
    color: '#FF8833'
  };
  return _react2.default.createElement(
    _.ProfileImage,
    { style: style },
    'Hello'
  );
});