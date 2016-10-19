import React from 'react';
import { storiesOf } from '@kadira/storybook';

import { OCStepper } from '~/';

storiesOf('OCStepper', module)
  .addDecorator(story => (
    <div
      style={{
        width: '100%',
        margin: 'auto',
        position: 'relative',
      }}
    >
      {story()}
    </div>
  ))
  .add('first step', () => {
    const story = (
      <OCStepper
        steps={[
          {
            name: '',
            component: <div>Hello</div>,
            isValid: true,
          },
          {
            name: '',
            component: <div>Hello2</div>,
            isValid: true,
          },
          {
            name: '',
            component: <div>Hello3</div>,
            isValid: true,
          },
        ]}
        currentStep={0}
      />
    );

    return story;
  })
  .add('last step', () => {
    const story = (
      <OCStepper
        steps={[
          {
            name: '',
            component: <div>Hello</div>,
            isValid: true,
          },
          {
            name: '',
            component: <div>Hello2</div>,
            isValid: true,
          },
          {
            name: '',
            component: <div>Hello3</div>,
            isValid: true,
          },
        ]}
        currentStep={2}
      />
    );

    return story;
  })
  .add('invalid step', () => {
    const story = (
      <OCStepper
        steps={[
          {
            name: '',
            component: <div>Hello</div>,
            isValid: true,
          },
          {
            name: '',
            component: <div>Hello2</div>,
            isValid: false,
          },
          {
            name: '',
            component: <div>Hello3</div>,
            isValid: false,
          },
        ]}
        currentStep={1}
      />
    );

    return story;
  });
