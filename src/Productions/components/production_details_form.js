import React from 'react';
import {
  CardTitle,
  CardHeader,
  FormsyText,
  FormsyDate,
} from 'formsy-material-ui';
import Formsy from 'formsy-react';

class ProductionDetailsForm extends React.Component {
  render() {
    const { style } = this.props;
    return (
      <div
        style={{ ...style }}
      >
        <CardTitle
          title="Production Details"
        />
        <Formsy.Form
          onValid={this.enableButton}
          onInvalid={this.disableButton}
          onValidSubmit={this.submitForm}
          onInvalidSubmit={this.notifyFormError}
        >
          <FormsyText
            floatingLabelText="Title of Production*"
            floatingLabelFixed
            fullWidth
          />
          <FormsyText
            floatingLabelText="Production Company*"
            floatingLabelFixed
            fullWidth
          />
          <FormsyText
            floatingLabelText="Production Description (optional)*"
            floatingLabelFixed
            multiLine
            fullWidth
            rows={2}
          />
          <CardHeader
            title="Production Date(s)"
            style={{
              paddingLeft: 0,
            }}
          />
          <FormsyDate
            floatingLabelText="Start Date"
            floatingLabelFixed
          />
          <FormsyDate
            floatingLabelText="End Date"
            floatingLabelFixed
          />
        </Formsy.Form>
      </div>
    );
  }
}

ProductionDetailsForm.propTypes = {
  style: React.PropTypes.object,
  selected: React.PropTypes.object,
  onChange: React.PropTypes.func,
};

export default ProductionDetailsForm;
