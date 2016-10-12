import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { AuditionOverview } from '~/';
import LoadMuiTheme from '~/.storybook/load_mui_theme';

storiesOf('AuditionOverview', module)
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
    <AuditionOverview
      data={{
        production: {
          name: 'TOP TALENT CASTING',
          type: 'Short Film',
          location: 'Los Angeles, CA',
        },
        role: {
          name: '"Yum" Audition',
          description: 'Casting "Yum," a short horror film about a mysterious entity locked away in the attic of a suburban house. General Audition.',
          type: 'Lead',
          ageMin: '20',
          ageMax: '25',
          ethnicity: 'Caucasian',
          gender: 'Male',
          compensationDetails: '',
        },
      }}
    />
  ));
