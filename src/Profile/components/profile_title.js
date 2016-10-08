import React from 'react';
import {
  TextField,
  FlatButton,
  RaisedButton,
} from 'material-ui';
import { ocEditableHOC } from '../../Generic/components';
import Edit from 'material-ui/svg-icons/editor/mode-edit';

const Title = ({ title }) => (
  <div
    style={{
      fontSize: '1.5em',
    }}
  >
    {title}
  </div>
);
Title.propTypes = {
  title: React.PropTypes.string,
};

const editTitle = ({ data, onSubmitEdit, onCancelEditMode, onChange }) => (
  <div>
    <span
      style={{
        fontWeight: '700',
      }}
    >
      Name:
    </span>
    <div
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <TextField
        floatingLabelText="First"
        value={data.fName}
        onChange={(e) => onChange({ ...data, fName: e.target.value })}
        style={{
          width: '10em',
        }}
      />
      <TextField
        floatingLabelText="Last"
        value={data.lName}
        onChange={(e) => onChange({ ...data, lName: e.target.value })}
        style={{
          margin: 'auto 5px',
          width: '10em',
        }}
      />
    </div>
    <div
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}
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
editTitle.propTypes = {
  data: React.PropTypes.object,
  onSubmitEdit: React.PropTypes.func,
  onChange: React.PropTypes.func,
  onCancelEditMode: React.PropTypes.func,
};

const normalTitle = ({ data, hovered }) => (
  <div
    style={{
      display: 'flex',
      backgroundColor: hovered ? 'lightgray' : 'transparent',
      cursor: 'pointer',
    }}
  >
    <Title title={`${data.fName} ${data.lName}`} />
    <Edit
      style={{
        width: 15,
        height: 15,
        marginLeft: '5px',
      }}
    />
  </div>
);
normalTitle.propTypes = {
  data: React.PropTypes.object,
  hovered: React.PropTypes.bool,
};

const EditableTitle = ocEditableHOC(normalTitle, editTitle);

const ProfileTitle = ({ data, editable, editMode, onSubmitEdit, onChange }) => (
  <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
    {
      editable ?
        <EditableTitle
          data={data}
          onSubmitEdit={onSubmitEdit}
          onChange={onChange}
          editMode={editMode}
        />
      :
        <Title title={`${data.fName} ${data.lName}`} />
    }
  </div>
);
ProfileTitle.propTypes = {
  data: React.PropTypes.object.isRequired,
  editable: React.PropTypes.bool,
  editMode: React.PropTypes.bool,
  onChange: React.PropTypes.func,
  onSubmitEdit: React.PropTypes.func,
};

export default ProfileTitle;
