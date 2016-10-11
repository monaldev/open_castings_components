import React from 'react';
import { storiesOf } from '@kadira/storybook';

import { ProfileOverview } from '~/';
import LoadMuiTheme from '~/.storybook/load_mui_theme';

storiesOf('ProfileOverview', module).addDecorator(function (story) {
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
  var story = React.createElement(ProfileOverview, {
    data: data
  });
  return story;
});