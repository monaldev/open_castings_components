import React from 'react';
import { CardHeader } from 'material-ui';

var styles = {
  lineItem: {
    paddingTop: 0
  }
};

var ProfileEducationTrainingItem = function ProfileEducationTrainingItem(_ref) {
  var data = _ref.data;
  return React.createElement(
    'div',
    null,
    React.createElement(CardHeader, {
      style: styles.lineItem,
      title: data.school,
      subtitle: 'SCHOOL'
    }),
    React.createElement(CardHeader, {
      style: styles.lineItem,
      title: data.teacher,
      subtitle: 'TEACHER'
    }),
    React.createElement(CardHeader, {
      style: styles.lineItem,
      title: data.degree,
      subtitle: 'DEGREE'
    }),
    React.createElement(CardHeader, {
      style: styles.lineItem,
      title: data.course,
      subtitle: 'COURSE'
    }),
    React.createElement(CardHeader, {
      style: styles.lineItem,
      title: data.location,
      subtitle: 'LOCATION'
    })
  );
};
ProfileEducationTrainingItem.defaultProps = {
  data: []
};
process.env.NODE_ENV !== "production" ? ProfileEducationTrainingItem.propTypes = {
  data: React.PropTypes.shape({
    school: React.PropTypes.string,
    teacher: React.PropTypes.string,
    degree: React.PropTypes.string,
    course: React.PropTypes.string,
    location: React.PropTypes.string
  }).isRequired
} : void 0;

export default ProfileEducationTrainingItem;