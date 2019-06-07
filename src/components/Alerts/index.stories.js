import React from 'react';
import { storiesOf } from '@storybook/react';

import Alert from './';

storiesOf('Alert', module)
  .add('alert', () => (
    <>
      <Alert text="Ejemplo de uso de una alerta" />
    </>
  ));
