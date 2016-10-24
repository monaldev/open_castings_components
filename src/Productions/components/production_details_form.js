import React from 'react';
import {
  Input,
  Textarea,
} from 'formsy-react-components';
import {
  Row,
  Col,
} from 'react-bootstrap';
import { OCFormsyCitySearch, OCFormContainer } from '../../';

const ProductionDetailsForm = ({
  style,
  selected,
  ...rest,
}) => (
  <div
    style={{ ...style }}
  >
    <div className="page-header">
      <h3>Production Details</h3>
    </div>
    <OCFormContainer
      layout="vertical"
      autoComplete={false}
      {...rest}
    >
      <Input
        name="title"
        label="Title of Production"
        type="text"
        validations="minLength:1"
        validationError="Please enter a longer title"
        value={selected ? selected.title : undefined}
        required
      />
      <Input
        name="company"
        label="Production Company"
        value={selected ? selected.company : undefined}
        type="text"
      />
      <Textarea
        rows={3}
        name="description"
        label="Production Description"
        value={selected ? selected.description : undefined}
      />
      <label>Production Location</label>
      <OCFormsyCitySearch
        name="city"
        value={selected ? selected.city : undefined}
        isRequired
      />
      <legend>Production Date(s)</legend>
      <Row
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
        }}
      >
        <Col md={6} sm={12} >
          <Input
            name="start"
            label="Start Date"
            type="date"
            value={selected ? selected.start : undefined}
          />
        </Col>
        <Col md={6} sm={12} >
          <Input
            name="end"
            label="End Date"
            type="date"
            value={selected ? selected.end : undefined}
          />
        </Col>
      </Row>
    </OCFormContainer>
  </div>
);

ProductionDetailsForm.propTypes = {
  style: React.PropTypes.object,
  selected: React.PropTypes.object,
};

export default ProductionDetailsForm;
