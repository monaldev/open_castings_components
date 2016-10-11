import React from 'react';

const styles = {
  list: {
    width: '50%',
    margin: 'auto',
  },
};

class OCMediaCarousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 0,
    };
    this.changePage = this.changePage.bind(this);
  }
  changePage(e) {
    this.setState({ page: e.target.value });
  }
  render() {
    const { style, children, numElementsPerPanel } = this.props;
    const startIdx = (this.state.page * numElementsPerPanel);
    let childrenToShow = [];
    let i;
    let dotStyle;
    for (i = 0; i < numElementsPerPanel; i++) {
      childrenToShow.push(children[startIdx + i]);
    }
    let pages = [];
    for (i = 0; i < Math.ceil(children.length / numElementsPerPanel); i++) {
      dotStyle = {
        float: 'left',
        color: i === this.state.page ? 'pink' : 'grey',
        marginRight: '20px',
        fontSize: '25px',
        cursor: 'pointer',
      };
      pages.push(<li key={i} onClick={this.changePage} value={i} style={dotStyle}></li>);
    }
    let dots = (
      <ul style={styles.list}>
        {pages}
      </ul>
    );

    return (
      <div style={style}>
        <span>{this.props.title}</span>
        <div>
          {dots}
        </div>
        <br />
        <br />
        <div>
          {childrenToShow}
        </div>
      </div>
    );
  }
}

OCMediaCarousel.propTypes = {
  style: React.PropTypes.object,
  children: React.PropTypes.arrayOf(React.PropTypes.element),
  numElementsPerPanel: React.PropTypes.number,
  title: React.PropTypes.string,
};

export default OCMediaCarousel;
