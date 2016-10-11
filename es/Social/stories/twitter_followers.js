import React from 'react';
import { storiesOf } from '@kadira/storybook';

import { TwitterFollowers } from '~/';

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
}).add('TwitterFollowers', function () {
  var story = React.createElement(
    TwitterFollowers,
    { profileId: 'jvargas_01' },
    'Hello'
  );
  return story;
});