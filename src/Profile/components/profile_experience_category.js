import React from 'react';
import {
  Card,
  CardText,
  CardTitle,
  Divider,
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
      title={`${categoryName} (${children.length})`}
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
            {index >= 1 ? <Divider /> : ''}
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
