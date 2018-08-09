import React from 'react';
import PropTypes from 'prop-types';
import { withTheme, withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import classNames from 'classnames';

const styles = theme => ({
  colors: {
    height: 100,
    width: 140,
    'text-align': 'center',
  },
  'primary-light': {
    'background-color': theme.palette.primary.light,
  },
  'primary-main': {
    'background-color': theme.palette.primary.main,
  },
  'primary-dark': {
    'background-color': theme.palette.primary.dark,
  },
  'magenta-light': {
    'background-color': theme.palette.magenta.light,
  },
  'magenta-main': {
    'background-color': theme.palette.magenta.main,
  },
  'magenta-dark': {
    'background-color': theme.palette.magenta.dark,
  },
  'mint-light': {
    'background-color': theme.palette.mint.light,
  },
  'mint-main': {
    'background-color': theme.palette.mint.main,
  },
  'mint-dark': {
    'background-color': theme.palette.mint.dark,
  },
 });

const Colors = (props) => {
  const { theme, classes, color } = props;
  
   return (
    <Grid container justify="center" spacing="16">
      <Grid item>
        <Paper
          className={classNames(classes.colors, classes[`${color}-light`])}
        >
          {`${color}-light`}
          <br />
          {theme.palette[`${color}`].light}
        </Paper>
      </Grid>
       <Grid item>
        <Paper
          className={classNames(classes.colors, classes[`${color}-main`])}
        >
          {`${color}-main`}
          <br />
          {theme.palette[`${color}`].main}
        </Paper>
      </Grid>
       <Grid item>
        <Paper
          className={classNames(classes.colors, classes[`${color}-dark`])}
        >
          {`${color}-dark`}
          <br />
          {theme.palette[`${color}`].dark}
        </Paper>
      </Grid>
    </Grid>
  );
};

Colors.propTypes = {
  classes: PropTypes.shape().isRequired,
  color: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withTheme()(withStyles(styles)(Colors));