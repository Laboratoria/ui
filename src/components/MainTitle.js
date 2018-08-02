import React from 'react';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const style = {
  title: {
    marginTop: 10,
    color: 'blur',
    fontSize: 24
  }
}

const MainTitle  = (props) => {
  const { classes } = props;
  return (
    <Typography className={classes.title} variant="headline" gutterBottom>
      {props.children}
    </Typography>
  )
};

export default withStyles(style)(MainTitle);