import React from 'react';
import {
  Popover,
  PopoverAnimationVertical,
  Glyphicon,
  Button,
} from 'react-bootstrap';

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
      const { onSubmitEdit, onChange, ...restProps } = this.props;
      return (
        <div
          ref="editContainer"
        >
          <div
            style={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <NormalComponent
              {...restProps}
            />
            <Button
              onTouchTap={() => this.setState({ editMode: true })}
            >
              <Glyphicon glyph="edit" />
            </Button>
          </div>
          <Popover
            open={isEditMode}
            anchorEl={this.refs.editContainer}
            anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
            targetOrigin={{ horizontal: 'left', vertical: 'top' }}
            animation={PopoverAnimationVertical}
            style={{
              padding: '0',
              minWidth: '300px',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                position: 'relative',
                height: '36px',
                paddingTop: '1em',
              }}
            >
              <span
                style={{
                  flex: 1,
                }}
              >
                Edit Info
              </span>
              <Button
                label="Done"
                secondary
                onTouchTap={() => {
                  onSubmitEdit();
                  this.setState({ editMode: false });
                }}
              />
            </div>
            <EditComponent
              {...restProps}
              onChange={onChange}
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
