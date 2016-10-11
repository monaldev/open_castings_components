import React from 'react';
import { storiesOf } from '@kadira/storybook';

import { ProfileEducationTrainingItem } from '~/';
import LoadMuiTheme from '~/.storybook/load_mui_theme';

storiesOf('ProfileEducationTrainingItem', module).addDecorator(function (story) {
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
    school: 'Cal State University of Fullerton',
    teacher: 'Elizabeth Brown',
    degree: 'BA',
    course: 'Dance Anatomy',
    location: 'Fullerton, CA'
  };
  var story = React.createElement(ProfileEducationTrainingItem, {
    data: data
  });
  return story;
});