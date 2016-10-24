import React from 'react';
import {
  Row,
  Col,
  Panel,
  InputGroup,
  Button,
  FormControl,
} from 'react-bootstrap';
import { HOC as hoc } from 'formsy-react';

const suggestions = [
  'Suggestion 1',
  'Suggestion 2',
];

class RoleBuildAuditionFormsy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };
  }
  onAdd(side) {
    const newValue = this.props.getValue();
    newValue.push(side || this.state.input);
    this.setState({ input: '' }, () => this.props.setValue(newValue));
  }
  onRemove(index) {
    const newValue = this.props.getValue();
    newValue.splice(index, 1);
    this.setState({ input: '' }, () => this.props.setValue(newValue));
  }
  render() {
    const {
      getValue,
    } = this.props;
    return (
      <div>
        <div>[Basic instructional text here]</div>
        <Row>
          <Col
            sm={6}
          >
            <InputGroup>
              <FormControl
                type="text"
                value={this.state.input}
                placeholder="Enter your side here"
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    this.onAdd(this.state.input);
                  }
                }}
                onChange={(e) => this.setState({ input: e.target.value })}
              />
              <InputGroup.Button>
                <Button
                  onClick={() => this.onAdd(this.state.input)}
                >
                  Add
                </Button>
              </InputGroup.Button>
            </InputGroup>
            {
              getValue().map((side, index) => (
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    flexWrap: 'no-wrap',
                    marginTop: '5px',
                  }}
                >
                  <div
                    style={{
                      flex: 3,
                      paddingRight: '5px',
                    }}
                  >
                    {side}
                  </div>
                  <div
                    style={{
                      flex: 0.5,
                      display: 'flex',
                      justifyContent: 'flex-end',
                    }}
                  >
                    <Button
                      onClick={this.onRemove.bind(this, index)}
                    >
                      x
                    </Button>
                  </div>
                </div>
              ))
            }
          </Col>
          <Col
            sm={6}
          >
            <Panel
              header="Suggested Sides"
            >
              {
                suggestions.map((suggestion) => (
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      flexWrap: 'no-wrap',
                      marginTop: '5px',
                    }}
                  >
                    <div
                      style={{
                        flex: 0.5,
                        display: 'flex',
                        justifyContent: 'flex-end',
                      }}
                    >
                      <Button
                        onClick={() => this.onAdd(suggestion)}
                      >
                        +
                      </Button>
                    </div>
                    <div
                      style={{
                        flex: 3,
                        paddingLeft: '5px',
                      }}
                    >
                      {suggestion}
                    </div>
                  </div>
                ))
              }
            </Panel>
          </Col>
        </Row>
      </div>
    );
  }
}
RoleBuildAuditionFormsy.propTypes = {
  getValue: React.PropTypes.func,
  setValue: React.PropTypes.func,
  getErrorMessage: React.PropTypes.func,
};

export default hoc(RoleBuildAuditionFormsy);
