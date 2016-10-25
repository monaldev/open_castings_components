import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { ProfileTitle } from '~/';

storiesOf('ProfileTitle', module)
.addDecorator(story => (
      <div
        style={{
          width: '50%',
          margin: 'auto',
          position: 'relative',
        }}
      >
        {story()}
      </div>
  ))
  .add('public view', () => {
    const data = {
      fName: 'Rohit',
      lName: 'Ravikoti',
    };
    const story = (
      <ProfileTitle
        data={data}
      >
        <div>Test</div>
        <div>Test2</div>
      </ProfileTitle>
    );

    return story;
  })
  .add('private view', () => (
    <ProfileTitle
      data={{
        fName: 'Rohit',
        lName: 'Ravikoti',
      }}
      editable
      onSubmitEdit={action('edited!')}
      onChange={action('Changed!')}
    >
      <div>Test</div>
      <div>Test2</div>
    </ProfileTitle>
  ));
