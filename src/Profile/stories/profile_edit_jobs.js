import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { ProfileEditJobs } from '~/';
import LoadMuiTheme from '~/.storybook/load_mui_theme';

storiesOf('ProfileEditJobs', module)
.addDecorator(story => (
    <LoadMuiTheme>
      <div
        style={{
          width: '15em',
          margin: 'auto',
          position: 'relative',
        }}
      >
        {story()}
      </div>
    </LoadMuiTheme>
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
