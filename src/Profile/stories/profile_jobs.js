import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { ProfileJobs } from '~/';
import LoadMuiTheme from '~/.storybook/load_mui_theme';

storiesOf('ProfileJobs', module)
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
