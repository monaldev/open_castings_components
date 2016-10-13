import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { ProductionDetailsForm } from '~/';
import LoadMuiTheme from '~/.storybook/load_mui_theme';

storiesOf('ProductionDetailsForm', module)
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
        <ProductionDetailsForm
          data={undefined}
          onChange={action('Changed!')}
        />
      );
      return story;
    }
  );
