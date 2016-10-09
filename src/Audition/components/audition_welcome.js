import React from 'react';
import {
  RaisedButton,
  Dialog,
  TextField,
} from 'material-ui';

class AuditionWelcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openDialog: false,
    };
  }
  render() {
    const { data } = this.props;
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
          <RaisedButton
            label="Take Audition"
            secondary
            onTouchTap={() => this.setState({ openDialog: true })}
          />
          <Dialog
            open={this.state.openDialog}
            onRequestClose={() => this.setState({ openDialog: false })}
            modal={false}
            contentStyle={{
              maxWidth: '500px',
            }}
            bodyStyle={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
              }}
            >
              <TextField
                floatingLabelFixed
                floatingLabelText="First name"
                style={{
                  width: '48%',
                }}
              />
              <TextField
                floatingLabelFixed
                floatingLabelText="Last name"
                style={{
                  width: '48%',
                }}
              />
            </div>
            <TextField
              floatingLabelFixed
              floatingLabelText="Phone number"
              fullWidth
            />
            <TextField
              floatingLabelFixed
              floatingLabelText="Email address"
              fullWidth
            />
            <TextField
              floatingLabelFixed
              floatingLabelText="Confirm email address"
              fullWidth
            />
            <RaisedButton
              label="Continue"
              secondary
              onTouchTap={() => this.setState({ openDialog: false })}
            />
          </Dialog>
        </div>
      </div>
    );
  }
}

AuditionWelcome.propTypes = {
  data: React.PropTypes.object,
};

export default AuditionWelcome;
