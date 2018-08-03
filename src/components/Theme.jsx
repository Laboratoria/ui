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
      main: '#ffe521',
    },
  },
});

export default theme;
