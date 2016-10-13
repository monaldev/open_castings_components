import React from 'react';
import Formsy from 'formsy-react';
import {
  Input,
  Textarea,
  ParentContextMixin,
} from 'formsy-react-components';
import {
  Row,
  Col,
} from 'react-bootstrap';
import { OCFormsyCitySearch } from '../../';

const MyForm = React.createClass({
  propTypes: {
    children: React.PropTypes.node,
  },
  mixins: [ParentContextMixin],
  render() {
    return (
      <Formsy.Form
        className={this.getLayoutClassName()}
        {...this.props}
        ref="formsy"
      >
        {this.props.children}
      </Formsy.Form>
    );
  },
});

const ProductionDetailsForm = ({
  style,
  ...rest,
}) => (
  <div
    style={{ ...style }}
  >
    <div className="page-header">
      <h3>Production Details</h3>
    </div>
    <MyForm
      layout="vertical"
      autocomplete="off"
      {...rest}
    >
      <Input
        name="title"
        label="Title of Production"
        type="text"
        validations="minLength:1"
        validationError="Please enter a longer title"
        required
      />
      <Input
        name="company"
        label="Production Company"
        type="text"
      />
      <Textarea
        rows={3}
        name="description"
        label="Production Description"
      />
      <label>Production Location</label>
      <OCFormsyCitySearch
        name="city"
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
          />
        </Col>
        <Col md={6} sm={12} >
          <Input
            name="end"
            label="End Date"
            type="date"
          />
        </Col>
      </Row>
    </MyForm>
  </div>
);

ProductionDetailsForm.propTypes = {
  style: React.PropTypes.object,
};

export default ProductionDetailsForm;
