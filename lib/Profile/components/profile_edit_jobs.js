'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _materialUi = require('material-ui');

var _add = require('material-ui/svg-icons/content/add');

var _add2 = _interopRequireDefault(_add);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProfileEditJobs = function ProfileEditJobs(_ref) {
  var data = _ref.data;
  var onSubmitEdit = _ref.onSubmitEdit;
  var onCancelEditMode = _ref.onCancelEditMode;
  var _onChange = _ref.onChange;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'span',
      {
        style: {
          fontWeight: '700'
        }
      },
      'Name:'
    ),
    _react2.default.createElement(
      'div',
      {
        style: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          alignContent: 'center'
        }
      },
      _react2.default.createElement(_materialUi.TextField, {
        floatingLabelText: 'Add Job',
        onChange: function onChange(event) {
          var newJobs = [].concat(data, [event.target.value]);
          _onChange(newJobs);
        },
        style: {
          width: '10em'
        }
      }),
      _react2.default.createElement(
        _materialUi.FloatingActionButton,
        {
          mini: true,
          primary: true,
          style: {
            marginTop: '1em',
            marginLeft: '1em'
          }
        },
        _react2.default.createElement(_add2.default, null)
      )
    ),
    _react2.default.createElement(
      'div',
      {
        style: {
          display: 'flex',
          flexDirection: 'row'
        }
      },
      data.map(function (job, index) {
        return _react2.default.createElement(
          _materialUi.Chip,
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
    _react2.default.createElement(
      'div',
      {
        style: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end'
        }
      },
      _react2.default.createElement(_materialUi.FlatButton, {
        label: 'Cancel',
        onTouchTap: function onTouchTap() {
          onCancelEditMode();
        }
      }),
      _react2.default.createElement(_materialUi.RaisedButton, {
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
  data: _react2.default.PropTypes.array,
  onSubmitEdit: _react2.default.PropTypes.func,
  onChange: _react2.default.PropTypes.func,
  onCancelEditMode: _react2.default.PropTypes.func
} : void 0;

exports.default = ProfileEditJobs;
module.exports = exports['default'];