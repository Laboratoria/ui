import React from 'react';
import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';
import { TypographyDisplay6 } from './components/Typography';
import HeaderSimple from './how-to-use/Header/Simple';
import HeaderWithLinks from './how-to-use/Header/WithLinks';
import Colors from './how-to-use/Brand/Colors';
import Font from './how-to-use/Brand/Font';
import Buttons from './how-to-use/Buttons';
import GraduatedCard from './how-to-use/Cards';

const styles = {
  container: {
    margin: '0 auto',
    maxWidth: 1200,
    width: '90%',
  },
};

const App = ({ classes }) => (
  <React.Fragment>
    <HeaderSimple />
    <div className={classes.container}>
      <TypographyDisplay6 gutterBottom align="center" component="h1">
        Laboratoria-ui Styleguide
      </TypographyDisplay6>
      <Colors />
      <Divider />
      <Font />
      <Divider />
      <Buttons />
      <Divider />
      <HeaderWithLinks />
      <Divider />
      <GraduatedCard />
    </div>
  </React.Fragment>
);

App.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default withStyles(styles)(App);
