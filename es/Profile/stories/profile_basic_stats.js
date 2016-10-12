import React from 'react';
import { storiesOf } from '@kadira/storybook';

import { ProfileBasicStats } from '~/';
import LoadMuiTheme from '~/.storybook/load_mui_theme';

storiesOf('ProfileBasicStats', module).addDecorator(function (story) {
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
  var story = React.createElement(ProfileBasicStats, {
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
  var story = React.createElement(
    'div',
    null,
    React.createElement(ProfileBasicStats, {
      data: data
    }),
    React.createElement(
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