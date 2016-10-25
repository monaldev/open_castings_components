import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { ProfileImage } from '~/';

storiesOf('ProfileImage', module)
  .add('default view', () => (
    <ProfileImage onClick={ action('ProfileImage clicked') }>Hello</ProfileImage>
  ))
  .add('some emojies as the text', () => (
    <ProfileImage>😀 😎 👍 💯</ProfileImage>
  ))
  .add('custom styles', () => {
    const style = {
      fontSize: 20,
      textTransform: 'uppercase',
      color: '#FF8833',
    };
    return (
      <ProfileImage style={ style }>Hello</ProfileImage>
    );
  });
