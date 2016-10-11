import React from 'react';
import { storiesOf } from '@kadira/storybook';

import { FacebookFollowers } from '~/';

storiesOf('Social', module).addDecorator(function (story) {
  return React.createElement(
    'div',
    {
      style: {
        width: '50px',
        margin: 'auto',
        position: 'relative'
      }
    },
    story()
  );
}).add('FacebookFollowers', function () {
  var story = React.createElement(
    FacebookFollowers,
    { profileId: 'envato' },
    'Hello'
  );
  return story;
});