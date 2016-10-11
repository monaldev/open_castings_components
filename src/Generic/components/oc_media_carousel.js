import React from 'react';

const styles = {
  dot: {
    float: 'left',
    color: 'pink',
    marginRight: '20px',
    fontSize: '25px',
    cursor: 'pointer',
  },
  list: {
    width: '50%',
    margin: 'auto',
    position: 'relative',
  },
};

class OCMediaCarousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 0,
    };
  }
  changePage(e) {
    this.setState({ page: e.target.value });
  }
  render() {
    const { style } = this.props;

    let dots = (
      <ul style={styles.list}>
        <li style={styles.dot} value={2} onClick={this.changePage}></li>
      </ul>
    );

    return (
      <div style={style}>
        {dots}
        {this.props.children}
      </div>
    );
  }
}

OCMediaCarousel.propTypes = {
  style: React.PropTypes.object,
  children: React.PropTypes.string,
  numElementsPerPanel: React.PropTypes.number,
};

export default OCMediaCarousel;
