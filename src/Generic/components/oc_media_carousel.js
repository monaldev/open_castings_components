import React from 'react';

// const styles = {
//   dot: {
//     float: 'left',
//     color: 'grey',
//   },
//   dotActive: {
//     float: 'left',
//     color: 'pink',
//   },
// };

export default function () {
  class OCMediaCarousel extends React.Component {
    constructor(props) {
      super(props);
    }
    changePage (e) {

    }
    render() {
      const { style } = this.props;
      // let components;
      // let dots = (
      //   <ul>
      //     <li><a href="#" /></li>
      //   </ul>
      // );

      return (
        <div style={style}>
          // dots
          // <div>
          //   components
          // </div>
        </div>
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
