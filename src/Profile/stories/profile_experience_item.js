import React from 'react';
import { storiesOf } from '@kadira/storybook';

import { ProfileExperienceItem } from '~/';

storiesOf('ProfileExperienceItem', module)
.addDecorator(story => (
      <div
        style={{
          width: '350px',
          margin: 'auto',
          position: 'relative',
        }}
      >
        {story()}
      </div>
  ))
  .add('individual', () => {
    const data = {
      title: 'The lion king',
      role: 'Ensenble/Mufasa understudy',
      director: 'Julie Peloni',
      company: 'Disney Entertainment',
      location: 'Los Angeles',
    };
    const style = {
      display: 'flex',
      flexWrap: 'wrap',
    };
    const story = (
      <ProfileExperienceItem
        data={data}
        style={style}
      />
    );
    return story;
  });
