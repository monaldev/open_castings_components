import React from 'react';
import {
  OCStepper,
  RoleDetailsForm,
  RoleBuildAuditionFormsy,
  OCFormContainer,
} from '../../';
import {
  Modal,
  Button,
  ButtonToolbar,
} from 'react-bootstrap';
import { Map as map } from 'immutable';
import roleTypes from './role_types';

const initialState = map({
  steps: [
    {
      name: 'Step 1',
      component: undefined,
      isValid: false,
    },
    {
      name: 'Step 2',
      component: undefined,
      isValid: false,
    },
  ],
  data: {
    title: undefined,
    type: '0',
    unionStatus: 'UNION_AND_NONUNION',
    gender: 'ANY_GENDER',
    ageMin: 0,
    ageMax: 100,
    ethnicities: Object.keys(roleTypes.ethnicities),
    description: undefined,
    requiresNudity: false,
    sides: [],
  },
  currentStep: 0,
});

class RoleAddEditStepper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState.toObject(),
      data: props.selected || initialState.toObject().data,
    };
  }
  onCancel() {
    this.setState(
      { ...initialState.toObject() },
      this.props.onHide.bind(this)
    );
  }
  onSubmit() {
    this.props.onSubmit(this.state.data);
    this.onCancel();
  }
  getComponentByStep() {
    const {
      data,
      steps,
      currentStep,
    } = this.state;
    switch (currentStep) {
      case 0: return (
        <RoleDetailsForm
          onChange={(model) => this.setState({ data: { ...data, ...model } })}
          selected={data}
          onValid={() => {
            const newSteps = [...steps];
            newSteps[currentStep].isValid = true;
            this.setState({ steps: newSteps });
          }}
          onInvalid={() => {
            const newSteps = [...steps];
            newSteps[currentStep].isValid = false;
            this.setState({ steps: newSteps });
          }}
        />
      );
      case 1: return (
        <OCFormContainer
          onChange={(model) => this.setState({ data: { ...data, ...model } })}
          onValid={() => {
            const newSteps = [...steps];
            newSteps[currentStep].isValid = true;
            this.setState({ steps: newSteps });
          }}
          onInvalid={() => {
            const newSteps = [...steps];
            newSteps[currentStep].isValid = false;
            this.setState({ steps: newSteps });
          }}
        >
          <RoleBuildAuditionFormsy
            value={data.sides}
            name="sides"
            validations={{
              validCategory: (values, value) =>
                (value.length > 0 ? true : 'Please add sides'),
            }}
            required
          />
        </OCFormContainer>
      );
      default: return undefined;
    }
  }
  render() {
    const {
      show,
    } = this.props;
    const {
      currentStep,
      steps,
    } = this.state;
    return (
      <Modal
        show={show}
        onHide={this.onCancel.bind(this)}
        bsSize={currentStep === 1 ? 'large' : undefined}
        backdrop="static"
      >
        <Modal.Header closeButton >
          {currentStep === 0 ? 'Add a Role' : 'Build Your Audition'}
        </Modal.Header>
        <Modal.Body>
          <OCStepper
            steps={
              steps.map((step, index) => ({
                ...step,
                component: this.getComponentByStep(index),
              }))
            }
            currentStep={currentStep}
            hideNavButtons
            hideDots
            navButtons={(
              <ButtonToolbar>
                <Button
                  onClick={
                    currentStep === 0
                    ? this.onCancel.bind(this)
                    : () => this.setState({ currentStep: currentStep - 1 })
                  }
                >
                  {currentStep === 0 ? 'Cancel' : 'Back'}
                </Button>
                <Button
                  onClick={
                    currentStep === steps.length - 1
                    ? this.onSubmit.bind(this)
                    : () => this.setState({ currentStep: currentStep + 1 })
                  }
                  disabled={!steps[currentStep].isValid}
                >
                  {
                    currentStep === steps.length - 1
                    ? 'Finish'
                    : 'Next'
                  }
                </Button>
              </ButtonToolbar>
            )}
          />
        </Modal.Body>
      </Modal>
    );
  }
}

RoleAddEditStepper.propTypes = {
  show: React.PropTypes.boolean,
  selected: React.PropTypes.object,
  onSubmit: React.PropTypes.func,
  onHide: React.PropTypes.func,
};

export default RoleAddEditStepper;
