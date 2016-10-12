import React from 'react';
import { Chip } from 'material-ui';

var ProfileSkills = function ProfileSkills(_ref) {
  var data = _ref.data;
  return React.createElement(
    'div',
    {
      style: {
        display: 'flex',
        flexWrap: 'wrap'
      }
    },
    data.map(function (skill) {
      return React.createElement(
        Chip,
        {
          style: {
            margin: '4px',
            backgroundColor: 'transparent',
            border: '1px solid #F93666',
            borderRadius: '2px'
          },
          labelColor: '#F93666'
        },
        skill
      );
    })
  );
};
process.env.NODE_ENV !== "production" ? ProfileSkills.propTypes = {
  jobs: React.PropTypes.arrayOf(React.PropTypes.string)
} : void 0;

process.env.NODE_ENV !== "production" ? ProfileSkills.propTypes = {
  data: React.PropTypes.arrayOf(React.PropTypes.string).isRequired
} : void 0;

export default ProfileSkills;