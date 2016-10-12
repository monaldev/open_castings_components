import React from 'react';
import { storiesOf } from '@kadira/storybook';

import { ProfileExperienceCategory } from '~/';
import LoadMuiTheme from '~/.storybook/load_mui_theme';

storiesOf('ProfileExperienceCategory', module)
.addDecorator(story => (
    <LoadMuiTheme>
      <div
        style={{
          width: '350px',
          margin: 'auto',
          position: 'relative',
        }}
      >
        {story()}
      </div>
    </LoadMuiTheme>
  ))
  .add('individual', () => {
    const children = [
      {
        title: 'The lion king',
        role: 'Ensenble/Mufasa understudy',
        director: 'Julie Peloni',
        company: 'Disney Entertainment',
        location: 'Los Angeles',
      },
    ];
    const count = children.length;
    const categoryName = `Theater (${count})`;
    const story = (
      <ProfileExperienceCategory
        children={children}
        categoryName={categoryName}
      />
    );
    return story;
  });