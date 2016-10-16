import React from 'react';
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import SetupForms from './SetupForms';
import Attributes from './Attributes';
import Paper from 'material-ui/Paper';


export default class SetupComponent extends React.Component {
  state = {
    finished: false,
    stepIndex: 0,
  };

  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return <SetupForms />;
      case 1:
        return <Attributes />;
      case 2:
        return 'This is the bit I really care about!';
      default:
        return 'You\'re a long way from home sonny jim!';
    }
  }
  handleNext = () => {
    const { stepIndex } = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 2,
    });
  };

  handlePrev = () => {
    const { stepIndex } = this.state;
    if (stepIndex > 0) {
      this.setState({ stepIndex: stepIndex - 1 });
    }
  };

  render() {
    const { finished, stepIndex } = this.state;
    const contentStyle = { margin: '0 16px' };

    return (

      <div style={{ width: '100%', margin: 'auto' }}>
        <Paper zDepth={2} style={{ width: '100%', minWidth: '375px', maxWidth: '700px', padding: '1.5rem', margin: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div>
            <Stepper activeStep={stepIndex} style={{ fontFamily: 'Lato', position: 'absolute', top: 0, left: 0, fontSize: '2rem' }}>
              <Step>
                <StepLabel style={{ color: '#ff3366' }}>Edit Basic Info</StepLabel>
              </Step>
              <Step>
                <StepLabel style={{ color: '#ff3366' }}>Edit Attributes</StepLabel>
              </Step>
              <Step>
                <StepLabel style={{ color: '#ff3366' }}>Edit Previous Work</StepLabel>
              </Step>
            </Stepper>
          </div>
          <br />
          <div>
            <div style={contentStyle} >
               {
                 finished ? (
                   <p>
                     <a
                       href='#'
                       onClick={(event) => {
                         event.preventDefault();
                         this.setState({ stepIndex: 0, finished: false });
                       }}
                     >
                     Click here
                     </a> to reset the example.
                   </p>
               ) : (
                   <div style={{ display: 'flex', flexDirection: 'column' }}>
                     <div>{this.getStepContent(stepIndex)}</div>
                     <div style={{ alignSelf: 'center' }}>
                       <FlatButton
                         label='Back'
                         disabled={stepIndex === 0}
                         onTouchTap={this.handlePrev}
                         style={{ marginRight: 12 }}
                         labelStyle={{ color: '#ff3366' }}
                       />
                       <RaisedButton
                         label={stepIndex === 2 ? 'Finish' : 'Next'}
                         onTouchTap={this.handleNext}
                         backgroundColor={'#ff3366'}
                         labelColor={'#fff'}
                       />
                     </div>
                   </div>
               )
             }
            </div>
          </div>
        </Paper>
      </div>
    );
  }
}
