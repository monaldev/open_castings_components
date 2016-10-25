import React from 'react';
import {
  CardHeader,
} from 'material-ui';

const styles = {
  lineItem: {
    paddingTop: 0,
  },
};

const ProfileEducationTrainingItem = ({
  data,
}) => (
  <div>
    <CardHeader
      style={styles.lineItem}
      title={data.school}
      subtitle="SCHOOL"
    />
    <CardHeader
      style={styles.lineItem}
      title={data.teacher}
      subtitle="TEACHER"
    />
    <CardHeader
      style={styles.lineItem}
      title={data.degree}
      subtitle="DEGREE"
    />
    <CardHeader
      style={styles.lineItem}
      title={data.course}
      subtitle="COURSE"
    />
    <CardHeader
      style={styles.lineItem}
      title={data.location}
      subtitle="LOCATION"
    />
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
