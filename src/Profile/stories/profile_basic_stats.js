import React from 'react';
import { storiesOf } from '@kadira/storybook';

import { ProfileBasicStats } from '~/';
import LoadMuiTheme from '~/.storybook/load_mui_theme';

storiesOf('ProfileBasicStats', module)
.addDecorator(story => (
    <LoadMuiTheme>
      <div
        style={{
          width: '50%',
          margin: 'auto',
          position: 'relative',
        }}
      >
        {story()}
      </div>
    </LoadMuiTheme>
  ))
  .add('public view', () => {
    const data = {
      fName: 'Rohit',
      lName: 'Ravikoti',
      jobs: ['Model', 'Actor'],
      location: 'Irvine, CA 92612',
      socialProfiles: {
        twitter: 'envato',
        facebook: 'envato',
      },
      ageMin: 20,
      ageMax: 24,
      heightCm: 180,
    };
    const story = (
      <ProfileBasicStats
        data={data}
      />
    );
    return story;
  });
