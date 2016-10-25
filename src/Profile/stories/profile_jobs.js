import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { ProfileJobs } from '~/';

storiesOf('ProfileJobs', module)
.addDecorator(story => (
      <div
        style={{
          width: '50%',
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
      <ProfileJobs
        data={data}
      >
        <div>Test</div>
        <div>Test2</div>
      </ProfileJobs>
    );

    return story;
  })
  .add('private view', () => (
    <ProfileJobs
      data={[
        'Actor',
        'Model',
      ]}
      editable
      onSubmitEdit={action('edited!')}
      onChange={action('Changed!')}
    >
      <div>Test</div>
      <div>Test2</div>
    </ProfileJobs>
  ));
