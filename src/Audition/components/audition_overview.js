import React from 'react';

import {
  Button,
  Modal,
} from 'react-bootstrap';

class AuditionOverview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openDialog: false,
    };
  }
  render() {
    const { data } = this.props;
    let close = () => this.setState({ openDialog: false });
    return (
      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            textAlign: 'center',
            padding: '0',
          }}
        >
          <iframe
            src="https://s.codepen.io/rajinwonderland/debug/kkPVpZ"
            style={{
              border: '0px #ffffff none',
              maxWidth: '500px',
            }}
            name="AuditionTips"
            scrolling="no"
            height="75%"
            width="100%"
          />
          <Button
            style = { { width: '100%' } }
            onClick={() => this.setState({ openDialog: true })}
          >See Casting Details</Button>
          <Button bsStyle="danger">Continue</Button>
          <Modal
            show={this.state.openDialog}
            onHide={close}
          >
          <Modal.Header closeButton>
            <Modal.Title>
              <span style={ { display: 'block' } }>{data.production.name}</span>
              <span style = {
                {
                  fontSize: '14px',
                  color: 'rgba(66, 66, 66, 0.541176)',
                  display: 'block',
                }
              }
              >
                {data.production.type}
              </span>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div style = {
              {
                fontSize: '16px',
                color: 'rgba(66, 66, 66, 0.6)',
                padding: '0px 24px 24px',
              }
            }
            >
              <div className="container">
                <div className="col-xs-6 sign-in-modal stuff">
                  <p>
                    Role: {data.role.name}
                  </p>
                  <p>
                    Role Type: {data.role.type}
                  </p>
                  <p>
                    Description: {data.role.description}
                  </p>
                  <p>
                    Ages: {data.role.ageMin} - {data.role.ageMax}
                  </p>
                  <p>
                    Ethnicity: {data.role.ethnicity}
                  </p>
                  <p>
                    Gender: {data.role.gender}
                  </p>
                  <p>
                    Location: {data.production.location}
                  </p>
                  <p>
                    Compensation Details: {data.role.compensationDetails}
                  </p>
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={ close }>Close</Button>
          </Modal.Footer>
          </Modal>
        </div>
      </div>
    );
  }
}

AuditionOverview.propTypes = {
  data: React.PropTypes.object,
};

export default AuditionOverview;
