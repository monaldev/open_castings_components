function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import SocialFollowersTemplate from './social_followers_template';
import $ from 'jquery';
import 'font-awesome/css/font-awesome.css';

var TwitterFollowers = function (_React$Component) {
  _inherits(TwitterFollowers, _React$Component);

  function TwitterFollowers(props) {
    _classCallCheck(this, TwitterFollowers);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.state = {
      count: 0
    };
    return _this;
  }

  TwitterFollowers.prototype.componentDidMount = function componentDidMount() {
    this.twitter();
  };

  TwitterFollowers.prototype.twitter = function twitter() {
    var _this2 = this;

    $.ajax({
      url: 'https://cdn.syndication.twimg.com/widgets/followbutton/info.json',
      dataType: 'jsonp',
      crossDomain: true,
      data: {
        screen_names: this.props.profileId
      }
    }).done(function (data) {
      _this2.setState({ count: data[0].followers_count });
    });
  };

  TwitterFollowers.prototype.render = function render() {
    return React.createElement(SocialFollowersTemplate, {
      count: this.state.count,
      socialIcon: React.createElement('div', { className: 'fa fa-twitter fa-inverse' })
    });
  };

  return TwitterFollowers;
}(React.Component);

process.env.NODE_ENV !== "production" ? TwitterFollowers.propTypes = {
  profileId: React.PropTypes.string
} : void 0;

export default TwitterFollowers;