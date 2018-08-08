import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Header from './components/partials/Header';
import Colors from './components/brand/Colors';

const styles = {
  'main-content': {
    textAlign: 'center',
  },
  header: {
    height: 60,
  },
};

const App = (props) => {
  const { classes } = props;
  return (
    <React.Fragment>
      <Header image="img/Laboratoria_logo.svg" className={classes.header} /> 
      <Grid container spacing={24} className={classes['main-content']}>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={12}>
              <Typography variant="display3" gutterBottom>
                  Laboratoria-ui Styleguide
              </Typography>
              <Divider className={classes.dividers} />
            </Grid>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="display2" gutterBottom>
                Brand Colors
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="display1" gutterBottom>
              Yellow
            </Typography>
            <Colors color="primary" />
            <Typography variant="display1" gutterBottom>
              Magenta
            </Typography>
            <Colors color="magenta" />
            <Typography variant="display1" gutterBottom>
              Mint
            </Typography>
            <Colors color="mint" />
            <Divider className={classes.dividers} />
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

App.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default withStyles(styles)(App);