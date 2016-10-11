'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _materialUi = require('material-ui');

var _email = require('material-ui/svg-icons/communication/email');

var _email2 = _interopRequireDefault(_email);

var _profile_jobs = require('./profile_jobs');

var _profile_jobs2 = _interopRequireDefault(_profile_jobs);

var _components = require('../../Social/components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProfileOverview = function ProfileOverview(_ref) {
  var data = _ref.data;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_materialUi.CardTitle, {
      title: data.fName + ' ' + data.lName
    }),
    _react2.default.createElement(
      _materialUi.CardText,
      {
        style: {
          paddingTop: '0'
        }
      },
      _react2.default.createElement(_profile_jobs2.default, {
        data: data.jobs
      }),
      _react2.default.createElement(
        'div',
        null,
        data.location
      ),
      _react2.default.createElement(
        'div',
        null,
        'Nonunion'
      ),
      _react2.default.createElement(_materialUi.RaisedButton, {
        label: 'Contact Me',
        style: {
          marginTop: '1em'
        },
        secondary: true,
        icon: _react2.default.createElement(_email2.default, null)
      })
    ),
    _react2.default.createElement(_materialUi.Divider, {
      style: {
        width: '90%',
        margin: '0 0'
      }
    }),
    _react2.default.createElement(
      _materialUi.CardText,
      {
        style: {
          display: 'flex'
        }
      },
      _react2.default.createElement(_components.FacebookFollowers, { profileId: data.socialProfiles.facebook }),
      _react2.default.createElement(_components.TwitterFollowers, { profileId: data.socialProfiles.twitter })
    )
  );
};
ProfileOverview.defaultProps = {
  data: {
    fName: '',
    lName: '',
    jobs: [''],
    location: '',
    socialProfiles: {
      twitter: '',
      facebook: ''
    }
  }
};
process.env.NODE_ENV !== "production" ? ProfileOverview.propTypes = {
  data: _react2.default.PropTypes.shape({
    fName: _react2.default.PropTypes.string,
    lName: _react2.default.PropTypes.string,
    jobs: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.string),
    location: _react2.default.PropTypes.string,
    socialProfiles: _react2.default.PropTypes.object
  }).isRequired,
  children: _react2.default.PropTypes.node
} : void 0;

exports.default = ProfileOverview;
module.exports = exports['default'];