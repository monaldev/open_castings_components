'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _storybook = require('@kadira/storybook');

var _ = require('~/');

var _load_mui_theme = require('~/.storybook/load_mui_theme');

var _load_mui_theme2 = _interopRequireDefault(_load_mui_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _storybook.storiesOf)('ProfileOverview', module).addDecorator(function (story) {
  return _react2.default.createElement(
    _load_mui_theme2.default,
    null,
    _react2.default.createElement(
      'div',
      {
        style: {
          width: '50%',
          margin: 'auto',
          position: 'relative'
        }
      },
      story()
    )
  );
}).add('public view', function () {
  var data = {
    fName: 'Rohit',
    lName: 'Ravikoti',
    jobs: ['Model', 'Actor'],
    location: 'Irvine, CA 92612',
    socialProfiles: {
      twitter: 'envato',
      facebook: 'envato'
    },
    ageMin: 20,
    ageMax: 24,
    heightCm: 180
  };
  var story = _react2.default.createElement(_.ProfileOverview, {
    data: data
  });
  return story;
});