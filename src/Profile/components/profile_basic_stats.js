import React from 'react';
import {
  Panel,
} from 'react-bootstrap';

import math from 'mathjs';

const ftAndInFromCm = (cm) => {
  const ftAndIn = math.splitUnit(math.unit(cm, 'cm'), ['feet', 'inches']);
  const feet = ftAndIn[0].toNumber('feet');
  const inches = math.round(ftAndIn[1].toNumber('inches'));
  return `${feet}'${inches}"`;
};

const lbsFromKgs = (kg) => {
  return math.round(math.unit(kg, 'kg').toNumber('lb'));
};

const styles = {
  statItem: {
    padding: '2px 0',
  },
};

const ProfileBasicStats = ({
  data,
}) => (
    <Panel header="Basic Stats">
      <div style={styles.statItem}>
        {`Age Range: ${data.ageMin}-${data.ageMax}`}
      </div>
      <div style={styles.statItem}>
        {`Gender: ${data.gender}`}
      </div>
      <div style={styles.statItem}>
        {`Ethnicities: ${data.ethnicities.join(', ')}`}
      </div>
      <div style={styles.statItem}>
        {`Height: ${ftAndInFromCm(data.heightCm)} (${data.heightCm}cm)`}
      </div>
      <div style={styles.statItem}>
        {`Weight: ${lbsFromKgs(data.weightKg)} lbs (${data.weightKg}kg)`}
      </div>
      <div style={styles.statItem}>
        {`Bust: ${data.bust}`}
      </div>
      <div style={styles.statItem}>
        {`Waist: ${data.waist}`}
      </div>
      <div style={styles.statItem}>
        {`Hips: ${data.hips}`}
      </div>
    </Panel>
);
ProfileBasicStats.defaultProps = {
  data: {
    ageMin: 0,
    ageMax: 0,
    gender: '',
    heightCm: 0,
    weightKg: 0,
    bust: 0,
    waist: 0,
    hips: 0,
  },
};
ProfileBasicStats.propTypes = {
  data: React.PropTypes.shape(
    {
      ageMin: React.PropTypes.number,
      ageMax: React.PropTypes.number,
      gender: React.PropTypes.oneOf(['Male', 'Female', 'Transgender']),
      ethnicities: React.PropTypes.arrayOf(React.PropTypes.string),
      heightCm: React.PropTypes.number,
      weightKg: React.PropTypes.number,
      bust: React.PropTypes.number,
      waist: React.PropTypes.number,
      hips: React.PropTypes.number,
    }
  ).isRequired,
};

export default ProfileBasicStats;
