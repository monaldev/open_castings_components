import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { ProfileSkills } from '~/';

storiesOf('ProfileSkills', module)
.addDecorator(story => (
      <div
        style={{
          width: '300px',
          margin: 'auto',
          position: 'relative',
        }}
      >
        {story()}
      </div>
  ))
  .add('public view', () => (
    <ProfileSkills
      data={[
        'Dancing',
        'Basketball',
        'Singing',
        'Golf',
      ]}
    />
  ));
