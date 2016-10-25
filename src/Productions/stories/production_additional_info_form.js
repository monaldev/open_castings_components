import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { ProductionAdditionalInfoForm } from '~/';

storiesOf('ProductionAdditionalInfoForm', module)
  .addDecorator(story => (
    <div
      style={{
        width: '50%',
        margin: 'auto',
      }}
    >
      {story()}
    </div>
  ))
  .add(
    'nothing selected',
    () => {
      const story = (
        <ProductionAdditionalInfoForm
          selected={undefined}
          onChange={action('Changed!')}
        />
      );
      return story;
    }
  )
  .add(
    'config selected',
    () => {
      const story = (
        <ProductionAdditionalInfoForm
          selected={{
            expDate: new Date(),
            paymentType: 'PAID',
            paymentDetails: 'No Pay!',
            hasFee: true,
            feeDetails: 'no!',
          }}
          onChange={action('Changed!')}
        />
      );
      return story;
    }
  );
