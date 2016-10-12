import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { ProductionTypeSelection } from '~/';
import LoadMuiTheme from '~/.storybook/load_mui_theme';

storiesOf('ProductionTypeSelection', module)
  .addDecorator(story => (
    <LoadMuiTheme>
      <div
        style={{
          width: '50%',
          margin: 'auto',
        }}
      >
        {story()}
      </div>
    </LoadMuiTheme>
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
