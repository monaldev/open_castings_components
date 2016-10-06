import React from 'react';
import {
  Card,
  CardText,
  CardTitle,
  Divider,
} from 'material-ui';
import math from 'mathjs';

const ftAndInFromCm = (cm) => {
  const ftAndIn = math.splitUnit(math.unit(cm, 'cm'), ['feet', 'inches']);
  const feet = ftAndIn[0].toNumber('feet');
  const inches = math.round(ftAndIn[1].toNumber('inches'));
  return `${feet}'${inches}"`;
};

const ProfileBasicStats = ({
  data,
}) => (
  <Card>
    <CardTitle
      title="Basic Stats"
      actAsExpander
      showExpandableButton
    />
    <Divider />
    <CardText
      expandable
    >
      <div>{`Age Range: ${data.ageMin}-${data.ageMax}`}</div>
      <div>{`Height: ${ftAndInFromCm(data.heightCm)} (${data.heightCm}cm)`}</div>
      <div>{`Height: ${ftAndInFromCm(data.heightCm)} (${data.heightCm}cm)`}</div>
    </CardText>
  </Card>
);
ProfileBasicStats.defaultProps = {
  data: {
    heightCm: 0,
  },
};
ProfileBasicStats.propTypes = {
  data: React.PropTypes.shape(
    {
      ageMin: React.PropTypes.number,
      ageMax: React.PropTypes.number,
      heightCm: React.PropTypes.number,
    }
  ).isRequired,
};

export default ProfileBasicStats;
