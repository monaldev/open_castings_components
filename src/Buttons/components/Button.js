import React from 'react';
import {
  Button as BSButton,
  OverlayTrigger,
  Popover,
} from 'react-bootstrap';

const buttonStyles = {
  border: '1px solid #eee',
  borderRadius: 3,
  backgroundColor: '#FFFFFF',
  cursor: 'pointer',
  fontSize: 15,
  padding: '3px 10px',
};

const popoverTop = (
  <Popover id="popover-positioned-bottom" title="Popover bottom">
    <strong>Holy guacamole!</strong> Check this info.
  </Popover>
);

const Button = ({ children, onClick, style = {} }) => (
  <OverlayTrigger
    trigger="click"
    placement="bottom"
    overlay={popoverTop}
    rootClose
  >
    <BSButton
      bsStyle="primary"
    >
      {children}
    </BSButton>
  </OverlayTrigger>
);

Button.propTypes = {
  children: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func,
  style: React.PropTypes.object,
};

export default Button;
