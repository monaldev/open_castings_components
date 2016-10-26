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

const ProfileEducationTrainingItem = ({
  data,
}) => (
  <div>
    <div style={styles.lineItem}>
      <div style={styles.lineItemText}>
        <span style={styles.title}>{data.school}</span>
        <span style={styles.subTitle}>SCHOOL</span>
      </div>
    </div>
    <div style={styles.lineItem}>
      <span style={styles.title}>{data.teacher}</span>
      <span style={styles.subTitle}>TEACHER</span>
    </div>
    <div style={styles.lineItem}>
      <span style={styles.title}>{data.degree}</span>
      <span style={styles.subTitle}>DEGREE</span>
    </div>
    <div style={styles.lineItem}>
      <span style={styles.title}>{data.course}</span>
      <span style={styles.subTitle}>COURSE</span>
    </div>
    <div style={styles.lineItem}>
      <span style={styles.title}>{data.location}</span>
      <span style={styles.subTitle}>LOCATION</span>
    </div>
  </div>
);
ProfileEducationTrainingItem.defaultProps = {
  data: [],
};
ProfileEducationTrainingItem.propTypes = {
  data: React.PropTypes.shape({
    school: React.PropTypes.string,
    teacher: React.PropTypes.string,
    degree: React.PropTypes.string,
    course: React.PropTypes.string,
    location: React.PropTypes.string,
  }).isRequired,
};

export default ProfileEducationTrainingItem;
