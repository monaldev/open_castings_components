import {
  grey300,
  grey100,
  grey500,
  grey800,
  darkBlack,
  fullBlack,
} from 'material-ui/styles/colors';

import { fade } from 'material-ui/utils/colorManipulator';
import spacing from 'material-ui/styles/spacing';

export default {
  spacing,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: '#384047',
    primary2Color: '#ff3366',
    primary3Color: grey800,
    accent1Color: '#ff3366',
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: '#424242',
    alternateTextColor: '#fff',
    canvasColor: '#fff',
    borderColor: grey300,
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: '#ff3366',
    clockCircleColor: fade(darkBlack, 0.07),
    shadowColor: fullBlack,
  },
};
