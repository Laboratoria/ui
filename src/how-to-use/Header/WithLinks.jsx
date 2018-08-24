import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Header from '../../components/partials/Header';
import PrimaryButton from '../../components/Buttons';

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

const HeaderWithLinks = (props) => {
  const { classes } = props;
  const linkLeft = (
    <Button component="a">Regresar</Button>
  );
  const linkRight = (
    <PrimaryButton tag="a">
      Publica una posición
    </PrimaryButton>
  );

  return (
    <Header
      image="img/Laboratoria_logo.svg"
      classes={classes}
      linkLeft={linkLeft}
      linkRight={linkRight}
    />
  );
};

HeaderWithLinks.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default withStyles(styles)(HeaderWithLinks);
