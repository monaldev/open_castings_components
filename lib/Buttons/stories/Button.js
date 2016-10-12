'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _storybook = require('@kadira/storybook');

var _storybookAddonSpecifications = require('storybook-addon-specifications');

var _enzyme = require('enzyme');

var _chai = require('chai');

var _sinon = require('sinon');

var _ = require('~/');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _storybook.storiesOf)('Button', module).addWithInfo('default view', 'Basic usage', function () {
  var story = _react2.default.createElement(
    _.Button,
    { onClick: (0, _storybook.action)('button clicked') },
    'Hello'
  );

  (0, _storybookAddonSpecifications.specs)(function () {
    return (0, _storybookAddonSpecifications.describe)('Button', function () {
      (0, _storybookAddonSpecifications.it)('Should have the Hello label', function () {
        var output = (0, _enzyme.shallow)(story);
        (0, _chai.expect)(output.find('button').at(0).text()).to.equal('Hello');
      });
      (0, _storybookAddonSpecifications.it)('Should call onClick when clicked', function () {
        var actionSpy = { stubbed: (0, _sinon.stub)() };
        var actionStory = _react2.default.createElement(
          _.Button,
          { onClick: actionSpy.stubbed },
          'Hello'
        );
        var output = (0, _enzyme.shallow)(actionStory);
        output.find('button').at(0).simulate('click');
        (0, _chai.expect)(actionSpy.stubbed.called).to.equal(true);
      });
    });
  });
  return story;
}).add('some emojies as the text', function () {
  return _react2.default.createElement(
    _.Button,
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
    _.Button,
    { style: style },
    'Hello'
  );
});