/**
 * Created by nsnik on 10/10/2016.
 */
import React from 'react';

const ProfileMorePhotosStyles = {
    border: '1px solid #eee',
    borderRadius: 3,
    backgroundColor: '#FFFFFF',
    cursor: 'pointer',
    padding: '3px 10px',
    height: '96px',
    width: '96px',
};

const ProfileMorePhotos = ({ data, style = {} }) => (
    <div>
    {
        data.map((item, index) => (
            <img src={item} style={{ ...ProfileMorePhotosStyles, ...style }}  />
        ))
    }
    </div>
);

ProfileMorePhotos.propTypes = {
    data: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
    style: React.PropTypes.object,
};

export default ProfileMorePhotos;
