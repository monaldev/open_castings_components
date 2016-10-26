import React from 'react';

const styles = {
  lineItem: {
    padding: 16,
    paddingTop: 0,
    fontWeight: 500,
    boxSizing: 'border-box',
    position: 'relative',
    whiteSpace: 'nowrap',
  },
  lineItemText: {
    display: 'inline-block',
    verticalAlign: 'top',
    whiteSpace: 'normal',
    paddingRight: 90,
  },
  title: {
    fontSize: 15,
    display: 'block',
    color: 'rgba(66, 66, 66, 0.870588)',
  },
  subTitle: {
    fontSize: 14,
    display: 'block',
    color: 'rgba(66, 66, 66, 0.541176)',
  },
};

const ProfileExperienceItem = ({ data, style }) => (
  <div style={style}>
    <div style={styles.lineItem}>
      <div style={styles.lineItemText}>
        <span style={styles.title}>{data.title}</span>
        <span style={styles.subTitle}>TITLE:</span>
      </div>
    </div>
    <div style={styles.lineItem}>
      <span style={styles.title}>{data.role}</span>
      <span style={styles.subTitle}>ROLE:</span>
    </div>
    <div style={styles.lineItem}>
      <span style={styles.title}>{data.director}</span>
      <span style={styles.subTitle}>DIRECTOR</span>
    </div>
    <div style={styles.lineItem}>
      <span style={styles.title}>{data.company}</span>
      <span style={styles.subTitle}>COMPANY</span>
    </div>
    <div style={styles.lineItem}>
      <span style={styles.title}>{data.location}</span>
      <span style={styles.subTitle}>LOCATION</span>
    </div>
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
