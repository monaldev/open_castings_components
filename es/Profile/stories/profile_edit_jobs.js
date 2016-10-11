import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { ProfileEditJobs } from '~/';
import LoadMuiTheme from '~/.storybook/load_mui_theme';

storiesOf('ProfileEditJobs', module).addDecorator(function (story) {
  return React.createElement(
    LoadMuiTheme,
    null,
    React.createElement(
      'div',
      {
        style: {
          width: '15em',
          margin: 'auto',
          position: 'relative'
        }
      },
      story()
    )
  );
}).add('public view', function () {
  var data = ['Actor', 'Model'];
  var story = React.createElement(ProfileEditJobs, {
    data: data,
    onChange: action('Changed!')
  });

  return story;
});