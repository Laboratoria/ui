import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';

import Theme from '../src/components/Theme.jsx';

export const decorators = [(Story) => (
  <ThemeProvider theme={Theme}>
    <div style={{ background: '#EEEEEE', padding: 21 }}><Story/></div>
  </ThemeProvider>
)];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}