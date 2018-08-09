import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#ffea4d',
      main: '#ffe521',
      dark: '#b2a017',
    },
    magenta: {
      light: '#ff33b1',
      main: '#ff009e',
      dark: '#b2006e',
    },
    mint: {
      light: '#77f9ae',
      main: '#56f89a',
      dark: '#3cad6b',
    },
  },
  typography: {
    fontFamily: [
      'Open Sans,sans-serif',
    ],
    display4: {
      fontFamily: 'Bitter,serif',
    },
    display3: {
      fontFamily: 'Bitter,serif',
    },
    display2: {
      fontFamily: 'Bitter,serif',
    },
    display1: {
      fontFamily: 'Bitter,serif',
    },
    headline: {
      fontFamily: 'Bitter,serif',
    },
    title: {
      fontFamily: 'Bitter,serif',
    },
    subheading: {
      fontFamily: 'Bitter,serif',
    },
    body2: {
      fontWeight: 600,
    },
    button: {     
      fontSize: '16px',
      fontWeight: 800,
    },
  },
});

export default theme;