import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Colors from './components/Color';
import MainTitle from './components/MainTitle';
import Header from './components/Header';

const styles = theme => ({
  root : {
    textAlign: 'center'
  },
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

  dividers:  {
    marginTop: 20,
    marginBottom: 20
  }
});

const App = props => {
  const { classes } = props;
  return (
    <React.Fragment>
    <Header image="https://app.talento.laboratoria.la/img/logo.svg" />

    <Grid container spacing={24} className={classes.root}>
      <Grid item xs={12}>

        <Divider className={classes.dividers} />
        <Typography variant="display3" gutterBottom>
          Colors
        </Typography> 
        <Divider className={classes.dividers} />

        <Colors />

        <Divider className={classes.dividers} />
        <Typography variant="display3" gutterBottom>
          Titles
        </Typography> 
        <Divider className={classes.dividers} />

        <MainTitle>
          Main title
        </MainTitle>
 
      </Grid>
    </Grid>
    </React.Fragment>
  );
}

export default withStyles(styles)(App);
