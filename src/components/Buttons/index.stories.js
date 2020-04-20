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
  ))
  .add('Secondary contained button', () => (
    <>
      <Button size="large" style={{ marginBottom: 16 }} color="secondary">Regístrate</Button>
      <br />
      <Button style={{ marginBottom: 16 }} color="secondary">Regístrate</Button>
      <br />
      <Button size="small" color="secondary">Regístrate</Button>
    </>
  ))
  .add('Secondary outlined button', () => (
    <>
      <Button color="secondary" size="large" style={{ marginBottom: 16 }} variant="outlined">Regístrate</Button>
      <br />
      <Button color="secondary" style={{ marginBottom: 16 }} variant="outlined">Regístrate</Button>
      <br />
      <Button color="secondary" size="small" variant="outlined">Regístrate</Button>
    </>
  ))
  .add('Disabled button', () => (
    <>
      <Button size="large" style={{ marginBottom: 16 }} disabled>Publica una vacante</Button>
      <br />
      <Button style={{ marginBottom: 16 }} disabled>Publica una vacante</Button>
      <br />
      <Button size="small" disabled>Publica una vacante</Button>
    </>
  ));
