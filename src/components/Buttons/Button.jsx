import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';

import capitalize from '../../utils/capitalize';

const styles = theme => ({
  contained: {
    border: 0,
    padding: '14px 25px',
    '&:hover': {
      '&$disabled': {
        backgroundColor: theme.palette.action.disabledBackground,
      },
    },
    '&$disabled': {
      backgroundColor: theme.palette.action.disabledBackground,
    },
  },
  containedSizeSmall: {
    padding: '8px 21px',
  },
  containedSizeLarge: {
    padding: '20px 31px',
  },
  disabled: {},
  fullWidth: {
    width: '100%',
  },
  outlined: {
    border: '3px solid #202020',
    padding: '11px 22px',
    '&:hover': {
      '&$disabled': {
        backgroundColor: theme.palette.action.disabledBackground,
      },
    },
    '&$disabled': {
      backgroundColor: theme.palette.action.disabledBackground,
      border: `3px solid ${theme.palette.action.disabledBackground}`,
    },
  },
  outlinedSizeSmall: {
    padding: '5px 18px',
  },
  outlinedSizeLarge: {
    padding: '17px 28px',
  },
  primary: {
    backgroundColor: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  },
  root: {
    borderRadius: 5,
    boxShadow: 'none',
    color: '#000',
    display: 'inline-flex',
    fontFamily: theme.typography.fontFamily,
    fontSize: '1rem',
    fontWeight: 800,
    minWidth: 64,
    textDecoration: 'none',
    textTransform: 'uppercase',
    '&:hover': {
      cursor: 'pointer',
    },
    '&$disabled': {
      color: theme.palette.action.disabled,
    },
  },
  secondary: {
    backgroundColor: theme.palette.common.white,
    '&:hover': {
      backgroundColor: '#f7f7f7',
      '&$disabled': {
        backgroundColor: 'transparent',
      },
    },
  },
  sizeSmall: {
    fontSize: '0.875rem',
  },
  sizeLarge: {
    fontSize: '1.25rem',
  },
});

const Button = (props) => {
  const {
    classes,
    className,
    color,
    component: ComponentProp,
    disabled,
    fullWidth,
    size,
    variant,
    ...other
  } = props;

  return (
    <ComponentProp
      className={clsx(
        classes.root,
        classes[variant],
        {
          [classes[color]]: color,
          [classes.disabled]: disabled,
          [classes.fullWidth]: fullWidth,
          [classes[`size${capitalize(size)}`]]: size !== 'medium',
          [classes[`${variant}Size${capitalize(size)}`]]: size !== 'medium',
        },
        className,
      )}
      disabled={disabled}
      {...other}
    />
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  color: PropTypes.oneOf(['primary', 'secondary']),
  component: PropTypes.elementType,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  variant: PropTypes.oneOf(['contained', 'outlined']),
};

Button.defaultProps = {
  color: 'primary',
  component: 'button',
  disabled: false,
  fullWidth: false,
  size: 'medium',
  variant: 'contained',
};

export default withStyles(styles)(Button);
