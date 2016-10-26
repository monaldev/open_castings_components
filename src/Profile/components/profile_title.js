import React from 'react';

const Title = ({ title }) => (
  <div
    style={{
      fontSize: '1.5em',
    }}
  >
    {title}
  </div>
);
Title.propTypes = {
  title: React.PropTypes.string,
};

const normalTitle = ({ data, hovered }) => (
  <div
    style={{
      display: 'flex',
      backgroundColor: hovered ? 'lightgray' : 'transparent',
      cursor: 'pointer',
    }}
  >
  <Title title={`${data.fName} ${data.lName}`} />
  </div>
);
normalTitle.propTypes = {
  data: React.PropTypes.object,
  hovered: React.PropTypes.bool,
};

const ProfileTitle = ({ data }) => (
  <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
    <Title title={`${data.fName} ${data.lName}`} />
  </div>
);
ProfileTitle.propTypes = {
  data: React.PropTypes.object.isRequired,
  editable: React.PropTypes.bool,
  editMode: React.PropTypes.bool,
  onChange: React.PropTypes.func,
  onSubmitEdit: React.PropTypes.func,
};

export default ProfileTitle;
