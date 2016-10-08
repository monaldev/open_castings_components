'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TwitterFollowers = exports.FacebookFollowers = undefined;

var _facebook_followers = require('./facebook_followers');

var _facebook_followers2 = _interopRequireDefault(_facebook_followers);

var _twitter_followers = require('./twitter_followers');

var _twitter_followers2 = _interopRequireDefault(_twitter_followers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.FacebookFollowers = _facebook_followers2.default;
exports.TwitterFollowers = _twitter_followers2.default;