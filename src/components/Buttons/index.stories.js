import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './index';

storiesOf('Buttons', module)
  .add('Primary contained button', () => (
    <>
      <Button size="large" style={{ marginBottom: 16 }}>Publica una vacante</Button>
      <br />
      <Button style={{ marginBottom: 16 }}>Publica una vacante</Button>
      <br />
      <Button size="small">Publica una vacante</Button>
    </>
  ));
