import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Header from '../../components/partials/Header';

const styles = {
  root: {
    backgroundColor: '#fff',
    flexGrow: 1,
    padding: '1rem 0',
  },
  header: {
    maxWidth: '1220px',
  },
  image: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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
