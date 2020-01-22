export default {
  root: {
    boxSizing: 'border-box',
    borderRadius: 2,
    display: 'flex',
    marginBottom: 20,
  },
  label: {
    color: '#000',
    '& + [class*="MuiInput-formControl"]': {
      marginTop: 20,
    },
  },
  input: {
    background: 'white',
    marginTop: 20,
    padding: 17,
    color: '#979797',
    fontSize: 20,
  },
};
