import React from 'react';
import { RaisedButton, Divider, CardTitle, CardText } from 'material-ui';
import Email from 'material-ui/svg-icons/communication/email';
import ProfileJobs from './profile_jobs';
import { FacebookFollowers, TwitterFollowers } from '../../Social/components';

var ProfileOverview = function ProfileOverview(_ref) {
  var data = _ref.data;
  return React.createElement(
    'div',
    null,
    React.createElement(CardTitle, {
      title: data.fName + ' ' + data.lName
    }),
    React.createElement(
      CardText,
      {
        style: {
          paddingTop: '0'
        }
      },
      React.createElement(ProfileJobs, {
        data: data.jobs
      }),
      React.createElement(
        'div',
        null,
        data.location
      ),
      React.createElement(
        'div',
        null,
        'Nonunion'
      ),
      React.createElement(RaisedButton, {
        label: 'Contact Me',
        style: {
          marginTop: '1em'
        },
        secondary: true,
        icon: React.createElement(Email, null)
      })
    ),
    React.createElement(Divider, {
      style: {
        width: '90%',
        margin: '0 0'
      }
    }),
    React.createElement(
      CardText,
      {
        style: {
          display: 'flex'
        }
      },
      React.createElement(FacebookFollowers, { profileId: data.socialProfiles.facebook }),
      React.createElement(TwitterFollowers, { profileId: data.socialProfiles.twitter })
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
  data: React.PropTypes.shape({
    fName: React.PropTypes.string,
    lName: React.PropTypes.string,
    jobs: React.PropTypes.arrayOf(React.PropTypes.string),
    location: React.PropTypes.string,
    socialProfiles: React.PropTypes.object
  }).isRequired,
  children: React.PropTypes.node
} : void 0;

export default ProfileOverview;