import React from 'react';
import {
  Button,
  ButtonToolbar,
} from 'react-bootstrap';

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
  dotStyle: {
    float: 'left',
    color: 'transparent',
    marginRight: '20px',
    fontSize: '25px',
    cursor: 'pointer',
  },
};

let stepCount = 0;

class OCStepper extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      step: props.currentStep || 0,
    };
    this.changeStep = this.changeStep.bind(this);
    this.stepLeft = this.stepLeft.bind(this);
    this.stepRight = this.stepRight.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.currentStep !== this.state.currentStep) {
      this.setState({ currentStep: nextProps.currentStep });
    }
  }
  changeStep(e) {
    this.setState({ step: e.target.value });
  }
  stepLeft() {
    const currentStep = this.state.step - 1 < 0 ? stepCount - 1 : this.state.step - 1;
    this.setState({ step: currentStep });
  }
  stepRight() {
    const currentStep = this.state.step + 1 > stepCount - 1 ? 0 : this.state.step + 1;
    this.setState({ step: currentStep });
  }
  render() {
    const { style, steps, hideNavButtons, navButtons, hideDots } = this.props;
    const { step } = this.state;
    let stepToShow = steps[step].component;
    const isCurrentStepValid = steps[step].isValid;
    let i;
    let dotStyle;
    let stepsOverview = [];
    stepCount = steps.length;
    for (i = 0; i < stepCount; i++) {
      dotStyle = { ...styles.dotStyle };
      dotStyle.color = i === this.state.step ? 'pink' : 'grey';
      stepsOverview.push(<li key={i} onClick={this.changeStep} value={i} style={dotStyle}></li>);
    }
    let dots = (
      <ul style={styles.list}>
        {stepsOverview}
      </ul>
    );

    return (
      <div style={style}>
        {
          hideDots
          ? undefined
          : (
            <div>
              {dots}
            </div>
          )
        }
        <div>
          {stepToShow}
        </div>
        <br />
        {
          hideNavButtons
          ? navButtons
          : (
              <ButtonToolbar>
                <Button
                  onClick={this.stepLeft}
                  disabled={step === 0}
                >
                  Back
                </Button>
                <Button
                  onClick={this.stepRight}
                  disabled={!isCurrentStepValid}
                >
                  {
                    step === steps.length - 1
                    ? 'Finish'
                    : 'Next'
                  }
                </Button>
              </ButtonToolbar>
            )
        }
      </div>
    );
  }
}

OCStepper.propTypes = {
  style: React.PropTypes.object,
  steps: React.PropTypes.array,
  currentStep: React.PropTypes.number,
  hideNavButtons: React.PropTypes.bool,
  hideDots: React.PropTypes.bool,
  navButtons: React.PropTypes.node,
};

export default OCStepper;
