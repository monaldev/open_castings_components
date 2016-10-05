import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';

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
    };
    const story = (
      <ProfileOverview
        data={data}
      >
        <div>Test</div>
        <div>Test2</div>
      </ProfileOverview>
    );
    return story;
  })
  .add('private view', () => (
    <ProfileOverview
      data={{
        fName: 'Rohit',
        lName: 'Ravikoti',
        jobs: ['Model', 'Actor'],
        location: 'Irvine, CA 92612',
        socialProfiles: {
          twitter: 'envato',
          facebook: 'envato',
        },
      }}
      editable
      onToggleEditMode={linkTo('ProfileOverview', 'private view - edit mode')}
      onChange={action('Changed!')}
    >
      <div>Test</div>
      <div>Test2</div>
    </ProfileOverview>
  ));
