import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { ProfileJobs } from '~/';
import LoadMuiTheme from '~/.storybook/load_mui_theme';

storiesOf('ProfileJobs', module).addDecorator(function (story) {
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
  var data = ['Actor', 'Model'];
  var story = React.createElement(
    ProfileJobs,
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
    ProfileJobs,
    {
      data: ['Actor', 'Model'],
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