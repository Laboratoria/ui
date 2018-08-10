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
    textAlign: 'center',
  },
  'primary-light': {
    backgroundColor: theme.palette.primary.light,
  },
  'primary-main': {
    'backgroundColor': theme.palette.primary.main,
  },
  'primary-dark': {
    'backgroundColor': theme.palette.primary.dark,
  },
  'magenta-light': {
    'backgroundColor': theme.palette.magenta.light,
  },
  'magenta-main': {
    'backgroundColor': theme.palette.magenta.main,
  },
  'magenta-dark': {
    'backgroundColor': theme.palette.magenta.dark,
  },
  'mint-light': {
    'backgroundColor': theme.palette.mint.light,
  },
  'mint-main': {
    'backgroundColor': theme.palette.mint.main,
  },
  'mint-dark': {
    'backgroundColor': theme.palette.mint.dark,
  },
 });

const Colors = (props) => {
  const { theme, classes, color } = props;
  
   return (
    <Grid container spacing="16">
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