import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  overrides: {
    MuiExpansionPanelSummary: {
      content: {
        margin: '24px 0',
        '&$expanded': {
          margin: '24px 0',
        },
      },
    },
    MuiFormHelperText: {
      root: {
        fontWeight: 300,
      },
    },
    MuiFormLabel: {
      root: {
        fontWeight: 400,
        '&$error': {
          color: '#000',
        },
      },
    },
    MuiPaper: {
      root: {
        background: '#FAFAFA',
        boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.24), 0px 0px 2px rgba(0, 0, 0, 0.12)',
      },
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
  typography: {
    fontFamily: 'Open Sans, Arial, sans-serif',
    fontWeightMedium: 600,
    h1: {
      color: '#000',
      fontFamily: 'Bitter,serif',
      fontSize: '3.125rem',
      fontWeight: 700,
      letterSpacing: 'normal',
      lineHeight: 'normal',
    },
    h2: {
      color: '#000',
      fontFamily: 'Bitter,serif',
      fontSize: '2.25rem',
      fontWeight: 700,
      letterSpacing: 'normal',
      lineHeight: 'normal',
    },
    h3: {
      color: '#000',
      fontFamily: 'Bitter,serif',
      fontSize: '1.75rem',
      fontWeight: 700,
      letterSpacing: 'normal',
      lineHeight: 'normal',
    },
    h4: {
      color: '#000',
      fontFamily: 'Bitter,serif',
      fontSize: '1.5rem',
      fontWeight: 700,
      letterSpacing: 'normal',
      lineHeight: 'normal',
    },
    h5: {
      color: '#000',
      fontFamily: 'Bitter,serif',
      fontSize: '1.25rem',
      fontWeight: 700,
      letterSpacing: 'normal',
      lineHeight: 'normal',
    },
    h6: {
      color: '#000',
      fontFamily: 'Bitter,serif',
      fontSize: '1rem',
      fontWeight: 700,
      letterSpacing: 'normal',
      lineHeight: 'normal',
    },
    body1: {
      color: '#000',
      fontSize: '1rem',
      fontWeight: 300,
      letterSpacing: 'normal',
      lineHeight: '1.35em',
    },
    body2: {
      color: '#000',
      fontSize: '1.25rem',
      fontWeight: 300,
      letterSpacing: 'normal',
      lineHeight: '1.35em',
      wordWrap: 'break-word',
      '& a': {
        fontSize: '1.25rem',
      },
    },
  },
});

export default theme;
