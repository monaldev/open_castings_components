import React from 'react';
import {
  Card,
  CardText,
  CardTitle,
} from 'material-ui';
import ProfileExperienceItem from './profile_experience_item';

const ProfileExperienceCategory = ({
  children,
  categoryName,
}) => (
  <Card
    initiallyExpanded
  >
    <CardTitle
      title={categoryName}
      actAsExpander
      showExpandableButton
    />
    <Divider />
    <CardText
      expandable
    >
      {
        children.map((item, index) => (
          <div key={index}>
            <ProfileExperienceItem data={item} />
          </div>
        ))
      }
    </CardText>
  </Card>
);
ProfileExperienceCategory.defaultProps = {
  children: [],
  categoryName: '',
};
ProfileExperienceCategory.propTypes = {
  children: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  categoryName: React.PropTypes.string,
};

export default ProfileExperienceCategory;
