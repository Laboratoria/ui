import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  contained: {
    backgroundColor: theme.palette.primary.main,
    fontSize: '1rem',
    fontWeight: 900,
    padding: '14px 21px',
    boxShadow: 'none',
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
    },
  },
});

const PrimaryButton = (props) => {
  const { children, classes, tag } = props;
  return (
    <Button
      variant="contained"
      component={tag}
      classes={{
        contained: classes.contained,
      }}
    >
      {children}
    </Button>
  );
};

PrimaryButton.propTypes = {
  children: PropTypes.string.isRequired,
  classes: PropTypes.shape().isRequired,
  tag: PropTypes.string.isRequired,
};

export default withStyles(styles)(PrimaryButton);
