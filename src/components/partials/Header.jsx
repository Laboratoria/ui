import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

const Header = ({ className, image }) => (
  <Grid
    classes={{
      container: className,
    }}
    component="header"
    container
  >
    <Grid item xs={3} md={4} />
    <Grid
      item
      xs={6}
      md={4}
      alignItems="center"
      container
      direction="row"
      display="flex"
      justify="center"
    >
      <img alt="Laboratoria" src={image} />
    </Grid>
    <Grid item xs={3} md={4} />
  </Grid>
);

Header.propTypes = {
  className: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Header;