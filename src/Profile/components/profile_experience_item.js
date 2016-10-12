import React from 'react';
import {
  CardHeader,
} from 'material-ui';

const ProfileExperienceItem = ({ data, style }) => (
  <div style={style}>
    <CardHeader title="TITLE:" subtitle={data.title} />
    <CardHeader title="ROLE:" subtitle={data.role} />
    <CardHeader title="DIRECTOR:" subtitle={data.director} />
    <CardHeader title="COMPANY:" subtitle={data.company} />
    <CardHeader title="LOCATION:" subtitle={data.location} />
  </div>
);

ProfileExperienceItem.propTypes = {
  data: React.PropTypes.shape(
    {
      title: React.PropTypes.string,
      role: React.PropTypes.string,
      director: React.PropTypes.string,
      company: React.PropTypes.string,
      location: React.PropTypes.string,
    }
  ).isRequired,
  style: React.PropTypes.object,
};

export default ProfileExperienceItem;
