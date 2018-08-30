import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    fontFamily: 'Open Sans',
    fontSize: '0.8rem',
    fontWeight: 300,
    textDecoration: 'inherit',
  },
  default: {
    color: 'inherit',
    '&:hover': {
      color: '#404040',
    },
  },
  primary: {
    color: theme.palette.primary.main,
    '&:hover': {
      color: theme.palette.primary.light,
    },
  },
  magenta: {
    color: theme.palette.magenta.main,
    '&:hover': {
      color: theme.palette.magenta.light,
    },
  },
  mint: {
    color: theme.palette.mint.main,
    '&:hover': {
      color: theme.palette.mint.light,
    },
  },
});

function Link(props) {
  const {
    children,
    classes,
    className,
    variant,
    ...other
  } = props;

  return (
    <a
      className={classNames(
        classes.root,
        {
          [classes.default]: variant === 'default',
        },
        {
          [classes.primary]: variant === 'primary',
        },
        {
          [classes.magenta]: variant === 'magenta',
        },
        {
          [classes.mint]: variant === 'mint',
        },
        className,
      )}
      {...other}
    >
      {children}
    </a>
  );
}

Link.defaultProps = {
  className: '',
  variant: 'default',
};

Link.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.shape().isRequired,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'primary', 'magenta', 'mint']),
};

export default withStyles(styles)(Link);
