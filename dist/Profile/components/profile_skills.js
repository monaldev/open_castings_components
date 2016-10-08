'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _materialUi = require('material-ui');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProfileSkills = function ProfileSkills(_ref) {
  var data = _ref.data;
  return _react2.default.createElement(
    'div',
    {
      style: {
        display: 'flex',
        flexWrap: 'wrap'
      }
    },
    data.map(function (skill) {
      return _react2.default.createElement(
        _materialUi.Chip,
        {
          style: {
            margin: '4px',
            backgroundColor: 'transparent',
            border: '1px solid #F93666',
            borderRadius: '2px'
          },
          labelColor: '#F93666'
        },
        skill
      );
    })
  );
};
ProfileSkills.propTypes = {
  jobs: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.string)
};

ProfileSkills.propTypes = {
  data: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.string).isRequired
};

exports.default = ProfileSkills;