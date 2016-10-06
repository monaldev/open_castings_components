import React from 'react';
import { storiesOf } from '@kadira/storybook';

import { FacebookFollowers } from '~/';

storiesOf('Social', module)
.addDecorator(story => (
    <div
      style={{
        width: '50px',
        margin: 'auto',
        position: 'relative',
      }}
    >
      {story()}
    </div>
  ))
  .add('FacebookFollowers', () => {
    const story = <FacebookFollowers profileId="envato" >Hello</FacebookFollowers>;
    return story;
  });
