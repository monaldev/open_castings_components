import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { ProfileImage } from '~/';

storiesOf('ProfileImage', module).add('default view', function () {
  return React.createElement(
    ProfileImage,
    { onClick: action('ProfileImage clicked') },
    'Hello'
  );
}).add('some emojies as the text', function () {
  return React.createElement(
    ProfileImage,
    null,
    '\uD83D\uDE00 \uD83D\uDE0E \uD83D\uDC4D \uD83D\uDCAF'
  );
}).add('custom styles', function () {
  var style = {
    fontSize: 20,
    textTransform: 'uppercase',
    color: '#FF8833'
  };
  return React.createElement(
    ProfileImage,
    { style: style },
    'Hello'
  );
});