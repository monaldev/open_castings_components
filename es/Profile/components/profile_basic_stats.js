import React from 'react';
import { Card, CardText, CardTitle, Divider } from 'material-ui';
import math from 'mathjs';

var ftAndInFromCm = function ftAndInFromCm(cm) {
  var ftAndIn = math.splitUnit(math.unit(cm, 'cm'), ['feet', 'inches']);
  var feet = ftAndIn[0].toNumber('feet');
  var inches = math.round(ftAndIn[1].toNumber('inches'));
  return feet + '\'' + inches + '"';
};

var lbsFromKgs = function lbsFromKgs(kg) {
  return math.round(math.unit(kg, 'kg').toNumber('lb'));
};

var styles = {
  statItem: {
    padding: '2px 0'
  }
};

var ProfileBasicStats = function ProfileBasicStats(_ref) {
  var data = _ref.data;
  return React.createElement(
    Card,
    {
      initiallyExpanded: true
    },
    React.createElement(CardTitle, {
      title: 'Basic Stats',
      actAsExpander: true,
      showExpandableButton: true
    }),
    React.createElement(Divider, null),
    React.createElement(
      CardText,
      {
        expandable: true
      },
      React.createElement(
        'div',
        { style: styles.statItem },
        'Age Range: ' + data.ageMin + '-' + data.ageMax
      ),
      React.createElement(
        'div',
        { style: styles.statItem },
        'Gender: ' + data.gender
      ),
      React.createElement(
        'div',
        { style: styles.statItem },
        'Ethnicities: ' + data.ethnicities.join(', ')
      ),
      React.createElement(
        'div',
        { style: styles.statItem },
        'Height: ' + ftAndInFromCm(data.heightCm) + ' (' + data.heightCm + 'cm)'
      ),
      React.createElement(
        'div',
        { style: styles.statItem },
        'Weight: ' + lbsFromKgs(data.weightKg) + ' lbs (' + data.weightKg + 'kg)'
      ),
      React.createElement(
        'div',
        { style: styles.statItem },
        'Bust: ' + data.bust
      ),
      React.createElement(
        'div',
        { style: styles.statItem },
        'Waist: ' + data.waist
      ),
      React.createElement(
        'div',
        { style: styles.statItem },
        'Hips: ' + data.hips
      )
    )
  );
};
ProfileBasicStats.defaultProps = {
  data: {
    ageMin: 0,
    ageMax: 0,
    gender: '',
    heightCm: 0,
    weightKg: 0,
    bust: 0,
    waist: 0,
    hips: 0
  }
};
process.env.NODE_ENV !== "production" ? ProfileBasicStats.propTypes = {
  data: React.PropTypes.shape({
    ageMin: React.PropTypes.number,
    ageMax: React.PropTypes.number,
    gender: React.PropTypes.oneOf(['Male', 'Female', 'Transgender']),
    ethnicities: React.PropTypes.arrayOf(React.PropTypes.string),
    heightCm: React.PropTypes.number,
    weightKg: React.PropTypes.number,
    bust: React.PropTypes.number,
    waist: React.PropTypes.number,
    hips: React.PropTypes.number
  }).isRequired
} : void 0;

export default ProfileBasicStats;