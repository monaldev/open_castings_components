import React from 'react';
import { shallow, mount } from 'enzyme';
import { Button } from '../components';
import { expect } from 'chai';
import sinon from 'sinon';
var _global = global;
var describe = _global.describe;
var it = _global.it;


describe('Button', function () {
  it('should show the given text', function () {
    var text = 'The Text';
    var wrapper = shallow(React.createElement(
      Button,
      null,
      text
    ));
    expect(wrapper.text()).to.be.equal(text);
  });

  it('should handle the click event', function () {
    var clickMe = sinon.stub();
    // Here we do a JSDOM render. So, that's why we need to
    // wrap this with a div.
    var wrapper = mount(React.createElement(
      'div',
      null,
      React.createElement(
        Button,
        { onClick: clickMe },
        'ClickMe'
      )
    ));

    wrapper.find('button').simulate('click');
    expect(clickMe.callCount).to.be.equal(1);
  });
});