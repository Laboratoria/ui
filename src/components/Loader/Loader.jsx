import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { CircularProgress } from '@material-ui/core';

const styles = () => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  secondary: {
    color: '#000000',
  },
});

const Loader = (props) => {
  const {
    classes,
    color,
    size,
  } = props;

  const standardSizes = {
    small: 30,
    medium: 40,
    large: 50,
  };

  return (
    <div className={classes.root}>
      <CircularProgress
        color={classes[color]}
        size={['small', 'medium', 'large'].includes(size) ? standardSizes[size] : size}
      />
    </div>
  );
};

Loader.propTypes = {
  classes: PropTypes.shape().isRequired,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  color: PropTypes.oneOf(['primary', 'secondary']),
};

Loader.defaultProps = {
  size: 'medium',
  color: 'primary',
};

export default withStyles(styles)(Loader);
