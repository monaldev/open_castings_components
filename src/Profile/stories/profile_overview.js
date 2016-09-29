import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import { specs, describe, it } from 'storybook-addon-specifications';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import { ProfileOverview } from '~/';
import LoadMuiTheme from '~/.storybook/load_mui_theme';

storiesOf('ProfileOverview', module)
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
  .add('public view', () => {
    const data = {
      fName: 'Rohit',
      lName: 'Ravikoti',
      jobs: ['Model', 'Actor'],
      location: 'Irvine, CA 92612',
    };
    const story = (
      <ProfileOverview
        data={data}
      >
        <div>Test</div>
        <div>Test2</div>
      </ProfileOverview>
    );

    specs(() => describe('ProfileOverview: public view', () => {
      it('Should have the Hello label', () => {
        const output = shallow(story);
        expect(output.find('button').at(0).text()).to.equal('Hello');
      });
    }));

    return story;
  })
  .add('private view', () => (
    <ProfileOverview
      data={{
        fName: 'Rohit',
        lName: 'Ravikoti',
        jobs: ['Model', 'Actor'],
        location: 'Irvine, CA 92612',
      }}
      editable
      onToggleEditMode={linkTo('ProfileOverview', 'private view - edit mode')}
      onChange={action('Changed!')}
    >
      <div>Test</div>
      <div>Test2</div>
    </ProfileOverview>
  ));
