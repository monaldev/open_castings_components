import React from 'react';
import {
  CardTitle,
  RaisedButton,
  Dialog,
  FlatButton,
} from 'material-ui';

class AuditionOverview extends React.Component {
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
          <RaisedButton
            label="See Casting Details"
            fullWidth
            onTouchTap={() => this.setState({ openDialog: true })}
          />
          <RaisedButton
            label="Continue"
            secondary
          />
          <Dialog
            title={
              <CardTitle
                title={data.production.name}
                subtitle={data.production.type}
                style={{
                  paddingTop: 5,
                  paddingBottom: 5,
                }}
              />
            }
            open={this.state.openDialog}
            autoScrollBodyContent
            onRequestClose={() => this.setState({ openDialog: false })}
            modal={false}
            actions={[
              <FlatButton
                label="Close"
                onTouchTap={() => this.setState({ openDialog: false })}
              />,
            ]}
          >
            <div className="container text-center">
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
          </Dialog>
        </div>
      </div>
    );
  }
}

AuditionOverview.propTypes = {
  data: React.PropTypes.object,
};

export default AuditionOverview;
