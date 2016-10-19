import React from 'react';
import Multiselect from 'react-bootstrap-multiselect';
require('./bootstrap_multiselect.css');

const OCBootstrapMultiselect = ({
  ...props,
}) => (
  <Multiselect
    {...props}
  />
);

export default OCBootstrapMultiselect;
