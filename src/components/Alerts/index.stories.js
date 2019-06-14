import React from 'react';
import { storiesOf } from '@storybook/react';

import AlertReadme from './README.md';

import Alert from '.';


storiesOf('Alerts', module)
  .addParameters({
    readme: {
      content: AlertReadme,
    },
  })
  .add('Warning', () => (
    <>
      <Alert>
        Ejemplo de uso de una alerta
      </Alert>
    </>
  ));
