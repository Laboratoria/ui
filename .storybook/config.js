import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { MuiThemeProvider } from '@material-ui/core/styles';

import Theme from '../src/components/Theme';

addDecorator(storyFn => (
  <MuiThemeProvider theme={Theme}>
    {storyFn()}
  </MuiThemeProvider>
));

function loadStories() {
  const req = require.context('../src/components', true, /\.stories\.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);