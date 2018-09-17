import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    border: 0,
    borderRadius: theme.shape.borderRadius,
    boxShadow: 'none',
    display: 'inline-block',
    fontFamily: theme.typography.fontFamily,
    fontSize: '0.8rem',
    fontWeight: 800,
    padding: '14px 21px',
    textTransform: 'uppercase',
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
      cursor: 'pointer',
    },
  },
});

const PrimaryButton = (props) => {
  const { classes, tag } = props;
  const TagName = tag;

  return (
    <TagName className={classes.root} {...props} />
  );
};

PrimaryButton.propTypes = {
  children: PropTypes.string.isRequired,
  classes: PropTypes.shape().isRequired,
};

export default withStyles(styles)(PrimaryButton);
