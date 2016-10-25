import React from 'react';
import {
  Chip,
} from 'material-ui';

const ProfileSkills = ({ data }) => (
  <div
    style={{
      display: 'flex',
      flexWrap: 'wrap',
    }}
  >
    {
      data.map(skill => (
        <Chip
          style={{
            margin: '4px',
            backgroundColor: 'transparent',
            border: '1px solid #F93666',
            borderRadius: '2px',
          }}
          labelColor="#F93666"
        >
          {skill}
        </Chip>
      ))
    }
  </div>
);
ProfileSkills.propTypes = {
  jobs: React.PropTypes.arrayOf(React.PropTypes.string),
};

ProfileSkills.propTypes = {
  data: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
};

export default ProfileSkills;
