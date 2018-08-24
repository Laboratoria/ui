import React from 'react';
import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';
import PrimaryButton from './components/Buttons';
import CustomTypography from './components/partials/CustomTypography';
import Header from './components/partials/Header';
import Colors from './components/brand/Colors';
import Font from './components/brand/Font';

const styles = theme => ({
  container: {
    margin: '0 auto',
    maxWidth: 1200,
    width: '90%',
  },
  header: {
    height: 60,
  },
});

const App = ({ classes }) => (
  <React.Fragment>
    <Header image="img/Laboratoria_logo.svg" className={classes.header} />
    <div className={classes.container}>
      <CustomTypography variant="display6" gutterBottom align="center" component="h1">
        Laboratoria-ui Styleguide
      </CustomTypography>
      <Colors />
      <Divider />
      <Font />
      <Divider />
      <section>
        <CustomTypography variant="display5" component="h2" gutterBottom>
          Buttons
        </CustomTypography>
        <PrimaryButton tag="a">
          Publica una posición
        </PrimaryButton>
      </section>
    </div>
  </React.Fragment>
);

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
