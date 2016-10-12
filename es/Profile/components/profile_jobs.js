import React from 'react';
import { ocEditableHOC } from '../../Generic/components';
import Edit from 'material-ui/svg-icons/editor/mode-edit';
import ProfileEditJobs from './profile_edit_jobs';

var Jobs = function Jobs(_ref) {
  var jobs = _ref.jobs;
  return React.createElement(
    'div',
    { style: { display: 'flex' } },
    jobs.join(' / ')
  );
};
process.env.NODE_ENV !== "production" ? Jobs.propTypes = {
  jobs: React.PropTypes.arrayOf(React.PropTypes.string)
} : void 0;

var normalJobs = function normalJobs(_ref2) {
  var data = _ref2.data;
  return React.createElement(
    'div',
    {
      style: {
        display: 'flex'
      }
    },
    React.createElement(Jobs, { jobs: data }),
    React.createElement(Edit, {
      style: {
        width: 15,
        height: 15,
        marginLeft: '5px'
      }
    })
  );
};
process.env.NODE_ENV !== "production" ? normalJobs.propTypes = {
  data: React.PropTypes.array
} : void 0;
var EditableJobs = ocEditableHOC(normalJobs, ProfileEditJobs);

var ProfileJobs = function ProfileJobs(_ref3) {
  var data = _ref3.data;
  var editable = _ref3.editable;
  var editMode = _ref3.editMode;
  var onSubmitEdit = _ref3.onSubmitEdit;
  var onChange = _ref3.onChange;
  return React.createElement(
    'div',
    { style: { display: 'flex', justifyContent: 'flex-start' } },
    editable ? React.createElement(EditableJobs, {
      data: data,
      onSubmitEdit: onSubmitEdit,
      onChange: onChange,
      editMode: editMode
    }) : React.createElement(Jobs, { jobs: data })
  );
};
process.env.NODE_ENV !== "production" ? ProfileJobs.propTypes = {
  data: React.PropTypes.array.isRequired,
  editable: React.PropTypes.bool,
  editMode: React.PropTypes.bool,
  onChange: React.PropTypes.func,
  onSubmitEdit: React.PropTypes.func
} : void 0;

export default ProfileJobs;