/**
 * Created by nsnik on 10/10/2016.
 */
import React from 'react';
import OCMediaCarousel from '../../Generic/components/oc_media_carousel';

const ProfileMorePhotosStyles = {
  border: '1px solid #eee',
  borderRadius: 3,
  backgroundColor: '#FFFFFF',
  cursor: 'pointer',
  padding: '3px 10px',
  height: '96px',
  width: '96px',
};
class ProfileMorePhotos extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const numElementsPerPanel = this.props.numElementsPerPanel || 3;
    const childrenNodes = this.props.data.map((item, index) => (
      <img
        src={item}
        style={{...ProfileMorePhotosStyles, ...this.props.style}}
        key={index}
        role="presentation"
      />
    ));
    return (
      <div>
        <OCMediaCarousel
          title={this.props.data.length + ' Photos'}
          children={childrenNodes}
          style={this.props.style}
          numElementsPerPanel={numElementsPerPanel}
        />
      </div>
    );
  }
}

ProfileMorePhotos.propTypes = {
  data: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
  style: React.PropTypes.object,
  numElementsPerPanel: React.PropTypes.number,
};

export default ProfileMorePhotos;
