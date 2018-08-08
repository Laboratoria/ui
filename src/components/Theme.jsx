import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Open Sans,sans-serif',
    ],
    title: {
      fontFamily: 'Bitter,serif',
      fontWeight: '700',
      lineHeight: '100%',
    },
    subheading: {
      fontFamily: 'Bitter,serif',
      fontWeight: '700',
      lineHeight: '100%',
    },
    button: {
      fontSize: '16px',
      textTransform: 'uppercase',
      fontWeight: 900,
      fontFamily: 'Open Sans,sans-serif',
      color: 'rgba(0, 0, 0, 0.87)',
    },
  },
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
});

export default theme;