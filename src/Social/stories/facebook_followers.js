import React from 'react';
import { storiesOf } from '@kadira/storybook';

import { FacebookFollowers } from '~/';

storiesOf('Social', module)
  .add('FacebookFollowers', () => {
    const story = <FacebookFollowers profileId="envato" >Hello</FacebookFollowers>;
    return story;
  });
