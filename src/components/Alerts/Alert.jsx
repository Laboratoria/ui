import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.magenta.main,
    padding: 10,
    marginTop: 12,
    borderRadius: 0,
  },
  text: {
    color: '#fff',
    fontWeight: 300,
    fontSize: theme.typography.pxToRem(12),
  },
});

const Alert = ({ children, classes }) => (
  <Paper className={classes.root}>
    <Typography component="p" className={classes.text} align="center">
      { children }
    </Typography>
  </Paper>
);

Alert.propTypes = {
  classes: PropTypes.shape().isRequired,
  children: PropTypes.node.isRequired,
};

export default withStyles(styles)(Alert);
