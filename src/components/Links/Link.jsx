import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  root: {
    fontFamily: 'Open Sans',
    fontSize: '1rem',
    textDecoration: 'inherit',
  },
  default: {
    borderBottom: 'solid 1px #000',
    color: 'inherit',
    '&:hover': {
      color: '#404040',
    },
  },
  primary: {
    borderBottom: `solid 1px ${theme.palette.primary.main}`,
    color: theme.palette.primary.main,
    '&:hover': {
      color: theme.palette.primary.light,
    },
  },
  magenta: {
    borderBottom: `solid 1px ${theme.palette.magenta.main}`,
    color: theme.palette.magenta.main,
    '&:hover': {
      color: theme.palette.magenta.light,
    },
  },
  mint: {
    borderBottom: `solid 1px ${theme.palette.mint.main}`,
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
