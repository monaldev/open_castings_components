import React from 'react';
import 'font-awesome/css/font-awesome.css';

const styles = {
  list: {
    width: '50%',
    margin: 'auto',
  },
  arrows: {
    margin: '45px 7px',
    verticalAlign: 'top',
    cursor: 'pointer',
  },
};

let pageCount = 0;

class OCMediaCarousel extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      page: 0,
    };
    this.changePage = this.changePage.bind(this);
    this.stepLeft = this.stepLeft.bind(this);
    this.stepRight = this.stepRight.bind(this);
  }
  changePage(e) {
    this.setState({ page: e.target.value });
  }
  stepLeft() {
    const currentPage = this.state.page - 1 < 0 ? pageCount - 1 : this.state.page - 1;
    this.setState({ page: currentPage });
  }
  stepRight() {
    const currentPage = this.state.page + 1 > pageCount - 1 ? 0 : this.state.page + 1;
    this.setState({ page: currentPage });
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
    pageCount = Math.ceil(children.length / numElementsPerPanel);
    for (i = 0; i < pageCount; i++) {
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
          <span
            onClick={this.stepLeft}
            style={styles.arrows}
            className="fa fa-chevron-circle-left"
          />
            {childrenToShow}
          <span
            onClick={this.stepRight}
            style={styles.arrows}
            className="fa fa-chevron-circle-right"
          />
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
