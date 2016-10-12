var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import { Popover, PopoverAnimationVertical, FlatButton, IconButton } from 'material-ui';
import Edit from 'material-ui/svg-icons/editor/mode-edit';

export default function (NormalComponent, EditComponent) {
  var OCEditableHOC = function (_React$Component) {
    _inherits(OCEditableHOC, _React$Component);

    function OCEditableHOC(props) {
      _classCallCheck(this, OCEditableHOC);

      var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

      _this.state = {
        editMode: props.editMode || false,
        hovered: false
      };
      return _this;
    }

    OCEditableHOC.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      if (nextProps.editMode) {
        this.setState({ editMode: nextProps.editMode });
      }
    };

    OCEditableHOC.prototype.render = function render() {
      var _this2 = this;

      var isEditMode = this.state.editMode;
      var _props = this.props;
      var onSubmitEdit = _props.onSubmitEdit;
      var onChange = _props.onChange;

      var restProps = _objectWithoutProperties(_props, ['onSubmitEdit', 'onChange']);

      return React.createElement(
        'div',
        {
          ref: 'editContainer'
        },
        React.createElement(
          'div',
          {
            style: {
              position: 'relative',
              display: 'flex',
              justifyContent: 'space-between'
            }
          },
          React.createElement(NormalComponent, restProps),
          React.createElement(
            IconButton,
            {
              onTouchTap: function onTouchTap() {
                return _this2.setState({ editMode: true });
              }
            },
            React.createElement(Edit, null)
          )
        ),
        React.createElement(
          Popover,
          {
            open: isEditMode,
            anchorEl: this.refs.editContainer,
            anchorOrigin: { horizontal: 'right', vertical: 'top' },
            targetOrigin: { horizontal: 'left', vertical: 'top' },
            animation: PopoverAnimationVertical,
            style: {
              padding: '0',
              minWidth: '300px'
            }
          },
          React.createElement(
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
            React.createElement(
              'span',
              {
                style: {
                  flex: 1
                }
              },
              'Edit Info'
            ),
            React.createElement(FlatButton, {
              label: 'Done',
              secondary: true,
              onTouchTap: function onTouchTap() {
                onSubmitEdit();
                _this2.setState({ editMode: false });
              }
            })
          ),
          React.createElement(EditComponent, _extends({}, restProps, {
            onChange: onChange
          }))
        )
      );
    };

    return OCEditableHOC;
  }(React.Component);

  process.env.NODE_ENV !== "production" ? OCEditableHOC.propTypes = {
    editMode: React.PropTypes.bool,
    onSubmitEdit: React.PropTypes.func,
    onChange: React.PropTypes.func
  } : void 0;
  return OCEditableHOC;
}