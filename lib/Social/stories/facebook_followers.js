'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _storybook = require('@kadira/storybook');

var _ = require('~/');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _storybook.storiesOf)('Social', module).addDecorator(function (story) {
  return _react2.default.createElement(
    'div',
    {
      style: {
        width: '50px',
        margin: 'auto',
        position: 'relative'
      }
    },
    story()
  );
}).add('FacebookFollowers', function () {
  var story = _react2.default.createElement(
    _.FacebookFollowers,
    { profileId: 'envato' },
    'Hello'
  );
  return story;
});