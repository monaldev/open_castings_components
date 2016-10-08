'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = function (NormalComponent, EditComponent) {
  var OCEditableHOC = function (_React$Component) {
    _inherits(OCEditableHOC, _React$Component);

    function OCEditableHOC(props) {
      _classCallCheck(this, OCEditableHOC);

      var _this = _possibleConstructorReturn(this, (OCEditableHOC.__proto__ || Object.getPrototypeOf(OCEditableHOC)).call(this, props));

      _this.state = {
        editMode: props.editMode || false,
        hovered: false
      };
      return _this;
    }

    _createClass(OCEditableHOC, [{
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        if (nextProps.editMode) {
          this.setState({ editMode: nextProps.editMode });
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var _this2 = this;

        var isEditMode = this.state.editMode;
        var _props = this.props;
        var onSubmitEdit = _props.onSubmitEdit;
        var onChange = _props.onChange;

        var restProps = _objectWithoutProperties(_props, ['onSubmitEdit', 'onChange']);

        return _react2.default.createElement(
          'div',
          {
            ref: 'editContainer'
          },
          _react2.default.createElement(
            'div',
            {
              style: {
                position: 'relative',
                display: 'flex',
                justifyContent: 'space-between'
              }
            },
            _react2.default.createElement(NormalComponent, restProps),
            _react2.default.createElement(
              _materialUi.IconButton,
              {
                onTouchTap: function onTouchTap() {
                  return _this2.setState({ editMode: true });
                }
              },
              _react2.default.createElement(_modeEdit2.default, null)
            )
          ),
          _react2.default.createElement(
            _materialUi.Popover,
            {
              open: isEditMode,
              anchorEl: this.refs.editContainer,
              anchorOrigin: { horizontal: 'right', vertical: 'top' },
              targetOrigin: { horizontal: 'left', vertical: 'top' },
              animation: _materialUi.PopoverAnimationVertical,
              style: {
                padding: '0',
                minWidth: '300px'
              }
            },
            _react2.default.createElement(
              'div',
              {
                style: {
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  position: 'relative',
                  height: '36px',
                  paddingTop: '1em'
                }
              },
              _react2.default.createElement(
                'span',
                {
                  style: {
                    flex: 1
                  }
                },
                'Edit Info'
              ),
              _react2.default.createElement(_materialUi.FlatButton, {
                label: 'Done',
                secondary: true,
                onTouchTap: function onTouchTap() {
                  onSubmitEdit();
                  _this2.setState({ editMode: false });
                }
              })
            ),
            _react2.default.createElement(EditComponent, _extends({}, restProps, {
              onChange: onChange
            }))
          )
        );
      }
    }]);

    return OCEditableHOC;
  }(_react2.default.Component);

  OCEditableHOC.propTypes = {
    editMode: _react2.default.PropTypes.bool,
    onSubmitEdit: _react2.default.PropTypes.func,
    onChange: _react2.default.PropTypes.func
  };
  return OCEditableHOC;
};

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _materialUi = require('material-ui');

var _modeEdit = require('material-ui/svg-icons/editor/mode-edit');

var _modeEdit2 = _interopRequireDefault(_modeEdit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }