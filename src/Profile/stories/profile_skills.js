import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { ProfileSkills } from '~/';
import LoadMuiTheme from '~/.storybook/load_mui_theme';

storiesOf('ProfileSkills', module)
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
