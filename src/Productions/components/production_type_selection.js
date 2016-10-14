import React from 'react';
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
    <div className="page-header">
      <h3>What would you like to list</h3>
    </div>
    <select
      onChange={(e) => onChange({ ...selected, category: e.target.value })}
      label="Select a category"
      className="form-control"
      id="category"
      value={selected.category}
    >
      {
        Object.keys(productionTypes.categories).map(key => (
          <option
            key={key}
            value={key}
          >
            {productionTypes.categories[key]}
          </option>
        ))
      }
    </select>
    <br />
    <select
      onChange={(e) => onChange({ ...selected, sub: e.target.value })}
      label="Select a Subcategory"
      className="form-control"
      id="subcategory"
      value={selected.category}
    >
      <option
        key="0"
        value="0"
      >
        ---
      </option>
      {
        filterSubCategories(selected.category)
        .map(key => {
          return (
            <option
              key={key}
              value={key}
            >
              {productionTypes.subCategories[key].name}
            </option>
          );
        })
      }
    </select>
  </div>
);

ProductionTypeSelection.propTypes = {
  style: React.PropTypes.object,
  selected: React.PropTypes.object,
  onChange: React.PropTypes.func,
};

export default ProductionTypeSelection;
