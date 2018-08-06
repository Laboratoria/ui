import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const style = {
  title: {
    marginTop: 10,
    color: 'blur',
    fontSize: 24,
  },
};

const MainTitle = (props) => {
  const { classes, children } = props;
  return (
    <Typography className={classes.title} variant="headline" gutterBottom>
      {children}
    </Typography>
  );
};

MainTitle.propTypes = {
  classes: PropTypes.shape().isRequired,
  children: PropTypes.string.isRequired,
};


export default withStyles(style)(MainTitle);
