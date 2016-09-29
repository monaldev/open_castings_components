import React from 'react';
import {
  TextField,
  FlatButton,
  RaisedButton,
  FloatingActionButton,
  Chip,
} from 'material-ui';
import ContentAdd from 'material-ui/svg-icons/content/add';

const ProfileEditJobs = ({
  data,
  onSubmitEdit,
  onCancelEditMode,
  onChange,
}) => (
  <div>
    <span
      style={{
        fontWeight: '700',
      }}
    >
      Name:
    </span>
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
      }}
    >
      <TextField
        floatingLabelText="Add Job"
        onChange={(event) => {
          const newJobs = [...data, event.target.value];
          onChange(newJobs);
        }}
        style={{
          width: '10em',
        }}
      />
      <FloatingActionButton
        mini
        primary
        style={{
          marginTop: '1em',
          marginLeft: '1em',
        }}
      >
        <ContentAdd />
      </FloatingActionButton>
    </div>
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      {
        data.map((job, index) => (
          <Chip
            key={job}
            onRequestDelete={() => {
              const newJobs = [
                ...data.slice(0, index),
                ...data.slice(index + 1, data.length),
              ];
              onChange(newJobs);
            }}
            style={{
              margin: '2px',
            }}
          >
            {job}
          </Chip>
        ))
      }
    </div>
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
      }}
    >
      <FlatButton
        label="Cancel"
        onTouchTap={() => {
          onCancelEditMode();
        }}
      />
      <RaisedButton
        label="Submit"
        secondary
        onTouchTap={() => {
          onSubmitEdit();
          onCancelEditMode();
        }}
      />
    </div>
  </div>
);
ProfileEditJobs.propTypes = {
  data: React.PropTypes.array,
  onSubmitEdit: React.PropTypes.func,
  onChange: React.PropTypes.func,
  onCancelEditMode: React.PropTypes.func,
};

export default ProfileEditJobs;
