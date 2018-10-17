import React from 'react';
import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import HeaderSimple from './how-to-use/Header/Simple';
import HeaderWithLinks from './how-to-use/Header/WithLinks';
import Colors from './how-to-use/Brand/Colors';
import Font from './how-to-use/Brand/Font';
import Buttons from './how-to-use/Buttons';
import GraduatedCard from './how-to-use/Cards';
import Links from './how-to-use/Links';

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
      <Typography variant="h1" align="center" gutterBottom>
        Laboratoria-ui Styleguide
      </Typography>
      <Colors />
      <Divider />
      <Font />
      <Divider />
      <Buttons />
      <Divider />
      <HeaderWithLinks />
      <Divider />
      <Links />
      <Divider />
      <GraduatedCard />
    </div>
  </React.Fragment>
);

App.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default withStyles(styles)(App);
