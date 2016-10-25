import React from 'react';
import { ocEditableHOC } from '~/Generic/components';
import ProfileEditJobs from './profile_edit_jobs';
import {
  Button,
  Glyphicon,
} from 'react-bootstrap';

const Jobs = ({ jobs }) => (
  <div style={{ display: 'flex' }}>
    {jobs.join(' / ')}
  </div>
);
Jobs.propTypes = {
  jobs: React.PropTypes.arrayOf(React.PropTypes.string),
};

const normalJobs = ({ data }) => (
  <div
    style={{
      display: 'flex',
    }}
  >
    <Jobs jobs={data} />
    <Glyphicon glyph="edit"
      style={{
        width: 15,
        height: 15,
        marginLeft: '5px',
      }}
    />
  </div>
);
normalJobs.propTypes = {
  data: React.PropTypes.array,
};
const EditableJobs = ocEditableHOC(normalJobs, ProfileEditJobs);

const ProfileJobs = ({ data, editable, editMode, onSubmitEdit, onChange }) => (
  <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
    {
      editable ?
        <EditableJobs
          data={data}
          onSubmitEdit={onSubmitEdit}
          onChange={onChange}
          editMode={editMode}
        />
      :
        <Jobs jobs={data} />
    }
  </div>
);
ProfileJobs.propTypes = {
  data: React.PropTypes.array.isRequired,
  editable: React.PropTypes.bool,
  editMode: React.PropTypes.bool,
  onChange: React.PropTypes.func,
  onSubmitEdit: React.PropTypes.func,
};

export default ProfileJobs;
