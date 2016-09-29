import React from 'react';

const ProfileImageStyles = {
  border: '1px solid #eee',
  borderRadius: 3,
  backgroundColor: '#FFFFFF',
  cursor: 'pointer',
  fontSize: 15,
  padding: '3px 10px',
};

const ProfileImage = ({ children, onClick, style = {} }) => (
  <button
    style={{ ...ProfileImageStyles, ...style }}
    onClick={onClick}
  >
    {children}
  </button>
);

ProfileImage.propTypes = {
  children: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func,
  style: React.PropTypes.object,
};

export default ProfileImage;
