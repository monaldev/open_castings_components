import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { OpenCastingsTheme } from '~/';
import {
  Paper,
} from 'material-ui';

class LoadMUITheme extends React.Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(OpenCastingsTheme)}>
        <Paper
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
          }}
        >
          {this.props.children}
        </Paper>
      </MuiThemeProvider>
    );
  }
}
LoadMUITheme.propTypes = {
  children: React.PropTypes.any,
};
export default LoadMUITheme;
