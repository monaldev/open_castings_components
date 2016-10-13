import React from 'react';
import {
  CardHeader,
} from 'material-ui';

const ProfileExperienceItem = ({ data, style }) => (
  <div style={style}>
    <CardHeader title={data.title} subtitle="TITLE:" />
    <CardHeader title={data.role} subtitle="ROLE:" />
    <CardHeader title={data.director} subtitle="DIRECTOR:" />
    <CardHeader title={data.company} subtitle="COMPANY:" />
    <CardHeader title={data.location} subtitle="LOCATION:" />
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
