import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Header from '../../components/partials/Header';

const styles = {
  root: {
    flexGrow: 1,
    padding: '2% 0',
    backgroundColor: '#fff',
    textAlign: 'center',
  },
  header: {
    maxWidth: '1220px',
  },
  linkRight: {
    textAlign: 'right',
  },
};

const HeaderSimple = (props) => {
  const { classes } = props;

  return (
    <Header
      image="img/Laboratoria_logo.svg"
      classes={classes}
    />
  );
};

HeaderSimple.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default withStyles(styles)(HeaderSimple);
