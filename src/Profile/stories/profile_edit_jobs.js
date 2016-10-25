import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { ProfileEditJobs } from '~/';

storiesOf('ProfileEditJobs', module)
.addDecorator(story => (
      <div
        style={{
          width: '15em',
          margin: 'auto',
          position: 'relative',
        }}
      >
        {story()}
      </div>
  ))
  .add('public view', () => {
    const data = ['Actor', 'Model'];
    const story = (
      <ProfileEditJobs
        data={data}
        onChange={action('Changed!')}
      />
    );

    return story;
  });
