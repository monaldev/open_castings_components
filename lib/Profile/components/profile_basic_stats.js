'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _materialUi = require('material-ui');

var _mathjs = require('mathjs');

var _mathjs2 = _interopRequireDefault(_mathjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ftAndInFromCm = function ftAndInFromCm(cm) {
  var ftAndIn = _mathjs2.default.splitUnit(_mathjs2.default.unit(cm, 'cm'), ['feet', 'inches']);
  var feet = ftAndIn[0].toNumber('feet');
  var inches = _mathjs2.default.round(ftAndIn[1].toNumber('inches'));
  return feet + '\'' + inches + '"';
};

var lbsFromKgs = function lbsFromKgs(kg) {
  return _mathjs2.default.round(_mathjs2.default.unit(kg, 'kg').toNumber('lb'));
};

var styles = {
  statItem: {
    padding: '2px 0'
  }
};

var ProfileBasicStats = function ProfileBasicStats(_ref) {
  var data = _ref.data;
  return _react2.default.createElement(
    _materialUi.Card,
    {
      initiallyExpanded: true
    },
    _react2.default.createElement(_materialUi.CardTitle, {
      title: 'Basic Stats',
      actAsExpander: true,
      showExpandableButton: true
    }),
    _react2.default.createElement(_materialUi.Divider, null),
    _react2.default.createElement(
      _materialUi.CardText,
      {
        expandable: true
      },
      _react2.default.createElement(
        'div',
        { style: styles.statItem },
        'Age Range: ' + data.ageMin + '-' + data.ageMax
      ),
      _react2.default.createElement(
        'div',
        { style: styles.statItem },
        'Gender: ' + data.gender
      ),
      _react2.default.createElement(
        'div',
        { style: styles.statItem },
        'Ethnicities: ' + data.ethnicities.join(', ')
      ),
      _react2.default.createElement(
        'div',
        { style: styles.statItem },
        'Height: ' + ftAndInFromCm(data.heightCm) + ' (' + data.heightCm + 'cm)'
      ),
      _react2.default.createElement(
        'div',
        { style: styles.statItem },
        'Weight: ' + lbsFromKgs(data.weightKg) + ' lbs (' + data.weightKg + 'kg)'
      ),
      _react2.default.createElement(
        'div',
        { style: styles.statItem },
        'Bust: ' + data.bust
      ),
      _react2.default.createElement(
        'div',
        { style: styles.statItem },
        'Waist: ' + data.waist
      ),
      _react2.default.createElement(
        'div',
        { style: styles.statItem },
        'Hips: ' + data.hips
      )
    )
  );
};
ProfileBasicStats.defaultProps = {
  data: {
    ageMin: 0,
    ageMax: 0,
    gender: '',
    heightCm: 0,
    weightKg: 0,
    bust: 0,
    waist: 0,
    hips: 0
  }
};
process.env.NODE_ENV !== "production" ? ProfileBasicStats.propTypes = {
  data: _react2.default.PropTypes.shape({
    ageMin: _react2.default.PropTypes.number,
    ageMax: _react2.default.PropTypes.number,
    gender: _react2.default.PropTypes.oneOf(['Male', 'Female', 'Transgender']),
    ethnicities: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.string),
    heightCm: _react2.default.PropTypes.number,
    weightKg: _react2.default.PropTypes.number,
    bust: _react2.default.PropTypes.number,
    waist: _react2.default.PropTypes.number,
    hips: _react2.default.PropTypes.number
  }).isRequired
} : void 0;

exports.default = ProfileBasicStats;
module.exports = exports['default'];