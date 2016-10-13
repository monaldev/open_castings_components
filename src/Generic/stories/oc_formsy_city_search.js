import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { OCCitySearch, OCFormsyCitySearch } from '~/';
import Formsy from 'formsy-react';
import LoadMuiTheme from '~/.storybook/load_mui_theme';

storiesOf('OCCitySearch', module)
  .addDecorator(story => (
    <LoadMuiTheme>
      <div
        style={{
          width: '50%',
          margin: 'auto',
          position: 'relative',
        }}
      >
        {story()}
      </div>
    </LoadMuiTheme>
  ))
  .add('default view', () => {
    const story = (
      <OCCitySearch
        value="Costa Mesa, CA"
      />
    );
    return story;
  });

storiesOf('OCFormsyCitySearch', module)
  .addDecorator(story => (
    <LoadMuiTheme>
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
    </LoadMuiTheme>
  ))
  .add('default view', () => {
    const story = (
      <OCFormsyCitySearch
        name="city"
        value="Costa Mesa, CA"
      />
    );
    return story;
  });
