import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import HeaderSimple from './how-to-use/Header/Simple';
import HeaderWithLinks from './how-to-use/Header/WithLinks';
import Colors from './components/brand/Colors';
import Texts from './components/brand/Texts';
import PrimaryButton from './components/Buttons';


const styles = {
  'main-content': {
    margin: '0 auto',
    maxWidth: 1200,
    width: '90%',
  },
};

const App = (props) => {
  const { classes } = props;

  return (
    <React.Fragment>

      <HeaderSimple />

      <Grid container className={classes['main-content']}>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={12}>
              <Typography variant="display4" gutterBottom align="center" component="h1">
                Laboratoria-ui Styleguide
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="display3" gutterBottom component="h2" >
              Brand Colors
            </Typography>
            <Typography gutterBottom>
              Variables disponibles para los colores.
            </Typography>
            <Typography variant="display2" gutterBottom component="h3" >
              Spot Colors
            </Typography>
            <Typography variant="display1" gutterBottom component="h4" >
              Variables
            </Typography>
            <Typography gutterBottom>
              A continuación una descripción de las variables y los colores que representan.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="title" gutterBottom>
              Yellow
            </Typography>
            <Colors color="primary" />
            <Typography variant="title" gutterBottom>
              Magenta
            </Typography>
            <Colors color="magenta" />
            <Typography variant="title" gutterBottom>
              Mint
            </Typography>
            <Colors color="mint" />
            <Divider className={classes.dividers} />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="display3" component="h2" gutterBottom>
              Typography
            </Typography>
            <Typography gutterBottom>
              A continuación una lista de los tipos de tipografía:
            </Typography>
            <Typography variant="display2" component="h3" gutterBottom>
              Font Types
            </Typography>
            <Typography gutterBottom>
              Hay 2 tipos de tipografías
            </Typography>
            <ul>
              <li>Bitter</li>
              <li>Open Sans</li>
            </ul>
            <Typography gutterBottom>
              h1, h2, h3, h4, h5, h6 por default siempre serán BITTER
            </Typography>
            <Texts />
            <Divider className={classes.dividers} />
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs={12}>
            <Typography variant="display3" component="h2" gutterBottom>
              Buttons
            </Typography>

            <PrimaryButton tag="a">
              Publica una posición
            </PrimaryButton>

            <Divider className={classes.dividers} />
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs={12}>
            <Typography variant="display1" component="h2" gutterBottom>
              Header
            </Typography>

            <HeaderWithLinks />

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
