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

export default MyForm;
