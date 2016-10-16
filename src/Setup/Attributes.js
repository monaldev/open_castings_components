import React from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const items = [
  <MenuItem key={1} value={1} primaryText='Caucasian' />,
  <MenuItem key={2} value={2} primaryText='African American' />,
  <MenuItem key={3} value={3} primaryText='Hispanic' />,
  <MenuItem key={4} value={4} primaryText='Asian' />,
  <MenuItem key={5} value={5} primaryText='South Asian' />,
  <MenuItem key={6} value={6} primaryText='Native American' />,
  <MenuItem key={7} value={7} primaryText='Middle Eastern' />,
  <MenuItem key={8} value={8} primaryText='Southeast Asian / Pacific Islander' />,
  <MenuItem key={9} value={9} primaryText='Ethnically Ambiguous / Mixed Race' />,
  <MenuItem key={10} value={10} primaryText='African Descent' />
];

const gender = [
  <MenuItem key={1} value={1} primaryText='Female' />,
  <MenuItem key={2} value={2} primaryText='Male' />,
  <MenuItem key={3} value={3} primaryText='Transgendered' />
];

const bodyType = [
  <MenuItem key={1} value={1} primaryText='Average' />,
  <MenuItem key={2} value={2} primaryText='Slim' />,
  <MenuItem key={3} value={3} primaryText='Athletic / Toned' />,
  <MenuItem key={4} value={4} primaryText='Muscular' />,
  <MenuItem key={5} value={5} primaryText='Curvy' />,
  <MenuItem key={6} value={6} primaryText='Heavyset / Stocky' />,
  <MenuItem key={7} value={7} primaryText='Plus-Sized / Full-Figured' />,
];

const eyeColor = [
  <MenuItem key={1} value={1} primaryText='Amber' />,
  <MenuItem key={2} value={2} primaryText='Blue' />,
  <MenuItem key={3} value={3} primaryText='Brown' />,
  <MenuItem key={4} value={4} primaryText='Gray' />,
  <MenuItem key={5} value={5} primaryText='Green' />,
  <MenuItem key={6} value={6} primaryText='Hazel' />,
  <MenuItem key={7} value={7} primaryText='Red' />,
  <MenuItem key={8} value={8} primaryText='Violet' />
];

const hairColor = [
  <MenuItem key={1} value={1} primaryText='Black' />,
  <MenuItem key={2} value={2} primaryText='Brown' />,
  <MenuItem key={3} value={3} primaryText='Blonde' />,
  <MenuItem key={4} value={4} primaryText='Auburn' />,
  <MenuItem key={5} value={5} primaryText='Chestnut' />,
  <MenuItem key={6} value={6} primaryText='Red' />,
  <MenuItem key={7} value={7} primaryText='Gray' />,
  <MenuItem key={8} value={8} primaryText='White' />,
  <MenuItem key={9} value={9} primaryText='Bald' />,
];

const heightFeet = [
  <MenuItem key={1} value={1} primaryText='3ft' />,
  <MenuItem key={2} value={2} primaryText='4ft' />,
  <MenuItem key={3} value={3} primaryText='5ft' />,
  <MenuItem key={4} value={4} primaryText='6ft' />,
  <MenuItem key={5} value={5} primaryText='7ft' />,
  <MenuItem key={6} value={6} primaryText='8ft' />,
];

const heightInches = [
  <MenuItem key={1} value={1} primaryText='1in' />,
  <MenuItem key={2} value={2} primaryText='2in' />,
  <MenuItem key={3} value={3} primaryText='3in' />,
  <MenuItem key={4} value={4} primaryText='4in' />,
  <MenuItem key={5} value={5} primaryText='5in' />,
  <MenuItem key={6} value={6} primaryText='6in' />,
  <MenuItem key={7} value={7} primaryText='7in' />,
  <MenuItem key={8} value={8} primaryText='8in' />,
  <MenuItem key={9} value={9} primaryText='9in' />,
  <MenuItem key={10} value={10} primaryText='10in' />,
  <MenuItem key={11} value={11} primaryText='11in' />,
];

export default class Attributes extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: null };
  }
  handleChange = (event, index, value) => this.setState({ value });
  render() {
    return (
      <div style={{ padding: '1.5rem', marginBottom: '2.5rem' }}>
        <div className='mdl-grid'>
          <h2 className='mdl-cell mdl-cell--12-col' style={{ fontSize: '1.5rem', fontFamily: 'Lato', alignSelf: 'center', textAlign: 'center' }}>Enter Attributes</h2>
          <br />
          <div className='mdl-cell mdl-cell--6-col'>
            <SelectField
              value={this.state.value}
              onChange={this.handleChange}
              floatingLabelText='Ethnicity'
            >
              {items}
            </SelectField>
            <br />
            <SelectField
              value={this.state.value}
              onChange={this.handleChange}
              floatingLabelText='Gender'
            >
              {gender}
            </SelectField>
          </div>
          <div className='mdl-cell mdl-cell--6-col'>
            <SelectField
              value={this.state.value}
              onChange={this.handleChange}
              floatingLabelText='Body Type'
            >
              {bodyType}
            </SelectField>
            <br />
            <SelectField
              value={this.state.value}
              onChange={this.handleChange}
              floatingLabelText='Eye Color'
            >
              {eyeColor}
            </SelectField>
          </div>
          <div className='mdl-cell mdl-cell--12-col'>
            <SelectField
              value={this.state.value}
              onChange={this.handleChange}
              floatingLabelText='Hair Color'
            >
              {hairColor}
            </SelectField>
          </div>
          <br />
          <div className='mdl-cell mdl-cell--6-col'>
            <SelectField
              value={this.state.value}
              onChange={this.handleChange}
              floatingLabelText='Height FT'
            >
              {heightFeet}
            </SelectField>
          </div>
          <div className='mdl-cell mdl-cell--6-col'>
            <SelectField
              value={this.state.value}
              onChange={this.handleChange}
              floatingLabelText='Height IN'
            >
              {heightInches}
            </SelectField>
          </div>
          <br />
          <div className='mdl-cell mdl-cell--6-col'>
            <TextField
              floatingLabelText='Age Min'
              underlineFocusStyle={{ borderColor: '#ff3366' }}
              floatingLabelFocusStyle={{ color: '#ff3366' }}
            />
          </div>
          <div className='mdl-cell mdl-cell--6-col'>
            <TextField
              floatingLabelText='Age Max'
              underlineFocusStyle={{ borderColor: '#ff3366' }}
              floatingLabelFocusStyle={{ color: '#ff3366' }}
            />
          </div>
          <br />
          <TextField
            floatingLabelText='Weight (lbs)'
            fullWidth
            underlineFocusStyle={{ borderColor: '#ff3366' }}
            floatingLabelFocusStyle={{ color: '#ff3366' }}
          />
        </div>
      </div>
    );
  }
}
