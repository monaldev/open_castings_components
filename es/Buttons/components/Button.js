var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

var buttonStyles = {
  border: '1px solid #eee',
  borderRadius: 3,
  backgroundColor: '#FFFFFF',
  cursor: 'pointer',
  fontSize: 15,
  padding: '3px 10px'
};

var Button = function Button(_ref) {
  var children = _ref.children;
  var onClick = _ref.onClick;
  var _ref$style = _ref.style;
  var style = _ref$style === undefined ? {} : _ref$style;
  return React.createElement(
    'button',
    {
      style: _extends({}, buttonStyles, style),
      onClick: onClick
    },
    children
  );
};

process.env.NODE_ENV !== "production" ? Button.propTypes = {
  children: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func,
  style: React.PropTypes.object
} : void 0;

export default Button;