import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { ocEditableHOC } from '~/';
import LoadMuiTheme from '~/.storybook/load_mui_theme';

const normalComponent = () => (
  <div>
    Test Normal Component (Click me to open)
  </div>
);
const editComponent = ({ onCancelEditMode, onSubmitEdit }) => (
  <div>
    Test Edit Component
    <button onClick={onCancelEditMode.bind(this)} >Close</button>
    <button
      onClick={() => {
        onSubmitEdit();
        onCancelEditMode();
      }}
    >
      Submit
    </button>
  </div>
);
const EditableContainer = ocEditableHOC(normalComponent, editComponent);

storiesOf('ocEditableHOC', module)
  .addDecorator(story => (
    <LoadMuiTheme>
      <div
        style={{
          width: '50%',
          margin: 'auto',
          position: 'relative',
        }}
      >
        {story()}
      </div>
    </LoadMuiTheme>
  ))
  .add('default view', () => {
    const story = (
      <EditableContainer
        onSubmitEdit={action('Submit!')}
        onChange={action('Change!')}
      >
        Hello
      </EditableContainer>
    );
    return story;
  })
  .add('edit view', () => {
    const story = (
      <EditableContainer
        onSubmitEdit={action('Submit!')}
        onChange={action('Change!')}
        editMode
      >
        Hello
      </EditableContainer>
    );
    return story;
  });
