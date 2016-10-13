import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { ProfileMorePhotos } from '~/';
import LoadMuiTheme from '~/.storybook/load_mui_theme.js';
import faker from 'faker';

storiesOf('ProfileMorePhotos', module)
  .addDecorator(story => (
    <LoadMuiTheme>
      <div
        style={{
          width: '600px',
          margin: 'auto',
          position: 'relative',
        }}
      >
        {story() }
      </div>
    </LoadMuiTheme>
  ))
  .add('preview', () => {
    const style = {
      margin: '4px',
      backgroundColor: 'transparent',
    };
    const data = [];
    for (let i = 0; i < 8; i++) {
      data.push(faker.random.image());
    }
    const story = (
      <ProfileMorePhotos
        data={data}
        style={style}
        numElementsPerPanel={3}
      />
    );
    return story;
  });
