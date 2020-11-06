import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
  root: {
    borderRadius: 5,
    boxShadow: 'none',
    color: '#000',
    fontFamily: theme.typography.fontFamily,
    fontSize: '1rem',
    fontWeight: 800,
    lineHeight: 'normal',
    '&:hover': {
      boxShadow: 'none',
    },
  },
  contained: {
    padding: '14px 25px',
  },
  containedPrimary: {
    backgroundColor: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  },
  containedSecondary: {
    backgroundColor: theme.palette.common.white,
    '&:hover': {
      backgroundColor: '#f7f7f7',
    },
  },
  containedSizeSmall: {
    padding: '8px 21px',
  },
  containedSizeLarge: {
    padding: '20px 31px',
  },
  outlined: {
    border: '3px solid #202020',
    padding: '11px 22px',
    '&:hover': {
      border: '3px solid #202020',
    },
  },
  outlinedPrimary: {
    background: theme.palette.primary.main,
    '&:hover': {
      background: theme.palette.primary.dark,
    },
  },
  outlinedSecondary: {
    backgroundColor: theme.palette.common.white,
    '&:hover': {
      backgroundColor: '#f7f7f7',
    },
  },
  outlinedDisabled: {
    backgroundColor: theme.palette.action.disabledBackground,
    border: `3px solid ${theme.palette.action.disabledBackground} !important`,
  },
  outlinedSizeSmall: {
    padding: '5px 18px',
  },
  outlinedSizeLarge: {
    padding: '17px 28px',
  },
  sizeSmall: {
    fontSize: '0.875rem',
  },
  sizeLarge: {
    fontSize: '1.25rem',
  },
});

const LabButton = React.forwardRef(({
  classes: { outlinedDisabled, ...classes },
  disabled,
  variant,
  ...other
}, ref) => (
  <Button
    className={clsx({ [outlinedDisabled]: variant === 'outlined' && disabled })}
    classes={{ ...classes }}
    disabled={disabled}
    ref={ref}
    variant={variant}
    {...other}
  />
));

LabButton.propTypes = {
  color: PropTypes.string,
  classes: PropTypes.shape().isRequired,
  disabled: PropTypes.bool,
  variant: PropTypes.oneOf(['contained', 'outlined', 'text']),
};

LabButton.defaultProps = {
  color: 'primary',
  disabled: false,
  variant: 'contained',
};

// NOTE: In a next refactoring the class name could be LabButton
export default withStyles(styles, { name: 'Button' })(LabButton);
