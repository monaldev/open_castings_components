/**
 * Created by nsnik on 10/10/2016.
 */
import React from 'react';

const ProfileMorePhotosItemStyles = {
    border: '1px solid #eee',
    borderRadius: 3,
    backgroundColor: '#FFFFFF',
    cursor: 'pointer',
    padding: '3px 10px',
    height: '96px',
    width: '96px',
};

const ProfileMorePhotosItem = ({ data, style = {} }) => (
    <img src={data} style={{ ...ProfileMorePhotosItemStyles, ...style }}  />
);

ProfileMorePhotosItem.propTypes = {
    data: React.PropTypes.string.isRequired,
    style: React.PropTypes.object,
};

export default ProfileMorePhotosItem;
