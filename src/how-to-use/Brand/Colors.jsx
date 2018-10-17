import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withTheme, withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  paper: {
    height: 100,
    textAlign: 'center',
  },
  'primary-light': {
    backgroundColor: theme.palette.primary.light,
  },
  'primary-main': {
    backgroundColor: theme.palette.primary.main,
  },
  'primary-dark': {
    backgroundColor: theme.palette.primary.dark,
  },
  'magenta-light': {
    backgroundColor: theme.palette.magenta.light,
  },
  'magenta-main': {
    backgroundColor: theme.palette.magenta.main,
  },
  'magenta-dark': {
    backgroundColor: theme.palette.magenta.dark,
  },
  'mint-light': {
    backgroundColor: theme.palette.mint.light,
  },
  'mint-main': {
    backgroundColor: theme.palette.mint.main,
  },
  'mint-dark': {
    backgroundColor: theme.palette.mint.dark,
  },
});

const ColorPalette = ({ classes, color, theme }) => (
  <Grid container spacing={16}>
    <Grid item xs={12} md={2}>
      <Paper
        classes={{
          root: classNames(classes.paper, classes[`${color}-light`]),
        }}
      >
        {`${color}-light`}
        <br />
        {theme.palette[`${color}`].light}
      </Paper>
    </Grid>
    <Grid item xs={12} md={2}>
      <Paper
        classes={{
          root: classNames(classes.paper, classes[`${color}-main`]),
        }}
      >
        {`${color}-main`}
        <br />
        {theme.palette[`${color}`].main}
      </Paper>
    </Grid>
    <Grid item xs={12} md={2}>
      <Paper
        classes={{
          root: classNames(classes.paper, classes[`${color}-dark`]),
        }}
      >
        {`${color}-dark`}
        <br />
        {theme.palette[`${color}`].dark}
      </Paper>
    </Grid>
  </Grid>
);

ColorPalette.propTypes = {
  classes: PropTypes.shape().isRequired,
  color: PropTypes.string.isRequired,
  theme: PropTypes.shape().isRequired,
};

const Colors = ({ theme, classes }) => (
  <section id="colors">
    <Typography variant="h2" gutterBottom>
      Brand Colors
    </Typography>
    <Typography variant="h3" gutterBottom>
      Yellow
    </Typography>
    <ColorPalette classes={classes} color="primary" theme={theme} />
    <Typography variant="h3" gutterBottom>
      Mint
    </Typography>
    <ColorPalette classes={classes} color="mint" theme={theme} />
    <Typography variant="h3" gutterBottom>
      Magenta
    </Typography>
    <ColorPalette classes={classes} color="magenta" theme={theme} />
  </section>
);

Colors.propTypes = {
  classes: PropTypes.shape().isRequired,
  theme: PropTypes.shape().isRequired,
};

export default withTheme()(withStyles(styles)(Colors));
