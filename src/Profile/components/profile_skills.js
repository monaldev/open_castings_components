import React from 'react';

const styles = {
  skill: {
    margin: '4px',
    backgroundColor: 'transparent',
    border: '1px solid #F93666',
    borderRadius: '2px',
  },
  skillText: {
    fontSize: 14,
    fontWeight: 400,
    lineHeight: '32px',
    color: '#F93666',
    paddingLeft: 12,
    paddingRight: 12,
    whiteSpace: 'nowrap',
    userSelect: 'none',
  },
};

const ProfileSkills = ({ data }) => (
  <div
    style={{
      display: 'flex',
      flexWrap: 'wrap',
    }}
  >
    {
      data.map(skill => (
        <div style={styles.skill} >
          <span style={styles.skillText}>{skill}</span>
        </div>
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
