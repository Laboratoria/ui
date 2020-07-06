import React from 'react';
import { Typography } from '@material-ui/core';
import PrimaryButton from '../../components/Buttons';

const Buttons = () => (
  <section id="buttons">
    <Typography variant="h2" gutterBottom>
      Buttons
    </Typography>
    <PrimaryButton tag="a">
      Publica una posición
    </PrimaryButton>
  </section>
);

export default Buttons;
