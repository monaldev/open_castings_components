import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { AuditionWelcome } from '~/';
import LoadMuiTheme from '~/.storybook/load_mui_theme';

storiesOf('AuditionWelcome', module)
.addDecorator(story => (
    <LoadMuiTheme>
      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
        }}
      >
        {story()}
      </div>
    </LoadMuiTheme>
  ))
  .add('some emojies as the text', () => (
    <AuditionWelcome
      data={{
        production: {
          name: 'TOP TALENT CASTING',
        },
      }}
    />
  ));
