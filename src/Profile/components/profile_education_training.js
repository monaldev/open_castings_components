import React from 'react';
import {
  Card,
  CardText,
  CardTitle,
  Divider,
} from 'material-ui';
import ProfileEducationTrainingItem from './profile_education_training_item';

const ProfileEducationTraining = ({
  data,
}) => (
  <Card
    initiallyExpanded
  >
    <CardTitle
      title="Education & Training"
      actAsExpander
      showExpandableButton
    />
    <Divider />
    <CardText
      expandable
    >
      {
        data.map((item, index) => (
          <div>
            <ProfileEducationTrainingItem data={item} />
            {
              index === data.length - 1
              ? undefined
              : <Divider style={{ margin: '2em 0' }} />
            }
          </div>
        ))
      }
    </CardText>
  </Card>
);
ProfileEducationTraining.defaultProps = {
  data: [],
};
ProfileEducationTraining.propTypes = {
  data: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
};

export default ProfileEducationTraining;
