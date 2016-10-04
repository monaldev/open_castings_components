import React from 'react';
import {
  RaisedButton,
  Divider,
  CardTitle,
  CardText,
  CardActions,
} from 'material-ui';
import Eye from 'material-ui/svg-icons/image/remove-red-eye';
import Email from 'material-ui/svg-icons/communication/email';
import ProfileTitle from './profile_title';
import ProfileJobs from './profile_jobs';
import { FacebookFollowers, TwitterFollowers } from '../../Social/components';
const ProfileOverview = ({
  data,
  editable,
  editMode,
  onChange,
  onSubmitChanges,
}) => (
  <div>
    <CardTitle
      title={
        <ProfileTitle
          editable={editable}
          data={{ fName: data.fName, lName: data.lName }}
          onSubmitEdit={onSubmitChanges}
          onChange={(changedData) => {
            const newData = { ...data, ...changedData };
            onChange(newData);
          }}
          editMode={editMode}
        />
      }
      subtitle={
        <ProfileJobs
          editable={editable}
          data={data.jobs}
          onSubmitEdit={onSubmitChanges}
          onChange={(changedData) => {
            const newData = { ...data, jobs: changedData };
            onChange(newData);
          }}
          editMode={editMode}
        />
      }
    />
    <CardText>
      {data.location}
    </CardText>
    <CardActions>
      <RaisedButton
        label={editable ? 'View Profile' : 'Contact Me'}
        secondary
        icon={editable ? <Eye /> : <Email />}
      />
    </CardActions>
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
  editable: false,
  editMode: false,
};
ProfileOverview.propTypes = {
  data: React.PropTypes.shape(
    {
      fName: React.PropTypes.string,
      lName: React.PropTypes.string,
      jobs: React.PropTypes.arrayOf(React.PropTypes.string),
      location: React.PropTypes.string,
    }
  ).isRequired,
  editable: React.PropTypes.bool,
  editMode: React.PropTypes.bool,
  onChange: React.PropTypes.func,
  onToggleEditMode: React.PropTypes.func,
  onSubmitChanges: React.PropTypes.func,
  children: React.PropTypes.node,
};

export default ProfileOverview;
