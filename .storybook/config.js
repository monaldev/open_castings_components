// IMPORTANT
// ---------
// This is an auto generated file with React CDK.
// Do not modify this file.

import { configure } from '@kadira/storybook';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();
function loadStories() {
  require('../src/index.storybook');
}

configure(loadStories, module);
