import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { specs, describe, it } from 'storybook-addon-specifications';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { stub } from 'sinon';

import { Button } from '~/';

storiesOf('Button', module)
  .add('default view', () => {
    const story = <Button onClick={ action('button clicked') }>Hello</Button>;

    specs(() => describe('Button', () => {
      it('Should have the Hello label', () => {
        const output = shallow(story);
        expect(output.find('button').at(0).text()).to.equal('Hello');
      });
      it('Should call onClick when clicked', () => {
        const actionSpy = { stubbed: stub() };
        const actionStory = <Button onClick={ actionSpy.stubbed }>Hello</Button>;
        const output = shallow(actionStory);
        output.find('button').at(0).simulate('click');
        expect(actionSpy.stubbed.called).to.equal(true);
      });
    }));
    return story;
  })
  .add('some emojies as the text', () => (
    <Button>😀 😎 👍 💯</Button>
  ))
  .add('custom styles', () => {
    const style = {
      fontSize: 20,
      textTransform: 'uppercase',
      color: '#FF8833',
    };
    return (
      <Button style={ style }>Hello</Button>
    );
  });
