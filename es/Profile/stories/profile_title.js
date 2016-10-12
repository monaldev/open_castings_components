import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { ProfileTitle } from '~/';
import LoadMuiTheme from '~/.storybook/load_mui_theme';

storiesOf('ProfileTitle', module).addDecorator(function (story) {
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
}).add('public view', function () {
  var data = {
    fName: 'Rohit',
    lName: 'Ravikoti'
  };
  var story = React.createElement(
    ProfileTitle,
    {
      data: data
    },
    React.createElement(
      'div',
      null,
      'Test'
    ),
    React.createElement(
      'div',
      null,
      'Test2'
    )
  );

  return story;
}).add('private view', function () {
  return React.createElement(
    ProfileTitle,
    {
      data: {
        fName: 'Rohit',
        lName: 'Ravikoti'
      },
      editable: true,
      onSubmitEdit: action('edited!'),
      onChange: action('Changed!')
    },
    React.createElement(
      'div',
      null,
      'Test'
    ),
    React.createElement(
      'div',
      null,
      'Test2'
    )
  );
});