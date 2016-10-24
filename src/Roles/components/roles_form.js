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
    autoComplete={false}
    {...rest}
  >
    <div className="page-header">
      <h3>Roles</h3>
    </div>
    <RoleListFormsy
      name="roles"
      value={selected ? selected.roles : undefined}
      validations={{
        validRoles: (values, value) =>
          (value.length > 0 ? true : 'Please add at least one role'),
      }}
      required
    />
  </OCFormContainer>
);

RolesForm.propTypes = {
  selected: React.PropTypes.object,
};

export default RolesForm;
