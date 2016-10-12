var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import { TextField, FlatButton, RaisedButton } from 'material-ui';
import { ocEditableHOC } from '../../Generic/components';
import Edit from 'material-ui/svg-icons/editor/mode-edit';

var Title = function Title(_ref) {
  var title = _ref.title;
  return React.createElement(
    'div',
    {
      style: {
        fontSize: '1.5em'
      }
    },
    title
  );
};
process.env.NODE_ENV !== "production" ? Title.propTypes = {
  title: React.PropTypes.string
} : void 0;

var editTitle = function editTitle(_ref2) {
  var data = _ref2.data;
  var onSubmitEdit = _ref2.onSubmitEdit;
  var onCancelEditMode = _ref2.onCancelEditMode;
  var _onChange = _ref2.onChange;
  return React.createElement(
    'div',
    null,
    React.createElement(
      'span',
      {
        style: {
          fontWeight: '700'
        }
      },
      'Name:'
    ),
    React.createElement(
      'div',
      {
        style: { display: 'flex', alignItems: 'center', justifyContent: 'center' }
      },
      React.createElement(TextField, {
        floatingLabelText: 'First',
        value: data.fName,
        onChange: function onChange(e) {
          return _onChange(_extends({}, data, { fName: e.target.value }));
        },
        style: {
          width: '10em'
        }
      }),
      React.createElement(TextField, {
        floatingLabelText: 'Last',
        value: data.lName,
        onChange: function onChange(e) {
          return _onChange(_extends({}, data, { lName: e.target.value }));
        },
        style: {
          margin: 'auto 5px',
          width: '10em'
        }
      })
    ),
    React.createElement(
      'div',
      {
        style: { display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }
      },
      React.createElement(FlatButton, {
        label: 'Cancel',
        onTouchTap: function onTouchTap() {
          onCancelEditMode();
        }
      }),
      React.createElement(RaisedButton, {
        label: 'Submit',
        secondary: true,
        onTouchTap: function onTouchTap() {
          onSubmitEdit();
          onCancelEditMode();
        }
      })
    )
  );
};
process.env.NODE_ENV !== "production" ? editTitle.propTypes = {
  data: React.PropTypes.object,
  onSubmitEdit: React.PropTypes.func,
  onChange: React.PropTypes.func,
  onCancelEditMode: React.PropTypes.func
} : void 0;

var normalTitle = function normalTitle(_ref3) {
  var data = _ref3.data;
  var hovered = _ref3.hovered;
  return React.createElement(
    'div',
    {
      style: {
        display: 'flex',
        backgroundColor: hovered ? 'lightgray' : 'transparent',
        cursor: 'pointer'
      }
    },
    React.createElement(Title, { title: data.fName + ' ' + data.lName }),
    React.createElement(Edit, {
      style: {
        width: 15,
        height: 15,
        marginLeft: '5px'
      }
    })
  );
};
process.env.NODE_ENV !== "production" ? normalTitle.propTypes = {
  data: React.PropTypes.object,
  hovered: React.PropTypes.bool
} : void 0;

var EditableTitle = ocEditableHOC(normalTitle, editTitle);

var ProfileTitle = function ProfileTitle(_ref4) {
  var data = _ref4.data;
  var editable = _ref4.editable;
  var editMode = _ref4.editMode;
  var onSubmitEdit = _ref4.onSubmitEdit;
  var onChange = _ref4.onChange;
  return React.createElement(
    'div',
    { style: { display: 'flex', justifyContent: 'flex-start' } },
    editable ? React.createElement(EditableTitle, {
      data: data,
      onSubmitEdit: onSubmitEdit,
      onChange: onChange,
      editMode: editMode
    }) : React.createElement(Title, { title: data.fName + ' ' + data.lName })
  );
};
process.env.NODE_ENV !== "production" ? ProfileTitle.propTypes = {
  data: React.PropTypes.object.isRequired,
  editable: React.PropTypes.bool,
  editMode: React.PropTypes.bool,
  onChange: React.PropTypes.func,
  onSubmitEdit: React.PropTypes.func
} : void 0;

export default ProfileTitle;