import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { addReadme } from 'storybook-readme';
import { MuiThemeProvider } from '@material-ui/core/styles';


import Theme from '../src/components/Theme';

addDecorator(storyFn => (
  <MuiThemeProvider theme={Theme}>
    <div style={{ background: '#EEEEEE', padding: 20 }}>
      {storyFn()}
    </div>
  </MuiThemeProvider>
));

addDecorator(addReadme);

function loadStories() {
  const req = require.context('../src/components', true, /\.stories\.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
