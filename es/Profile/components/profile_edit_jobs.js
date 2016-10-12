import React from 'react';
import { TextField, FlatButton, RaisedButton, FloatingActionButton, Chip } from 'material-ui';
import ContentAdd from 'material-ui/svg-icons/content/add';

var ProfileEditJobs = function ProfileEditJobs(_ref) {
  var data = _ref.data;
  var onSubmitEdit = _ref.onSubmitEdit;
  var onCancelEditMode = _ref.onCancelEditMode;
  var _onChange = _ref.onChange;
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
        style: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          alignContent: 'center'
        }
      },
      React.createElement(TextField, {
        floatingLabelText: 'Add Job',
        onChange: function onChange(event) {
          var newJobs = [].concat(data, [event.target.value]);
          _onChange(newJobs);
        },
        style: {
          width: '10em'
        }
      }),
      React.createElement(
        FloatingActionButton,
        {
          mini: true,
          primary: true,
          style: {
            marginTop: '1em',
            marginLeft: '1em'
          }
        },
        React.createElement(ContentAdd, null)
      )
    ),
    React.createElement(
      'div',
      {
        style: {
          display: 'flex',
          flexDirection: 'row'
        }
      },
      data.map(function (job, index) {
        return React.createElement(
          Chip,
          {
            key: job,
            onRequestDelete: function onRequestDelete() {
              var newJobs = [].concat(data.slice(0, index), data.slice(index + 1, data.length));
              _onChange(newJobs);
            },
            style: {
              margin: '2px'
            }
          },
          job
        );
      })
    ),
    React.createElement(
      'div',
      {
        style: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end'
        }
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
process.env.NODE_ENV !== "production" ? ProfileEditJobs.propTypes = {
  data: React.PropTypes.array,
  onSubmitEdit: React.PropTypes.func,
  onChange: React.PropTypes.func,
  onCancelEditMode: React.PropTypes.func
} : void 0;

export default ProfileEditJobs;