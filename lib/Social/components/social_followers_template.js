'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function kFormatter(num) {
  return num > 999 ? (num / 1000).toFixed(1) + 'k' : num;
}

var SocialFollowersTemplate = function SocialFollowersTemplate(_ref) {
  var socialIcon = _ref.socialIcon;
  var count = _ref.count;
  var _ref$width = _ref.width;
  var width = _ref$width === undefined ? 40 : _ref$width;
  return _react2.default.createElement(
    'div',
    {
      style: {
        padding: '0',
        minWidth: width + 'px',
        fontSize: '11px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textTransform: 'uppercase',
        textAlign: 'center',
        margin: '0 ' + width * 0.1 + 'px'
      }
    },
    _react2.default.createElement(
      'div',
      {
        style: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: width * 0.8 + 'px',
          height: width * 0.8 + 'px',
          padding: '0px',
          textDecoration: 'none',
          textAlign: 'center',
          color: '#fff',
          fontSize: width * 0.5 + 'px',
          fontWeight: 'normal',
          background: '#283445',
          borderRadius: width * 0.8 + 'px',
          margin: 'auto'
        }
      },
      socialIcon
    ),
    _react2.default.createElement(
      'div',
      {
        style: {
          position: 'relative',
          marginTop: '10px',
          color: 'white'
        }
      },
      _react2.default.createElement(
        'div',
        {
          style: {
            background: '#31b5ff',
            position: 'relative',
            padding: '3px'
          }
        },
        _react2.default.createElement(
          'div',
          {
            style: {
              fontSize: width * 0.3 + 'px'
            }
          },
          kFormatter(count)
        )
      ),
      _react2.default.createElement('div', {
        style: {
          bottom: '100%',
          left: '50%',
          border: 'solid transparent',
          height: 0,
          width: 0,
          position: 'absolute',
          pointerEvents: 'none',
          borderBottomColor: '#31b5ff',
          borderWidth: '10px 5px',
          marginLeft: '-5px'
        }
      })
    )
  );
};

process.env.NODE_ENV !== "production" ? SocialFollowersTemplate.propTypes = {
  socialIcon: _react2.default.PropTypes.object,
  count: _react2.default.PropTypes.number,
  width: _react2.default.PropTypes.string
} : void 0;

exports.default = SocialFollowersTemplate;
module.exports = exports['default'];