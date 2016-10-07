import React from 'react';
import { storiesOf } from '@kadira/storybook';

import { ProfileEducationTraining } from '~/';
import LoadMuiTheme from '~/.storybook/load_mui_theme';

storiesOf('ProfileEducationTraining', module)
.addDecorator(story => (
    <LoadMuiTheme>
      <div
        style={{
          width: '300px',
          margin: 'auto',
          position: 'relative',
        }}
      >
        {story()}
      </div>
    </LoadMuiTheme>
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
