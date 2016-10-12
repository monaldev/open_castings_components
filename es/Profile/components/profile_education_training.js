import React from 'react';
import { Card, CardText, CardTitle, Divider } from 'material-ui';
import ProfileEducationTrainingItem from './profile_education_training_item';

var ProfileEducationTraining = function ProfileEducationTraining(_ref) {
  var data = _ref.data;
  return React.createElement(
    Card,
    {
      initiallyExpanded: true
    },
    React.createElement(CardTitle, {
      title: 'Education & Training',
      actAsExpander: true,
      showExpandableButton: true
    }),
    React.createElement(Divider, null),
    React.createElement(
      CardText,
      {
        expandable: true
      },
      data.map(function (item, index) {
        return React.createElement(
          'div',
          null,
          React.createElement(ProfileEducationTrainingItem, { data: item }),
          index === data.length - 1 ? undefined : React.createElement(Divider, { style: { margin: '2em 0' } })
        );
      })
    )
  );
};
ProfileEducationTraining.defaultProps = {
  data: []
};
process.env.NODE_ENV !== "production" ? ProfileEducationTraining.propTypes = {
  data: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
} : void 0;

export default ProfileEducationTraining;