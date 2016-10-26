import React from 'react';
import {
  Button,
  Glyphicon,
} from 'react-bootstrap';

import ProfileJobs from './profile_jobs';
import { FacebookFollowers, TwitterFollowers } from '../../Social/components';

const styles = {
  actorName: {
    fontSize: '24px',
    color: 'rgba(66, 66, 66, 0.870588)',
    display: 'block',
    lineHeight: '36px',
  },
  actorHeader: {
    padding: '16px',
    position: 'relative',
  },
  actorJobs: {
    padding: '16',
    paddingTop: '0',
    fontSize: '14px',
    color: 'rgb(66, 66, 66)',
  },
};

const ProfileOverview = ({
  data,
}) => (
  <div>
    <div style={styles.actorHeader}>
    <span style={styles.actorName}>
        {`${data.fName} ${data.lName}`}
      </span>
    </div>
    <div style={styles.actorJobs}>
      <ProfileJobs
        data={data.jobs}
      />
      <div>{data.location}</div>
      <div>Nonunion</div>
      <Button
        style={{
          marginTop: '1em',
        }}
      ><Glyphicon glyph="envelope" /> Contact Me</Button>
    </div>
    <hr
      style={{
        width: '90%',
        margin: '0 0',
      }}
    />
    <div
      style={{
        display: 'flex',
        padding: '16px',
      }}
    >
      <FacebookFollowers profileId={data.socialProfiles.facebook} />
      <TwitterFollowers profileId={data.socialProfiles.twitter} />
    </div>
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
