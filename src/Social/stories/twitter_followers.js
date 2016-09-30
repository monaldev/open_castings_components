import React from 'react';
import { storiesOf } from '@kadira/storybook';

import { TwitterFollowers } from '~/';

storiesOf('Social', module)
  .add('TwitterFollowers', () => {
    const story = <TwitterFollowers profileId="jvargas_01" >Hello</TwitterFollowers>;
    return story;
  });
