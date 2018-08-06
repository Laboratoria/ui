import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import classNames from 'classnames';

const styles = theme => ({
  colors: {
    height: 140,
    width: 140,
    'text-align': 'center',
  },

  colorPrimery: {
    'background-color': theme.palette.primary.main,
  },
  colorSecondary: {
    'background-color': '#FF009E',
  },
  colorTertiary: {
    'background-color': '#56f89a',
  },

});

const Colors = (props) => {
  const { classes } = props;

  return (
    <Grid container justify="center" spacing="16">
      <Grid item>
        <Paper
          className={classNames(classes.colors, classes.colorPrimery)}
        >
          {classes.colorPrimery.backgroundColor}
        </Paper>
      </Grid>

      <Grid item>
        <Paper
          className={classNames(classes.colors, classes.colorSecondary)}
        >
          {classes.colorPrimery.backgroundColor}
        </Paper>
      </Grid>

      <Grid item>
        <Paper
          className={classNames(classes.colors, classes.colorTertiary)}
        >
          {classes.colorPrimery.backgroundColor}
        </Paper>
      </Grid>
    </Grid>
  );
};

Colors.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default withStyles(styles)(Colors);
