// IMPORTANT
// ---------
// This is an auto generated file with React CDK.
// Do not modify this file.

import { configure, setAddon } from '@kadira/storybook';
import infoAddon from '@kadira/react-storybook-addon-info';
import injectTapEventPlugin from 'react-tap-event-plugin';

setAddon(infoAddon);
injectTapEventPlugin();

function loadStories() {
  require('../src/index.storybook');
}

configure(loadStories, module);
