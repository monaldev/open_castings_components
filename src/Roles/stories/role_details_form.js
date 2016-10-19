import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { RoleDetailsForm } from '~/';

storiesOf('RoleDetailsForm', module)
  .addDecorator(story => (
    <div
      style={{
        width: '50%',
        margin: 'auto',
      }}
    >
      {story()}
    </div>
  ))
  .add(
    'nothing selected',
    () => {
      const story = (
        <RoleDetailsForm
          selected={{
            title: 'hello',
            type: 2,
            unionStatus: 1,
            gender: 1,
            ageMin: 10,
            ageMax: 90,
            ethnicities: ['a', 'b', 'c', 'd'],
            description: undefined,
            requiresNudity: false,
          }}
          onChange={action('Changed!')}
        />
      );
      return story;
    }
  );
