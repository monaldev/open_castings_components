import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { ProductionDetailsForm } from '~/';

storiesOf('ProductionDetailsForm', module)
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
        <ProductionDetailsForm
          data={undefined}
          onChange={action('Changed!')}
        />
      );
      return story;
    }
  );
