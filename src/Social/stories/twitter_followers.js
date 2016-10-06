import React from 'react';
import { storiesOf } from '@kadira/storybook';

import { TwitterFollowers } from '~/';

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
  .add('TwitterFollowers', () => {
    const story = <TwitterFollowers profileId="jvargas_01" >Hello</TwitterFollowers>;
    return story;
  });
