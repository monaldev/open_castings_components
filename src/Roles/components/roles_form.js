import React from 'react';
import {
  OCFormContainer,
  RoleListFormsy,
} from '../../';
const RolesForm = ({
  selected,
  ...rest,
}) => (
  <OCFormContainer
    layout="vertical"
    autocomplete="off"
    {...rest}
  >
    <div className="page-header">
      <h3>Roles</h3>
    </div>
    <RoleListFormsy
      name="roles"
      value={selected}
    />
  </OCFormContainer>
);

RolesForm.propTypes = {
  selected: React.PropTypes.array,
};

export default RolesForm;
