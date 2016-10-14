import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { OCCitySearch, OCFormsyCitySearch } from '~/';
import Formsy from 'formsy-react';

storiesOf('OCCitySearch', module)
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
  .add('default view', () => {
    const story = (
      <OCCitySearch
        value="Costa Mesa, CA"
        onLocationSelected={action('location!')}
      />
    );
    return story;
  });

storiesOf('OCFormsyCitySearch', module)
  .addDecorator(story => (
    <div
      style={{
        width: '50%',
        margin: 'auto',
        position: 'relative',
      }}
    >
      <Formsy.Form>
        {story()}
      </Formsy.Form>
    </div>
  ))
  .add('default view', () => {
    const story = (
      <OCFormsyCitySearch
        name="city"
        value="Costa Mesa, CA"
        onLocationSelected={action('location!')}
      />
    );
    return story;
  });
