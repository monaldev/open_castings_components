import React from 'react';
import SocialFollowersTemplate from './social_followers_template';
import $ from 'jquery';
import 'font-awesome/css/font-awesome.css';

class FacebookFollowers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    this.facebook();
  }
  facebook() {
    const token = '1627334644211864|3_tGe7MNSzumVcKxMyJUTqZAlz4';
    $.ajax({
      url: `https://graph.facebook.com/${this.props.profileId}`,
      dataType: 'json',
      type: 'GET',
      data: {
        access_token: token,
        fields: 'likes',
      },
      success: (data) => {
        const followers = parseInt(data.likes, 10);
        this.setState({ count: followers });
      },
    });
  }
  render() {
    return (
      <SocialFollowersTemplate
        count={this.state.count}
        socialIcon={<div className="fa fa-facebook fa-inverse" />}
      />
    );
  }
}

FacebookFollowers.propTypes = {
  profileId: React.PropTypes.string,
};

export default FacebookFollowers;
