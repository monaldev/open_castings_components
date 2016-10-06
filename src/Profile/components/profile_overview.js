import React from 'react';
import {
  RaisedButton,
  Divider,
  CardTitle,
  CardText,
} from 'material-ui';
import Email from 'material-ui/svg-icons/communication/email';
import ProfileJobs from './profile_jobs';
import { FacebookFollowers, TwitterFollowers } from '../../Social/components';

const ProfileOverview = ({
  data,
}) => (
  <div>
    <CardTitle
      title={`${data.fName} ${data.lName}`}
    />
    <CardText
      style={{
        paddingTop: '0',
      }}
    >
      <ProfileJobs
        data={data.jobs}
      />
      <div>{data.location}</div>
      <div>Nonunion</div>
      <RaisedButton
        label={'Contact Me'}
        style={{
          marginTop: '1em',
        }}
        secondary
        icon={<Email />}
      />
    </CardText>
    <Divider
      style={{
        width: '90%',
        margin: '0 0',
      }}
    />
    <CardText
      style={{
        display: 'flex',
      }}
    >
      <FacebookFollowers profileId={data.socialProfiles.facebook} />
      <TwitterFollowers profileId={data.socialProfiles.twitter} />
    </CardText>
  </div>
);
ProfileOverview.defaultProps = {
  data: {
    fName: '',
    lName: '',
    jobs: [''],
    location: '',
    socialProfiles: {
      twitter: '',
      facebook: '',
    },
  },
};
ProfileOverview.propTypes = {
  data: React.PropTypes.shape(
    {
      fName: React.PropTypes.string,
      lName: React.PropTypes.string,
      jobs: React.PropTypes.arrayOf(React.PropTypes.string),
      location: React.PropTypes.string,
      socialProfiles: React.PropTypes.object,
    }
  ).isRequired,
  children: React.PropTypes.node,
};

export default ProfileOverview;
