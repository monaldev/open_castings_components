import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { RoleDetailsForm } from '~/';
import roleTypes from '../components/role_types';

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
            unionStatus: 'UNION_AND_NONUNION',
            gender: 'ANY_GENDER',
            ageMin: 10,
            ageMax: 90,
            ethnicities: Object.keys(roleTypes.ethnicities),
            description: undefined,
            requiresNudity: false,
          }}
          onChange={action('Changed!')}
          onCancel={action('Cancel!')}
        />
      );
      return story;
    }
  );
