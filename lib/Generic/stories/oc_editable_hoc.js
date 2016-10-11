'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _storybook = require('@kadira/storybook');

var _storybookAddonSpecifications = require('storybook-addon-specifications');

var _enzyme = require('enzyme');

var _chai = require('chai');

var _ = require('~/');

var _load_mui_theme = require('~/.storybook/load_mui_theme');

var _load_mui_theme2 = _interopRequireDefault(_load_mui_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var normalComponent = function normalComponent() {
  return _react2.default.createElement(
    'div',
    null,
    'Test Normal Component (Click me to open)'
  );
};
var editComponent = function editComponent(_ref) {
  var onCancelEditMode = _ref.onCancelEditMode;
  var onSubmitEdit = _ref.onSubmitEdit;
  return _react2.default.createElement(
    'div',
    null,
    'Test Edit Component',
    _react2.default.createElement(
      'button',
      { onClick: onCancelEditMode.bind(undefined) },
      'Close'
    ),
    _react2.default.createElement(
      'button',
      {
        onClick: function onClick() {
          onSubmitEdit();
          onCancelEditMode();
        }
      },
      'Submit'
    )
  );
};
var EditableContainer = (0, _.ocEditableHOC)(normalComponent, editComponent);

(0, _storybook.storiesOf)('ocEditableHOC', module).addDecorator(function (story) {
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
}).add('default view', function () {
  var story = _react2.default.createElement(
    EditableContainer,
    {
      onSubmitEdit: (0, _storybook.action)('Submit!'),
      onChange: (0, _storybook.action)('Change!')
    },
    'Hello'
  );

  (0, _storybookAddonSpecifications.specs)(function () {
    return (0, _storybookAddonSpecifications.describe)('ocEditableHOC', function () {
      (0, _storybookAddonSpecifications.it)('should not show the popover by default', function () {
        var output = (0, _enzyme.shallow)(story);
        (0, _chai.expect)(output.find('Popover').at(0).prop('open')).to.equal(false);
      });
    });
  });
  return story;
}).add('edit view', function () {
  var story = _react2.default.createElement(
    EditableContainer,
    {
      onSubmitEdit: (0, _storybook.action)('Submit!'),
      onChange: (0, _storybook.action)('Change!'),
      editMode: true
    },
    'Hello'
  );

  (0, _storybookAddonSpecifications.specs)(function () {
    return (0, _storybookAddonSpecifications.describe)('ocEditableHOC', function () {
      (0, _storybookAddonSpecifications.it)('should show the popup when setting editMode', function () {
        var output = (0, _enzyme.shallow)(story);
        (0, _chai.expect)(output.find('Popover').at(0).prop('open')).to.equal(true);
      });
    });
  });
  return story;
});