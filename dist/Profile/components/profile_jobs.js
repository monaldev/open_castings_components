'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _components = require('../../Generic/components');

var _modeEdit = require('material-ui/svg-icons/editor/mode-edit');

var _modeEdit2 = _interopRequireDefault(_modeEdit);

var _profile_edit_jobs = require('./profile_edit_jobs');

var _profile_edit_jobs2 = _interopRequireDefault(_profile_edit_jobs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Jobs = function Jobs(_ref) {
  var jobs = _ref.jobs;
  return _react2.default.createElement(
    'div',
    { style: { display: 'flex' } },
    jobs.join(' / ')
  );
};
Jobs.propTypes = {
  jobs: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.string)
};

var normalJobs = function normalJobs(_ref2) {
  var data = _ref2.data;
  return _react2.default.createElement(
    'div',
    {
      style: {
        display: 'flex'
      }
    },
    _react2.default.createElement(Jobs, { jobs: data }),
    _react2.default.createElement(_modeEdit2.default, {
      style: {
        width: 15,
        height: 15,
        marginLeft: '5px'
      }
    })
  );
};
normalJobs.propTypes = {
  data: _react2.default.PropTypes.array
};
var EditableJobs = (0, _components.ocEditableHOC)(normalJobs, _profile_edit_jobs2.default);

var ProfileJobs = function ProfileJobs(_ref3) {
  var data = _ref3.data;
  var editable = _ref3.editable;
  var editMode = _ref3.editMode;
  var onSubmitEdit = _ref3.onSubmitEdit;
  var onChange = _ref3.onChange;
  return _react2.default.createElement(
    'div',
    { style: { display: 'flex', justifyContent: 'flex-start' } },
    editable ? _react2.default.createElement(EditableJobs, {
      data: data,
      onSubmitEdit: onSubmitEdit,
      onChange: onChange,
      editMode: editMode
    }) : _react2.default.createElement(Jobs, { jobs: data })
  );
};
ProfileJobs.propTypes = {
  data: _react2.default.PropTypes.array.isRequired,
  editable: _react2.default.PropTypes.bool,
  editMode: _react2.default.PropTypes.bool,
  onChange: _react2.default.PropTypes.func,
  onSubmitEdit: _react2.default.PropTypes.func
};

exports.default = ProfileJobs;