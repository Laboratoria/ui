import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Header from './components/partials/Header';

const styles = {
  root: {
    textAlign: 'center',
  },
};

const App = (props) => {
  const { classes } = props;
  return (
    <React.Fragment>
      <Grid container spacing={24} className={classes.root}>
        <Grid item xs={12}>
          <Header image="https://app.talento.laboratoria.la/img/logo.svg" />
          <Divider className={classes.dividers} />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

App.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default withStyles(styles)(App);
