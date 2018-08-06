import React from 'react';
import ReactDOM from 'react-dom';
// Inject a theme into your application
import { MuiThemeProvider } from '@material-ui/core/styles';
// Our theme
import Theme from './components/Theme';
import App from './App';

ReactDOM.render(
  <MuiThemeProvider theme={Theme}>
    <App />
  </MuiThemeProvider>,

  document.getElementById('root'),
);
