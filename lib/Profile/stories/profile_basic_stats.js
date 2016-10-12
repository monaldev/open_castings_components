'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _storybook = require('@kadira/storybook');

var _ = require('~/');

var _load_mui_theme = require('~/.storybook/load_mui_theme');

var _load_mui_theme2 = _interopRequireDefault(_load_mui_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _storybook.storiesOf)('ProfileBasicStats', module).addDecorator(function (story) {
  return _react2.default.createElement(
    _load_mui_theme2.default,
    null,
    _react2.default.createElement(
      'div',
      {
        style: {
          width: '300px',
          margin: 'auto',
          position: 'relative'
        }
      },
      story()
    )
  );
}).add('individual', function () {
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
    gender: 'Male',
    ethnicities: ['Caucasian', 'Asian'],
    heightCm: 180,
    weightKg: 65,
    bust: 34,
    waist: 25,
    hips: 35
  };
  var story = _react2.default.createElement(_.ProfileBasicStats, {
    data: data
  });
  return story;
}).add('on top of another component', function () {
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
    gender: 'Male',
    ethnicities: ['Caucasian', 'Asian'],
    heightCm: 180,
    weightKg: 65,
    bust: 34,
    waist: 25,
    hips: 35
  };
  var story = _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_.ProfileBasicStats, {
      data: data
    }),
    _react2.default.createElement(
      'div',
      {
        style: {
          height: '50px',
          backgroundColor: 'gray',
          color: 'white',
          textAlign: 'center',
          padding: '10%'
        }
      },
      'This is another component'
    )
  );
  return story;
});