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
    useNextVariants: true,
    fontFamily: 'Open Sans, Arial, sans-serif',
    fontWeightMedium: 600,
    h1: {
      color: '#000',
      fontFamily: 'Bitter,serif',
      fontSize: '2.5rem',
      fontWeight: 700,
      letterSpacing: 'normal',
      lineHeight: 'normal',
    },
    h2: {
      color: '#000',
      fontFamily: 'Bitter,serif',
      fontSize: '1.8rem',
      fontWeight: 700,
      letterSpacing: 'normal',
      lineHeight: 'normal',
    },
    h3: {
      color: '#000',
      fontFamily: 'Bitter,serif',
      fontSize: '1.4rem',
      fontWeight: 700,
      letterSpacing: 'normal',
      lineHeight: 'normal',
    },
    h4: {
      color: '#000',
      fontFamily: 'Bitter,serif',
      fontSize: '1.2rem',
      fontWeight: 700,
      letterSpacing: 'normal',
      lineHeight: 'normal',
    },
    h5: {
      color: '#000',
      fontFamily: 'Bitter,serif',
      fontSize: '1rem',
      fontWeight: 700,
      letterSpacing: 'normal',
      lineHeight: 'normal',
    },
    h6: {
      color: '#000',
      fontFamily: 'Bitter,serif',
      fontSize: '0.8rem',
      fontWeight: 700,
      letterSpacing: 'normal',
      lineHeight: 'normal',
    },
    body1: {
      color: '#000',
      fontSize: '0.8rem',
      fontWeight: 300,
      letterSpacing: 'normal',
      lineHeight: '1.35em',
    },
    body2: {
      color: '#000',
      fontSize: '1rem',
      fontWeight: 300,
      letterSpacing: 'normal',
      lineHeight: '1.35em',
    },
  },
  spacing: {
    container: 21,
  },
});

export default theme;
