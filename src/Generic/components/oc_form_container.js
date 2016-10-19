import React from 'react';
import Formsy from 'formsy-react';
import {
  ParentContextMixin,
} from 'formsy-react-components';

const MyForm = React.createClass({
  propTypes: {
    children: React.PropTypes.node,
  },
  mixins: [ParentContextMixin],
  getModel() {
    return this.refs.formsy.getModel();
  },
  render() {
    return (
      <Formsy.Form
        className={this.getLayoutClassName()}
        ref="formsy"
        {...this.props}
      >
        {this.props.children}
      </Formsy.Form>
    );
  },
});

export default MyForm;
