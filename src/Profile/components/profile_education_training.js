import React from 'react';
import {
  Panel,
} from 'react-bootstrap';
import ProfileEducationTrainingItem from './profile_education_training_item';

const ProfileEducationTraining = ({
  data,
}) => (
  <Panel header="Education & Training">
      {
        data.map((item, index) => (
          <div key={index}>
            <ProfileEducationTrainingItem data={item} />
            {
              index === data.length - 1
              ? undefined
              : <hr style={{ margin: '2em 0' }} />
            }
          </div>
        ))
      }
  </Panel>
);
ProfileEducationTraining.defaultProps = {
  data: [],
};
ProfileEducationTraining.propTypes = {
  data: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
};

export default ProfileEducationTraining;
