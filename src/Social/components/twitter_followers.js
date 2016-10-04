import React from 'react';
import SocialFollowersTemplate from './social_followers_template';
import $ from 'jquery';
import 'font-awesome/css/font-awesome.css';

class TwitterFollowers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    this.twitter();
  }
  twitter() {
    $.ajax({
      url: 'https://cdn.syndication.twimg.com/widgets/followbutton/info.json',
      dataType: 'jsonp',
      crossDomain: true,
      data: {
        screen_names: this.props.profileId,
      },
    }).done((data) => {
      this.setState({ count: data[0].followers_count });
    });
  }
  render() {
    return (
      <SocialFollowersTemplate
        count={this.state.count}
        socialIcon={<div className="fa fa-twitter fa-inverse" />}
      />
    );
  }
}

TwitterFollowers.propTypes = {
  profileId: React.PropTypes.string,
};

export default TwitterFollowers;
