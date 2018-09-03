import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

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
    fontFamily: 'Open Sans, Arial, sans-serif',
    fontWeightMedium: 600,
    display6: {
      color: '#000',
      fontFamily: 'Bitter,serif',
      fontSize: '2.5rem',
      fontWeight: 400,
    },
    display5: {
      color: '#000',
      fontFamily: 'Bitter,serif',
      fontSize: '1.8rem',
      fontWeight: 400,
    },
    display4: {
      color: '#000',
      fontFamily: 'Bitter,serif',
      fontSize: '1.4rem',
      letterSpacing: 'normal',
      lineHeight: 'normal',
    },
    display3: {
      color: '#000',
      fontFamily: 'Bitter,serif',
      fontSize: '1.2rem',
      letterSpacing: 'normal',
      lineHeight: 'normal',
    },
    display2: {
      color: '#000',
      fontFamily: 'Bitter,serif',
      fontSize: '1rem',
      lineHeight: 'normal',
    },
    display1: {
      color: '#000',
      fontFamily: 'Bitter,serif',
      fontSize: '0.8rem',
      lineHeight: 'normal',
    },
    body2: {
      color: '#000',
      fontSize: '1rem',
      fontWeight: 600,
      lineHeight: '1.3em',
    },
    body1: {
      color: '#000',
      fontSize: '1rem',
      lineHeight: '1.3em',
    },
  },
});

export default theme;
