import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { specs, describe, it } from 'storybook-addon-specifications';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { stub } from 'sinon';

import { Button } from '~/';

storiesOf('Button', module).addWithInfo('default view', 'Basic usage', function () {
  var story = React.createElement(
    Button,
    { onClick: action('button clicked') },
    'Hello'
  );

  specs(function () {
    return describe('Button', function () {
      it('Should have the Hello label', function () {
        var output = shallow(story);
        expect(output.find('button').at(0).text()).to.equal('Hello');
      });
      it('Should call onClick when clicked', function () {
        var actionSpy = { stubbed: stub() };
        var actionStory = React.createElement(
          Button,
          { onClick: actionSpy.stubbed },
          'Hello'
        );
        var output = shallow(actionStory);
        output.find('button').at(0).simulate('click');
        expect(actionSpy.stubbed.called).to.equal(true);
      });
    });
  });
  return story;
}).add('some emojies as the text', function () {
  return React.createElement(
    Button,
    null,
    '\uD83D\uDE00 \uD83D\uDE0E \uD83D\uDC4D \uD83D\uDCAF'
  );
}).add('custom styles', function () {
  var style = {
    fontSize: 20,
    textTransform: 'uppercase',
    color: '#FF8833'
  };
  return React.createElement(
    Button,
    { style: style },
    'Hello'
  );
});