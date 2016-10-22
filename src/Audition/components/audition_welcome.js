import React from 'react';
import {
  Input,
} from 'formsy-react-components';

import {
  Button,
  Modal,
  Row,
  Col,
} from 'react-bootstrap';

import { OCFormContainer } from '../../';

class AuditionWelcome extends React.Component {
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
        className="col-xs-12 right-side"
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          backgroundImage: 'url(https://app.opencastings.com/assets/slate-1cf2c786d862380e680533a1c9d1c76962e40a0dadff36e0c39ce9fdcc486911.jpg)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'top',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            textAlign: 'center',
            backgroundColor: 'rgba(0,0,0,0.65)',
            padding: '75px',
          }}
        >
          <img
            src="http://i.imgur.com/1pYNbSV.png"
            alt="background"
            style={{
              height: '141px',
              width: '141px',
              alignSelf: 'center',
            }}
          />
          <h3
            style={{
              marginTop: '24px',
              color: 'white',
              fontWeight: '300',
              fontSize: '24px',
            }}
          >
            Congrats! You have been invited to audition for the production of
          </h3>
          <h3
            style={{
              marginTop: 0,
              color: 'white',
              fontWeight: 300,
              fontSize: '28px',
              textTransform: 'uppercase',
            }}
          >
            {data.production.name}
          </h3>
          <br />
          <Button
            label = "Take Audition"
            secondary
            onClick={() => this.setState({ openDialog: true })}
          >Take Audition</Button>
          <Modal
            show={this.state.openDialog}
            onHide={close}
          >
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
          }}
          >
            <OCFormContainer
              layout="vertical"
              autocomplete="off"
            >
            <Row
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
                flexWrap: 'wrap',
              }}
            >
            <Col md={6} >
              <Input
                name="first_name"
                label="First name"
                type="text"
                style={{
                  width: '98%',
                }}
              />
            </Col>
            <Col md={6} >
              <Input
                name="last_name"
                label="Last name"
                type="text"
              />
            </Col>
            </Row>
            <Input
              name="phone_number"
              label="Phone number"
              type="text"
            />
            <Input
              name="email"
              label="Email address"
              type="text"
            />
            <Input
              name="email_confirm"
              label="Confirm email address"
              type="text"
            />
            </OCFormContainer>
            <Button
              secondary
              onClick={() => this.setState({ openDialog: false })}
            >Continue</Button>
            </Modal.Body>
          </Modal>
        </div>
      </div>
    );
  }
}

AuditionWelcome.propTypes = {
  data: React.PropTypes.object,
};

export default AuditionWelcome;
