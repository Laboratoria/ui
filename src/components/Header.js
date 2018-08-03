import React from 'react';
import Grid from '@material-ui/core/Grid';

const Header = (props) => (
  <Grid 
    container
    component="header"
    className={props.classes}
  >
    <Grid item xs={3} md={4} />
    <Grid item xs={6} md={4}
      container
      display='flex'
      direction= 'row'
      justify= 'center'
      alignItems= 'center'
    >
      <img src={props.image} alt="Laboratoria"/>
    </Grid>
    <Grid item xs={3} md={4} />
  </Grid>
);


export default Header;