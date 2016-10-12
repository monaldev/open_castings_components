'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _social_followers_template = require('./social_followers_template');

var _social_followers_template2 = _interopRequireDefault(_social_followers_template);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

require('font-awesome/css/font-awesome.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FacebookFollowers = function (_React$Component) {
  _inherits(FacebookFollowers, _React$Component);

  function FacebookFollowers(props) {
    _classCallCheck(this, FacebookFollowers);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.state = {
      count: 0
    };
    return _this;
  }

  FacebookFollowers.prototype.componentDidMount = function componentDidMount() {
    this.facebook();
  };

  FacebookFollowers.prototype.facebook = function facebook() {
    var _this2 = this;

    var token = '1627334644211864|3_tGe7MNSzumVcKxMyJUTqZAlz4';
    _jquery2.default.ajax({
      url: 'https://graph.facebook.com/' + this.props.profileId,
      dataType: 'json',
      type: 'GET',
      data: {
        access_token: token,
        fields: 'likes'
      },
      success: function success(data) {
        var followers = parseInt(data.likes, 10);
        _this2.setState({ count: followers });
      }
    });
  };

  FacebookFollowers.prototype.render = function render() {
    return _react2.default.createElement(_social_followers_template2.default, {
      count: this.state.count,
      socialIcon: _react2.default.createElement('div', { className: 'fa fa-facebook fa-inverse' })
    });
  };

  return FacebookFollowers;
}(_react2.default.Component);

process.env.NODE_ENV !== "production" ? FacebookFollowers.propTypes = {
  profileId: _react2.default.PropTypes.string
} : void 0;

exports.default = FacebookFollowers;
module.exports = exports['default'];