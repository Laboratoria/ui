import React from 'react';
import { storiesOf } from '@storybook/react';

import Alert from ".";

storiesOf('Alerts', module)
  .add('Warning', () => (
    <>
      <Alert text="Ejemplo de uso de una alerta" />
    </>
  ));
