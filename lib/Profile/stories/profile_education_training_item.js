'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _storybook = require('@kadira/storybook');

var _ = require('~/');

var _load_mui_theme = require('~/.storybook/load_mui_theme');

var _load_mui_theme2 = _interopRequireDefault(_load_mui_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _storybook.storiesOf)('ProfileEducationTrainingItem', module).addDecorator(function (story) {
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
    school: 'Cal State University of Fullerton',
    teacher: 'Elizabeth Brown',
    degree: 'BA',
    course: 'Dance Anatomy',
    location: 'Fullerton, CA'
  };
  var story = _react2.default.createElement(_.ProfileEducationTrainingItem, {
    data: data
  });
  return story;
});