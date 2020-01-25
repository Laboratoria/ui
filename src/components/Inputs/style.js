export default {
  root: {
    borderRadius: 2,
    boxSizing: 'border-box',
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
    background: '#f7f7f7',
    color: '#000',
    fontSize: 20,
    padding: 16,
  },
};
