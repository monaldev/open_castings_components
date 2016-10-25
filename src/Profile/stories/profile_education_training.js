import React from 'react';
import { storiesOf } from '@kadira/storybook';

import { ProfileEducationTraining } from '~/';

storiesOf('ProfileEducationTraining', module)
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
  .add('individual', () => {
    const data = [
      {
        school: 'Cal State University of Fullerton',
        teacher: 'Elizabeth Brown',
        degree: 'BA',
        course: 'Dance Anatomy',
        location: 'Fullerton, CA',
      },
      {
        school: 'Cal State University of Fullerton',
        teacher: 'Elizabeth Brown',
        degree: 'BA',
        course: 'Dance Anatomy',
        location: 'Fullerton, CA',
      },
    ];
    const story = (
      <ProfileEducationTraining
        data={data}
      />
    );
    return story;
  });
