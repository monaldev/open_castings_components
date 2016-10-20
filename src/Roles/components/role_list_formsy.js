import React from 'react';
import {
  ButtonGroup,
  Button,
  Panel,
  PanelGroup,
  ControlLabel,
  FormGroup,
} from 'react-bootstrap';
import {
  RoleAddEditStepper,
} from '../../';
import roleTypes from './role_types.json';
import { HOC as hoc } from 'formsy-react';

class RoleListFormsy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }
  render() {
    const {
      getValue,
      setValue,
    } = this.props;
    return (
      <div>
        <h4>Role(s) You're Casting</h4>
        <PanelGroup>
          {
            getValue().map((role, index) => (
              <Panel
                header={
                  <div
                    style={{
                      width: '100%',
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <div
                      className="panel-title"
                    >
                      {role.title}
                    </div>
                    <ButtonGroup pullRight>
                      <Button>Edit</Button>
                      <Button>Delete</Button>
                    </ButtonGroup>
                  </div>
                }
                eventKey={index}
              >
                {
                  role.description
                  ? (
                      <FormGroup>
                        <ControlLabel>Description:&nbsp;</ControlLabel>
                        <span>{role.description}</span>
                      </FormGroup>
                    )
                  : undefined
                }
                {
                  role.ageMin
                  ? (
                      <FormGroup>
                        <ControlLabel>Age Range:&nbsp;</ControlLabel>
                        <span>{`${role.ageMin} - ${role.ageMax}`}</span>
                      </FormGroup>
                    )
                  : undefined
                }
                {
                  role.ethnicities.length > 0
                  ? (
                      <FormGroup>
                        <ControlLabel>Ethnicity(s):&nbsp;</ControlLabel>
                        <span>{role.ethnicities.join(', ')}</span>
                      </FormGroup>
                    )
                  : undefined
                }
                {
                  role.ethnicities.length > 0
                  ? (
                      <FormGroup>
                        <ControlLabel>Union Status:&nbsp;</ControlLabel>
                        <span>{roleTypes.unionStatus[role.unionStatus]}</span>
                      </FormGroup>
                    )
                  : undefined
                }
              </Panel>
            ))
          }
        </PanelGroup>
        <Button
          onClick={() => this.setState({ showModal: true })}
        >
          + Add a Role
          <RoleAddEditStepper
            show={this.state.showModal}
            onSubmit={(model) => {
              this.setState({ showModal: false }, () => {
                const newValue = [...getValue()];
                newValue.push({ ...model });
                setValue(newValue);
              });
            }}
            onHide={() => this.setState({ showModal: false })}
          />
        </Button>
      </div>
    );
  }
}
RoleListFormsy.propTypes = {
  getValue: React.PropTypes.func,
  setValue: React.PropTypes.func,
  getErrorMessage: React.PropTypes.func,
};

export default hoc(RoleListFormsy);
