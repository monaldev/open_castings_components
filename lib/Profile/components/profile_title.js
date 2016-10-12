'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _materialUi = require('material-ui');

var _components = require('../../Generic/components');

var _modeEdit = require('material-ui/svg-icons/editor/mode-edit');

var _modeEdit2 = _interopRequireDefault(_modeEdit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Title = function Title(_ref) {
  var title = _ref.title;
  return _react2.default.createElement(
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
  title: _react2.default.PropTypes.string
} : void 0;

var editTitle = function editTitle(_ref2) {
  var data = _ref2.data;
  var onSubmitEdit = _ref2.onSubmitEdit;
  var onCancelEditMode = _ref2.onCancelEditMode;
  var _onChange = _ref2.onChange;
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
        style: { display: 'flex', alignItems: 'center', justifyContent: 'center' }
      },
      _react2.default.createElement(_materialUi.TextField, {
        floatingLabelText: 'First',
        value: data.fName,
        onChange: function onChange(e) {
          return _onChange(_extends({}, data, { fName: e.target.value }));
        },
        style: {
          width: '10em'
        }
      }),
      _react2.default.createElement(_materialUi.TextField, {
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
    _react2.default.createElement(
      'div',
      {
        style: { display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }
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
process.env.NODE_ENV !== "production" ? editTitle.propTypes = {
  data: _react2.default.PropTypes.object,
  onSubmitEdit: _react2.default.PropTypes.func,
  onChange: _react2.default.PropTypes.func,
  onCancelEditMode: _react2.default.PropTypes.func
} : void 0;

var normalTitle = function normalTitle(_ref3) {
  var data = _ref3.data;
  var hovered = _ref3.hovered;
  return _react2.default.createElement(
    'div',
    {
      style: {
        display: 'flex',
        backgroundColor: hovered ? 'lightgray' : 'transparent',
        cursor: 'pointer'
      }
    },
    _react2.default.createElement(Title, { title: data.fName + ' ' + data.lName }),
    _react2.default.createElement(_modeEdit2.default, {
      style: {
        width: 15,
        height: 15,
        marginLeft: '5px'
      }
    })
  );
};
process.env.NODE_ENV !== "production" ? normalTitle.propTypes = {
  data: _react2.default.PropTypes.object,
  hovered: _react2.default.PropTypes.bool
} : void 0;

var EditableTitle = (0, _components.ocEditableHOC)(normalTitle, editTitle);

var ProfileTitle = function ProfileTitle(_ref4) {
  var data = _ref4.data;
  var editable = _ref4.editable;
  var editMode = _ref4.editMode;
  var onSubmitEdit = _ref4.onSubmitEdit;
  var onChange = _ref4.onChange;
  return _react2.default.createElement(
    'div',
    { style: { display: 'flex', justifyContent: 'flex-start' } },
    editable ? _react2.default.createElement(EditableTitle, {
      data: data,
      onSubmitEdit: onSubmitEdit,
      onChange: onChange,
      editMode: editMode
    }) : _react2.default.createElement(Title, { title: data.fName + ' ' + data.lName })
  );
};
process.env.NODE_ENV !== "production" ? ProfileTitle.propTypes = {
  data: _react2.default.PropTypes.object.isRequired,
  editable: _react2.default.PropTypes.bool,
  editMode: _react2.default.PropTypes.bool,
  onChange: _react2.default.PropTypes.func,
  onSubmitEdit: _react2.default.PropTypes.func
} : void 0;

exports.default = ProfileTitle;
module.exports = exports['default'];