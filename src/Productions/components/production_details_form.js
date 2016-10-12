import React from 'react';
import {
  CardTitle,
  CardHeader,
} from 'material-ui';
import {
  FormsyText,
  FormsyDate,
} from 'formsy-material-ui';
import Formsy from 'formsy-react';
import { OCFormsyCitySearch } from '../../';

const ProductionDetailsForm = ({
  style,
  ...rest,
}) => (
  <div
    style={{ ...style }}
  >
    <CardTitle
      title="Production Details"
    />
    <Formsy.Form
      {...rest}
    >
      <FormsyText
        floatingLabelText="Title of Production*"
        name="title"
        floatingLabelFixed
        fullWidth
        isRequired
        validations="minLength:1"
        validationError="Please enter a longer title"
      />
      <FormsyText
        floatingLabelText="Production Company*"
        name="company"
        floatingLabelFixed
        fullWidth
        isRequired
      />
      <FormsyText
        floatingLabelText="Production Description (optional)"
        name="description"
        floatingLabelFixed
        multiLine
        fullWidth
        rows={2}
      />
      <CardHeader
        title="Production Location*"
        style={{
          paddingLeft: 0,
        }}
        isRequired
      />
      <OCFormsyCitySearch
        name="city"
        isRequired
      />
      <CardHeader
        title="Production Date(s)"
        style={{
          paddingLeft: 0,
        }}
      />
      <FormsyDate
        name="start"
        floatingLabelText="Start Date"
        floatingLabelFixed
      />
      <FormsyDate
        name="end"
        floatingLabelText="End Date"
        floatingLabelFixed
      />
    </Formsy.Form>
  </div>
);

ProductionDetailsForm.propTypes = {
  style: React.PropTypes.object,
};

export default ProductionDetailsForm;
