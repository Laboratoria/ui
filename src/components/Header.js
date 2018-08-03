import React from 'react';
import Grid from '@material-ui/core/Grid';

const Header = (props) => (
  <Grid 
    container
    component="header"
    align="center"
  >
    <Grid item xs={12}>
      <img src={props.image} alt="Laboratoria" />
    </Grid>
  </Grid>
);

export default Header;