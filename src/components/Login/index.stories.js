import React from 'react';
import { storiesOf } from '@storybook/react';

import Login from './index';

storiesOf('Login', module)
  .add('Login', () => (
    <>
      <Login />
    </>
  ));
