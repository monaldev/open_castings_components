import React from 'react';
import {
  Input,
  RadioGroup,
  Checkbox,
} from 'formsy-react-components';
import { OCFormContainer } from '../../';
import productionTypes from './production_types.json';

const ProductionAdditionalInfoForm = ({
  style,
  selected,
  ...rest,
}) => (
  <div
    style={{ ...style }}
  >
    <div className="page-header">
      <h3>Additional Info</h3>
    </div>
    <OCFormContainer
      layout="vertical"
      autoComplete={false}
      {...rest}
    >
      <Input
        name="expDate"
        label="When should this listing expire"
        type="date"
        value={selected ? selected.expDate : undefined}
        required
      />
      <RadioGroup
        name="paymentType"
        type="inline"
        label="Payment Info"
        options={[
          ...Object.keys(productionTypes.paymentTypes).map(option => ({
            value: option,
            label: productionTypes.paymentTypes[option],
          })),
        ]}
        required
        value={selected ? selected.paymentType : undefined}
      />
      {
        selected && (selected.paymentType === 'EXPENSES_ONLY' || selected.paymentType === 'PAID')
        ? (
            <Input
              name="paymentDetails"
              placeholder="Enter payment details..."
              type="text"
              value={selected ? selected.paymentDetails : undefined}
            />
          )
        : undefined
      }
      <Checkbox
        name="hasFee"
        value={selected ? selected.hasFee : undefined}
        label="Applicants charged fees"
      />
      {
        selected && selected.hasFee
        ? (
            <Input
              name="feeDetails"
              placeholder="Enter fee details..."
              type="text"
              value={selected ? selected.feeDetails : undefined}
            />
          )
        : undefined
      }
    </OCFormContainer>
  </div>
);

ProductionAdditionalInfoForm.propTypes = {
  style: React.PropTypes.object,
  selected: React.PropTypes.object,
};

export default ProductionAdditionalInfoForm;
