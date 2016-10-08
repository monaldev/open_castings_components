'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

var TwitterFollowers = function (_React$Component) {
  _inherits(TwitterFollowers, _React$Component);

  function TwitterFollowers(props) {
    _classCallCheck(this, TwitterFollowers);

    var _this = _possibleConstructorReturn(this, (TwitterFollowers.__proto__ || Object.getPrototypeOf(TwitterFollowers)).call(this, props));

    _this.state = {
      count: 0
    };
    return _this;
  }

  _createClass(TwitterFollowers, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.twitter();
    }
  }, {
    key: 'twitter',
    value: function twitter() {
      var _this2 = this;

      _jquery2.default.ajax({
        url: 'https://cdn.syndication.twimg.com/widgets/followbutton/info.json',
        dataType: 'jsonp',
        crossDomain: true,
        data: {
          screen_names: this.props.profileId
        }
      }).done(function (data) {
        _this2.setState({ count: data[0].followers_count });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_social_followers_template2.default, {
        count: this.state.count,
        socialIcon: _react2.default.createElement('div', { className: 'fa fa-twitter fa-inverse' })
      });
    }
  }]);

  return TwitterFollowers;
}(_react2.default.Component);

TwitterFollowers.propTypes = {
  profileId: _react2.default.PropTypes.string
};

exports.default = TwitterFollowers;