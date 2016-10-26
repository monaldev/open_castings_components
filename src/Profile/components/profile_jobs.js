import React from 'react';

const Jobs = ({ jobs }) => (
  <div style={{ display: 'flex' }}>
    {jobs.join(' / ')}
  </div>
);
Jobs.propTypes = {
  jobs: React.PropTypes.arrayOf(React.PropTypes.string),
};

const normalJobs = ({ data }) => (
  <div
    style={{
      display: 'flex',
    }}
  >
    <Jobs jobs={data} />
  </div>
);
normalJobs.propTypes = {
  data: React.PropTypes.array,
};

const ProfileJobs = ({ data }) => (
  <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
    <Jobs jobs={data} />
  </div>
);
ProfileJobs.propTypes = {
  data: React.PropTypes.array.isRequired,
};

export default ProfileJobs;
