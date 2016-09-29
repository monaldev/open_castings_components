import React from 'react';
import {
  Popover,
  PopoverAnimationVertical,
} from 'material-ui';

export default function (NormalComponent, EditComponent) {
  class OCEditableHOC extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        editMode: props.editMode || false,
        hovered: false,
      };
    }
    componentWillReceiveProps(nextProps) {
      if (nextProps.editMode) {
        this.setState({ editMode: nextProps.editMode });
      }
    }
    render() {
      const isEditMode = this.state.editMode;
      const { editMode, onSubmitEdit, onChange, ...restProps } = this.props;
      return (
        <div
          onClick={() => this.setState({ editMode: true })}
          onMouseEnter={() => this.setState({ hovered: true })}
          onMouseLeave={() => this.setState({ hovered: false })}
          ref="editContainer"
        >
          <div
            style={{
              backgroundColor: this.state.hovered ? 'lightgray' : 'transparent',
              cursor: 'pointer',
            }}
          >
            <NormalComponent
              {...restProps}
            />
          </div>
          <Popover
            open={isEditMode}
            anchorEl={this.refs.editContainer}
            anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
            targetOrigin={{ horizontal: 'left', vertical: 'top' }}
            animation={PopoverAnimationVertical}
            style={{
              padding: '1em',
            }}
          >
            <EditComponent
              {...restProps}
              onChange={onChange}
              onSubmitEdit={onSubmitEdit}
              onCancelEditMode={() => this.setState({ editMode: false })}
            />
          </Popover>
        </div>
      );
    }
  }
  OCEditableHOC.propTypes = {
    editMode: React.PropTypes.bool,
    onSubmitEdit: React.PropTypes.func,
    onChange: React.PropTypes.func,
  };
  return OCEditableHOC;
}
