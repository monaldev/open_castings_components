import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { ProductionTypeSelection } from '~/';

storiesOf('ProductionTypeSelection', module)
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
        <ProductionTypeSelection
          selected={undefined}
          onChange={action('Changed!')}
        />
      );
      return story;
    }
  )
  .add(
    'category selected',
    () => {
      const story = (
        <ProductionTypeSelection
          selected={{
            category: '2',
            sub: '0',
          }}
          onChange={action('Changed!')}
        />
      );
      return story;
    }
  )
  .add(
    'both selected',
    () => {
      const story = (
        <ProductionTypeSelection
          selected={{
            category: '1',
            sub: '1',
          }}
          onChange={action('Changed!')}
        />
      );
      return story;
    }
  );
