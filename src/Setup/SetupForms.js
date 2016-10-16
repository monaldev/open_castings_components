import React from 'react';
import TextField from 'material-ui/TextField';
// import ReactFilepicker from 'react-filepicker';
//
// const options = {
//   buttonText: '+',
//   buttonClass: 'mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored filepicker',
//   mimetype: '*/*',
//   services: ['COMPUTER', 'FACEBOOK', 'INSTAGRAM', 'DROPBOX', 'GOOGLE_DRIVE', 'FLICKR', 'VIDEO', 'WEBCAM']
// };


export default class SetupForms extends React.Component {
  callbackFunction() {
    // console.log('success!');
  }
  render() {
    // <ReactFilepicker apikey={'ACQm5YwJxSu6Ca2Lk5bKpz'} defaultWidget={false} options={options} onSuccess={this.callbackFunction} />
    return (
      <div style={{ padding: '1.5rem', marginBottom: '2.5rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', }}>
          <h2 style={{ fontSize: '1.5rem', fontFamily: 'Lato', alignSelf: 'center' }}>Enter Basic Info</h2>
          <br />
          <p style={{ alignSelf: 'center', fontFamily: 'Lato' }}>Add Your Headshot!</p>
          <br />
          <TextField
            floatingLabelText='First Name'
            fullWidth
            underlineFocusStyle={{ borderColor: '#ff3366' }}
            floatingLabelFocusStyle={{ color: '#ff3366' }}

          />
          <br />
          <TextField
            floatingLabelText='Last Name'
            fullWidth
            underlineFocusStyle={{ borderColor: '#ff3366' }}
            floatingLabelFocusStyle={{ color: '#ff3366' }}
          />
          <br />
          <TextField
            floatingLabelText='Email'
            fullWidth
            underlineFocusStyle={{ borderColor: '#ff3366' }}
            floatingLabelFocusStyle={{ color: '#ff3366' }}
          />
          <br />
          <TextField
            floatingLabelText='Phone Number'
            fullWidth
            underlineFocusStyle={{ borderColor: '#ff3366' }}
            floatingLabelFocusStyle={{ color: '#ff3366' }}
          />
        </div>
      </div>
    );
  }
}
