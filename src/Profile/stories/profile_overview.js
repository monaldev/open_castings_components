import React from 'react';
import { storiesOf } from '@kadira/storybook';

import { ProfileOverview } from '~/';
import LoadMuiTheme from '~/.storybook/load_mui_theme';

storiesOf('ProfileOverview', module)
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
      <ProfileOverview
        data={data}
      />
    );
    return story;
  });
