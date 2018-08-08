import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

const Header = (props) => {
  const { className, image } = props;
   return (
    <Grid
      container
      component="header"
      className={className}
    >
      <Grid item xs={3} md={4} />
      <Grid
        item
        xs={6}
        md={4}
        container
        display="flex"
        direction="row"
        justify="center"
        alignItems="center"
      >
        <img src={image} alt="Laboratoria" />
      </Grid>
      <Grid item xs={3} md={4} />
    </Grid>
  );
};

Header.propTypes = {
  className: PropTypes.shape().isRequired,
  image: PropTypes.string.isRequired,
};

export default Header;