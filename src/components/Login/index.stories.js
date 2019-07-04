import React from 'react';
import { storiesOf } from '@storybook/react';

import Login from './index';
import RecoveryPassword from './recoveryPassword';

storiesOf('Login', module)
  .add('Login', () => (
    <>
      <Login />
    </>
  ))
  .add('RecoveryPassword', () => (
    <>
      <RecoveryPassword />
    </>
  ));
