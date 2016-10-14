import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { Button } from '~/';

storiesOf('Button', module)
  .addWithInfo(
    'default view',
    'Basic usage',
    () => {
      const story = <Button onClick={ action('button clicked') }>Hello</Button>;
      return story;
    }
  )
  .add('some emojies as the text', () => (
    <Button>😀 😎 👍 💯</Button>
  ))
  .add('custom styles', () => {
    const style = {
      fontSize: 20,
      textTransform: 'uppercase',
      color: '#FF8833',
    };
    return (
      <Button style={ style }>Hello</Button>
    );
  });
