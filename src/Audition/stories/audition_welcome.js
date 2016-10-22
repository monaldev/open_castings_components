import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { AuditionWelcome } from '~/';

storiesOf('AuditionWelcome', module)
.addDecorator(story => (
      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
        }}
      >
        {story()}
      </div>
  ))
  .add('default view', () => (
    <AuditionWelcome
      data={{
        production: {
          name: 'TOP TALENT CASTING',
        },
      }}
    />
  ));
