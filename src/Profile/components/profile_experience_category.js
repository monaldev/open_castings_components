import React from 'react';
import {
  Panel,
} from 'react-bootstrap';

import ProfileExperienceItem from './profile_experience_item';

const ProfileExperienceCategory = ({
  children,
  categoryName,
}) => (
  <Panel header={`${categoryName} (${children.length})`}>
    {
      children.map((item, index) => (
        <div key={index}>
          <ProfileExperienceItem data={item} />
          {
            index === children.length - 1
            ? undefined
            : <hr style={{ margin: '2em 0' }} />
          }
        </div>
      ))
    }
  </Panel>
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
