import React from 'react';
import {
  Input,
  Button,
  Glyphicon,
  Badge,
} from 'react-bootstrap';

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
      <Input
        type="text"
        floatingLabelText="Add Job"
        onChange={(event) => {
          const newJobs = [...data, event.target.value];
          onChange(newJobs);
        }}
        style={{
          width: '10em',
        }}
      />
      <Button
        mini
        primary
        style={{
          marginTop: '1em',
          marginLeft: '1em',
        }}
      >
        <Glyphicon glyph="plus" />
      </Button>
    </div>
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      {
        data.map((job, index) => (
          <Badge
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
          </Badge>
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
      <Button
        label="Cancel"
        onTouchTap={() => {
          onCancelEditMode();
        }}
      />
      <Button
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
