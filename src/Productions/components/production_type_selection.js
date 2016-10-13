import React from 'react';
import {
  SelectField,
  CardHeader,
  MenuItem,
} from 'material-ui';
import productionTypes from './production_types.json';

const filterSubCategories = (selectedCategory) => {
  const subCategories = Object.keys(productionTypes.subCategories);
  const filtered = subCategories.filter(
    (subId) =>
      productionTypes.subCategories[subId].parentId === selectedCategory
  );
  return filtered;
};

const ProductionTypeSelection = ({
  style = {},
  selected = {
    category: '0',
    sub: '0',
  },
  onChange,
}) => (
  <div
    style={{ ...style }}
  >
    <CardHeader
      title="What would you like to list?"
    />
    <SelectField
      value={selected.category}
      autoWidth
      onChange={(e, key) => onChange({ ...selected, category: key })}
    >
      {
        Object.keys(productionTypes.categories).map(key => (
          <MenuItem
            key={key}
            value={key}
            primaryText={productionTypes.categories[key]}
          />
        ))
      }
    </SelectField>
    <br />
    <SelectField
      value={selected.sub}
      disabled={selected.category === '0'}
      autoWidth
      onChange={(e, key) => onChange({ ...selected, sub: key })}
    >
      {
        filterSubCategories(selected.category)
        .map(key => {
          return (<MenuItem
            key={key}
            value={key}
            primaryText={productionTypes.subCategories[key].name}
          />);
        })
      }
    </SelectField>
  </div>
);

ProductionTypeSelection.propTypes = {
  style: React.PropTypes.object,
  selected: React.PropTypes.object,
  onChange: React.PropTypes.func,
};

export default ProductionTypeSelection;
