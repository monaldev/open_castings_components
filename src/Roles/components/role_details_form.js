import React from 'react';
import {
  Input,
  Textarea,
  Select,
  RadioGroup,
  Checkbox,
} from 'formsy-react-components';
import {
  Row,
  Col,
  ControlLabel,
} from 'react-bootstrap';
import {
  OCFormContainer,
  OCDualSlider,
  BootstrapMultiselect,
} from '../../';
import roleTypes from './role_types.json';

class RoleDetailsForm extends React.Component {
  render() {
    const {
      style,
      onChange,
      selected,
      ...rest,
    } = this.props;
    return (
      <div
        style={{ ...style }}
      >
        <OCFormContainer
          layout="vertical"
          autoComplete={false}
          onChange={(model) => onChange(model)}
          {...rest}
        >
          <Input
            name="title"
            label="Role Title"
            type="text"
            validations="minLength:1"
            validationError="Please enter a longer title"
            value={selected.title}
            required
          />
          <Select
            name="type"
            label="Role type"
            validations={{
              validCategory: (values, value) =>
                (parseInt(value, 10) > 0 ? true : 'Please select a role type'),
            }}
            options={[
              {
                value: '0',
                label: 'Select role type',
              },
              {
                value: '1',
                label: 'Lead',
              },
              {
                value: '2',
                label: 'Supporting',
              },
              {
                value: '3',
                label: 'Lead',
              },
              {
                value: '4',
                label: 'Lead',
              },
              {
                value: '5',
                label: 'Lead',
              },
              {
                value: '6',
                label: 'Lead',
              },
            ]}
            value={selected.type}
            required
          />
          <RadioGroup
            name="unionStatus"
            type="inline"
            label="Union Status (optional)"
            options={[
              ...Object.keys(roleTypes.unionStatus).map(option => ({
                value: option,
                label: roleTypes.unionStatus[option],
              })),
            ]}
            value={selected.unionStatus}
          />
          <RadioGroup
            name="gender"
            type="inline"
            label="Gender (optional)"
            options={[
              ...Object.keys(roleTypes.gender).map(option => ({
                value: option,
                label: roleTypes.gender[option],
              })),
            ]}
            value={selected.gender}
          />
          <br />
          <ControlLabel>
            Age Range (optional):
            <strong>
              {` ${selected.ageMin}-${selected.ageMax}`}
            </strong>
          </ControlLabel>
          <div
            style={{
              marginTop: '5px',
            }}
          >
            <OCDualSlider
              min={0}
              max={100}
              step={1}
              value={[selected.ageMin, selected.ageMax]}
              onChange={(values) => {
                const model = selected;
                model.ageMin = values[0];
                model.ageMax = values[1];
                onChange(model);
              }}
            />
          </div>
          <Row>
            <Col
              sm={6}
            >
              <Input
                name="ageMin"
                type="text"
                validations="minLength:1"
                validationError="Please enter a correct age"
                defaultValue={0}
                value={selected.ageMin}
                validations={{
                  validAgeMin: (values, value) =>
                    (
                      parseInt(value, 10) < parseInt(selected.ageMax, 10)
                      ? true
                      : `Age must be less than ${selected.ageMax}`
                    ),
                }}
              />
            </Col>
            <Col
              sm={6}
            >
              <Input
                name="ageMax"
                type="text"
                validations="minLength:1"
                validationError="Please enter a correct age"
                defaultValue={100}
                value={selected.ageMax}
                validations={{
                  validAgeMax: (values, value) =>
                    (
                      parseInt(value, 10) > parseInt(selected.ageMin, 10)
                      ? true
                      : `Age must be more than ${selected.ageMin}`
                    ),
                }}
              />
            </Col>
          </Row>
          <ControlLabel>
            Ethnicity (optional)
          </ControlLabel>
          <div>
            <BootstrapMultiselect
              onChange={(options, checked) => {
                const newModel = { ...selected };
                const sel = options[0];
                if (checked) {
                  newModel.ethnicities.push(sel.value);
                } else {
                  const i = newModel.ethnicities.indexOf(sel.value);
                  if (i !== -1) {
                    newModel.ethnicities.splice(i, 1);
                  }
                }
                onChange(newModel);
              }}
              data={
                Object.keys(roleTypes.ethnicities).map(ethnicity => {
                  return ({
                    value: ethnicity,
                    label: roleTypes.ethnicities[ethnicity],
                    selected: (
                      selected.ethnicities
                      ? selected.ethnicities.indexOf(ethnicity) !== -1
                      : false
                    ),
                  });
                })
              }
              style={{
                width: '100%',
              }}
              includeSelectAllOption
              selectAllText="All Ethnicities"
              allSelectedText="All Ethnicities"
              onSelectAll={() => {
                const newModel = { ...selected };
                newModel.ethnicities = Object.keys(roleTypes.ethnicities);
                onChange(newModel);
              }}
              onDeselectAll={() => {
                const newModel = { ...selected };
                newModel.ethnicities = [];
                onChange(newModel);
              }}
              numberDisplayed={1}
              enableClickableOptGroups
              multiple
            />
          </div>
          <br />
          <Textarea
            rows={3}
            name="description"
            label="Role Description (optional)"
            value={selected.description}
          />
          <Checkbox
            name="requiresNudity"
            value={selected.requiresNudity}
            label="This role requires nudity"
          />
        </OCFormContainer>
      </div>
    );
  }
}

RoleDetailsForm.propTypes = {
  style: React.PropTypes.object,
  selected: React.PropTypes.object.isRequired,
  onCancel: React.PropTypes.func,
  onChange: React.PropTypes.func,
};

export default RoleDetailsForm;
