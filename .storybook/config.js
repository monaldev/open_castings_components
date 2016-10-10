import { configure, setAddon } from '@kadira/storybook';
import infoAddon from '@kadira/react-storybook-addon-info';
//import injectTapEventPlugin from 'react-tap-event-plugin';

setAddon(infoAddon);
//injectTapEventPlugin();

function loadStories() {
  require('../src/index.storybook.js');
}

configure(loadStories, module);
