var _this = this;

import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { specs, describe, it } from 'storybook-addon-specifications';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import { ocEditableHOC } from '~/';
import LoadMuiTheme from '~/.storybook/load_mui_theme';

var normalComponent = function normalComponent() {
  return React.createElement(
    'div',
    null,
    'Test Normal Component (Click me to open)'
  );
};
var editComponent = function editComponent(_ref) {
  var onCancelEditMode = _ref.onCancelEditMode;
  var onSubmitEdit = _ref.onSubmitEdit;
  return React.createElement(
    'div',
    null,
    'Test Edit Component',
    React.createElement(
      'button',
      { onClick: onCancelEditMode.bind(_this) },
      'Close'
    ),
    React.createElement(
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
var EditableContainer = ocEditableHOC(normalComponent, editComponent);

storiesOf('ocEditableHOC', module).addDecorator(function (story) {
  return React.createElement(
    LoadMuiTheme,
    null,
    React.createElement(
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
  var story = React.createElement(
    EditableContainer,
    {
      onSubmitEdit: action('Submit!'),
      onChange: action('Change!')
    },
    'Hello'
  );

  specs(function () {
    return describe('ocEditableHOC', function () {
      it('should not show the popover by default', function () {
        var output = shallow(story);
        expect(output.find('Popover').at(0).prop('open')).to.equal(false);
      });
    });
  });
  return story;
}).add('edit view', function () {
  var story = React.createElement(
    EditableContainer,
    {
      onSubmitEdit: action('Submit!'),
      onChange: action('Change!'),
      editMode: true
    },
    'Hello'
  );

  specs(function () {
    return describe('ocEditableHOC', function () {
      it('should show the popup when setting editMode', function () {
        var output = shallow(story);
        expect(output.find('Popover').at(0).prop('open')).to.equal(true);
      });
    });
  });
  return story;
});