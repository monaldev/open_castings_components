'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _materialUi = require('material-ui');

var _profile_education_training_item = require('./profile_education_training_item');

var _profile_education_training_item2 = _interopRequireDefault(_profile_education_training_item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProfileEducationTraining = function ProfileEducationTraining(_ref) {
  var data = _ref.data;
  return _react2.default.createElement(
    _materialUi.Card,
    {
      initiallyExpanded: true
    },
    _react2.default.createElement(_materialUi.CardTitle, {
      title: 'Education & Training',
      actAsExpander: true,
      showExpandableButton: true
    }),
    _react2.default.createElement(_materialUi.Divider, null),
    _react2.default.createElement(
      _materialUi.CardText,
      {
        expandable: true
      },
      data.map(function (item, index) {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_profile_education_training_item2.default, { data: item }),
          index === data.length - 1 ? undefined : _react2.default.createElement(_materialUi.Divider, { style: { margin: '2em 0' } })
        );
      })
    )
  );
};
ProfileEducationTraining.defaultProps = {
  data: []
};
ProfileEducationTraining.propTypes = {
  data: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.object).isRequired
};

exports.default = ProfileEducationTraining;