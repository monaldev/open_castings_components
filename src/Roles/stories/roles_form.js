import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { RolesForm } from '~/';
import roleTypes from '../components/role_types';

storiesOf('RolesForm', module)
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
        <RolesForm
          name="roles"
          selected={[
            {
              title: 'hello',
              type: 2,
              unionStatus: 'UNION_AND_NONUNION',
              gender: 'ANY_GENDER',
              ageMin: 10,
              ageMax: 90,
              ethnicities: Object.keys(roleTypes.ethnicities),
              description: 'This is a long description This is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long description',
              requiresNudity: false,
              sides: [],
            },
            {
              title: 'world you!',
              type: 2,
              unionStatus: 'UNION_AND_NONUNION',
              gender: 'ANY_GENDER',
              ageMin: 10,
              ageMax: 90,
              ethnicities: Object.keys(roleTypes.ethnicities),
              description: 'another description',
              requiresNudity: false,
              sides: ['hello', 'world'],
            },
          ]}
          onChange={action('Changed!')}
        />
      );
      return story;
    }
  );
