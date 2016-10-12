import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { ProfileSkills } from '~/';
import LoadMuiTheme from '~/.storybook/load_mui_theme';

storiesOf('ProfileSkills', module).addDecorator(function (story) {
  return React.createElement(
    LoadMuiTheme,
    null,
    React.createElement(
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
}).add('public view', function () {
  return React.createElement(ProfileSkills, {
    data: ['Dancing', 'Basketball', 'Singing', 'Golf']
  });
});