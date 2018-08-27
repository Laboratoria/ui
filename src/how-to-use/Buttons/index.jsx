import React from 'react';
import PrimaryButton from '../../components/Buttons';
import { TypographyDisplay5 } from '../../components/Typography';

const Buttons = () => (
  <section>
    <TypographyDisplay5 component="h2" gutterBottom>
      Buttons
    </TypographyDisplay5>
    <PrimaryButton tag="a">
      Publica una posición
    </PrimaryButton>
  </section>
);

export default Buttons;
