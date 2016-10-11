import React from 'react';

export default function () {
  class OCMediaCarousel extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      const { style } = this.props;

      return (
        <div style={style}></div>
      );
    }
  }
  OCMediaCarousel.propTypes = {
    style: React.PropTypes.object,
    children: React.PropTypes.string,
    numElementsPerPanel: React.PropTypes.number,
  };
  return OCMediaCarousel;
}
