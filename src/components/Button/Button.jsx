import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    border: 0,
    borderRadius: theme.shape.borderRadius,
    display: 'inline-block',
    fontFamily: theme.typography.fontFamily,
    fontSize: '1rem',
    fontWeight: 800,
    padding: '14px 21px',
    textTransform: 'uppercase',
    outline: 'none',
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
      cursor: 'pointer',
    },
    '&:disabled': {
      backgroundColor: '#D8D8D8',
      color: '#5F6368',
      cursor: 'no-drop',
    },
  },
  secondary: {
    boxShadow: 'inset 0 0 0 3px #000',
    backgroundColor: '#FFF',
    '&:hover': {
      backgroundColor: '#FFF',
      opacity: .8,
    },
    '&:disabled': {
      backgroundColor: '#D8D8D8',
      boxShadow: 'none',
    },
  },
  small: {
    paddingTop: 5,
    paddingBottom: 5,
    fontSize: '0.875rem',
  },
  large: {
    paddingTop: 21,
    paddingBottom: 21,
    fontSize: '1.25rem',
  },
});

const Button = ({
  classes,
  children,
  size,
  type,
  ...props
}) => {
  const hasSizeProp = size ? classes[size] : '';
  const hasTypeProp = type ? classes[type] : '';

  return (
    <button
      type='button'
      className={`${classes.root} ${hasSizeProp} ${hasTypeProp}`}
      {...props}
    >
      { children }
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  classes: PropTypes.shape().isRequired,
  size: PropTypes.string,
  type: PropTypes.string
};

export default withStyles(styles)(Button);
