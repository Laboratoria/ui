import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

const Header = (props) => {
  const {
    classes,
    image,
    linkRight,
    linkLeft,
  } = props;

  return (
    <Grid
      className={classes.root}
      container
      direction="row"
      justify="space-around"
      component="header"
    >
      <Grid
        container
        justify="space-between"
        className={classes.header}
      >
        <Grid item md={4}>
          { linkLeft }
        </Grid>
        <Grid item md={4}>
          <img src={image} alt="Laboratoria" />
        </Grid>
        <Grid item md={4} className={classes.linkRight}>
          { linkRight }
        </Grid>
      </Grid>
    </Grid>
  );
};

Header.defaultProps = {
  linkLeft: [],
  linkRight: [],
};

Header.propTypes = {
  classes: PropTypes.shape().isRequired,
  image: PropTypes.string.isRequired,
  linkLeft: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  linkRight: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

export default Header;
