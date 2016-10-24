import React from 'react';
import productionTypes from './production_types.json';
import {
  Select,
} from 'formsy-react-components';
import { OCFormContainer } from '../../';

const filterSubCategories = (selectedCategory) => {
  const subCategories = Object.keys(productionTypes.subCategories);
  const filtered = subCategories.filter(
    (subId) =>
      productionTypes.subCategories[subId].parentId === selectedCategory
  );
  if (selectedCategory !== '0') {
    filtered.push('0');
  }
  return filtered.sort();
};

const categories = Object.keys(productionTypes.categories).map(key => ({
  value: key,
  label: productionTypes.categories[key],
}));

class ProductionTypeSelection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props.selected,
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.selected) {
      this.setState({
        ...nextProps.selected,
      });
    }
  }
  render() {
    const {
      style = {},
      onChange,
      ...rest,
    } = this.props;
    return (
      <div
        style={{ ...style }}
      >
        <div className="page-header">
          <h3>What would you like to list</h3>
        </div>
        <OCFormContainer
          layout="vertical"
          autoComplete={false}
          onChange={
            (model) =>
              this.setState({ category: model.category }, onChange.bind(this, model))
          }
          {...rest}
        >
          <Select
            name="category"
            label="Category"
            validations={{
              validCategory: (values, value) =>
                (parseInt(value, 10) > 0 ? true : 'Please select a category'),
            }}
            options={categories}
            value={this.state.category ? this.state.category : undefined}
            required
          />
          <Select
            name="sub"
            label="Sub Category"
            validations={{
              validCategory: (values, value) =>
                (parseInt(value, 10) > 0 ? true : 'Please select a sub-category'),
            }}
            options={
              filterSubCategories(this.state.category).map(key => {
                return ({
                  value: key,
                  label: productionTypes.subCategories[key].name,
                });
              })
            }
            value={this.state.sub ? this.state.sub : undefined}
            required
          />
        </OCFormContainer>
      </div>
    );
  }
}

ProductionTypeSelection.propTypes = {
  style: React.PropTypes.object,
  selected: React.PropTypes.object,
  onChange: React.PropTypes.func,
};

export default ProductionTypeSelection;
