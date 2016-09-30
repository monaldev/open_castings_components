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
      url: 'http://54.234.184.25/twitter/index.php',
      dataType: 'json',
      type: 'GET',
      data: {
        user: this.props.profileId,
      },
      success: (data) => {
        const followers = parseInt(data.followers, 10);
        this.setState({ count: followers });
      },
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
