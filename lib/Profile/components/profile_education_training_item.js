'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _materialUi = require('material-ui');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  lineItem: {
    paddingTop: 0
  }
};

var ProfileEducationTrainingItem = function ProfileEducationTrainingItem(_ref) {
  var data = _ref.data;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_materialUi.CardHeader, {
      style: styles.lineItem,
      title: data.school,
      subtitle: 'SCHOOL'
    }),
    _react2.default.createElement(_materialUi.CardHeader, {
      style: styles.lineItem,
      title: data.teacher,
      subtitle: 'TEACHER'
    }),
    _react2.default.createElement(_materialUi.CardHeader, {
      style: styles.lineItem,
      title: data.degree,
      subtitle: 'DEGREE'
    }),
    _react2.default.createElement(_materialUi.CardHeader, {
      style: styles.lineItem,
      title: data.course,
      subtitle: 'COURSE'
    }),
    _react2.default.createElement(_materialUi.CardHeader, {
      style: styles.lineItem,
      title: data.location,
      subtitle: 'LOCATION'
    })
  );
};
ProfileEducationTrainingItem.defaultProps = {
  data: []
};
process.env.NODE_ENV !== "production" ? ProfileEducationTrainingItem.propTypes = {
  data: _react2.default.PropTypes.shape({
    school: _react2.default.PropTypes.string,
    teacher: _react2.default.PropTypes.string,
    degree: _react2.default.PropTypes.string,
    course: _react2.default.PropTypes.string,
    location: _react2.default.PropTypes.string
  }).isRequired
} : void 0;

exports.default = ProfileEducationTrainingItem;
module.exports = exports['default'];