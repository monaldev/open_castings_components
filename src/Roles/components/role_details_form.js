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

class RoleDetailsForm extends React.Component {
  render() {
    const {
      style,
      selected,
      onChange,
      ...rest,
    } = this.props;
    const selectOptions = [
      { value: 'a', label: 'Option A' },
      { value: 'b', label: 'Option B' },
      { value: 'c', label: 'Option C' },
      { value: 'd', label: 'Option D' },
    ];
    return (
      <div
        style={{ ...style }}
      >
        <OCFormContainer
          layout="vertical"
          autocomplete="off"
          onChange={(model) => onChange(model)}
          {...rest}
        >
          <Input
            name="title"
            label="Role Title"
            type="text"
            validations="minLength:1"
            validationError="Please enter a longer title"
            value={selected ? selected.title : undefined}
            required
          />
          <Select
            name="type"
            label="Role type"
            validations={{
              validCategory: (values, value) =>
                (parseInt(value, 10) > 0 ? true : 'Please select a type'),
            }}
            options={[
              {
                value: 0,
                label: '---',
              },
              {
                value: 1,
                label: 'Lead',
              },
              {
                value: 2,
                label: 'Supporting',
              },
              {
                value: 3,
                label: 'Lead',
              },
              {
                value: 4,
                label: 'Lead',
              },
              {
                value: 5,
                label: 'Lead',
              },
              {
                value: 6,
                label: 'Lead',
              },
            ]}
            value={selected ? selected.type : undefined}
            required
          />
          <RadioGroup
            name="unionStatus"
            type="inline"
            label="Union Status"
            options={[
              {
                value: 0,
                label: 'Union and Nonunion',
              },
              {
                value: 1,
                label: 'Union',
              },
              {
                value: 2,
                label: 'Nonunion',
              },
            ]}
            value={selected ? selected.unionStatus : undefined}
            required
          />
          <RadioGroup
            name="gender"
            type="inline"
            label="Gender (optional)"
            options={[
              {
                value: 0,
                label: 'Any Gender',
              },
              {
                value: 1,
                label: 'Male',
              },
              {
                value: 2,
                label: 'Female',
              },
            ]}
            value={selected ? selected.gender : undefined}
          />
          <br />
          <ControlLabel>
            Age Range (optional):<strong>{` ${selected.ageMin}-${selected.ageMax}`}</strong>
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
                const model = this.props.selected;
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
                value={selected ? selected.ageMin : undefined}
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
                value={selected ? selected.ageMax : undefined}
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
              onChange={(sel) => {
                const newModel = selected;
                newModel.ethnicities = newModel.ethnicities || [];
                if (sel.selected) {
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
                selectOptions.map(option => ({
                  ...option,
                  selected: selected.ethnicities.indexOf(option.value) !== -1,
                }))
              }
              style={{
                width: '100%',
              }}
              includeSelectAllOption
              selectAllText="All Ethnicities"
              onSelectAll={() => {
                const newModel = selected;
                newModel.ethnicities = selectOptions.map(option => option.value);
                onChange(newModel);
              }}
              onDeselectAll={() => {
                const newModel = selected;
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
            label="Role Description"
            value={selected ? selected.description : undefined}
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
  selected: React.PropTypes.object,
  onChange: React.PropTypes.func,
};

export default RoleDetailsForm;
