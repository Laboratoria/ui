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
      color: "#000",
      fontFamily: 'Bitter,serif',
      fontSize: '2.5rem',
    },
    display3: {
      color: "#000",
      fontFamily: 'Bitter,serif',
      fontSize: '1.8rem',
    },
    display2: {
      color: "#000",
      fontFamily: 'Bitter,serif',
      fontSize: '1.4rem',
    },
    display1: {
      color: "#000",
      fontFamily: 'Bitter,serif',
      fontSize: '1.2rem',
    },
    headline: {
      fontFamily: 'Bitter,serif',
      fontSize: '1rem',
    },
    title: {
      fontFamily: 'Bitter,serif',
      fontSize: '0.8rem',
    },
    subheading: {
      fontFamily: 'Bitter,serif',
      fontSize: '1rem',
      fontWeight: '600',
    },
    body1: {
      fontSize: '1rem',
    },
    body2: {
      fontSize: '0.8rem',
    },
    button: {
      fontSize: '0.8rem',     
      fontWeight: 800,
    },
  },
});

export default theme;