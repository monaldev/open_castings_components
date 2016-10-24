import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { RoleBuildAuditionFormsy, OCFormContainer } from '~/';

storiesOf('RoleBuildAuditionFormsy', module)
  .addDecorator(story => (
    <div
      style={{
        width: '50%',
        margin: 'auto',
      }}
    >
      <OCFormContainer
        layout="vertical"
        onChange={action('Change!')}
      >
        {story()}
      </OCFormContainer>
    </div>
  ))
  .add(
    'nothing selected',
    () => {
      const story = (
        <RoleBuildAuditionFormsy
          value={[
            'first side',
            'second side',
          ]}
          name="audition"
        />
      );
      return story;
    }
  );
