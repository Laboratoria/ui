import React from 'react';
import { storiesOf } from '@storybook/react';

import TextField from './TextField';

storiesOf('Inputs', module)
  .add('TextField', () => (
    <TextField
      label="Email"
      inputProps={{
        id: 'email',
        type: 'text',
        required: true,
      }}
    />
  ));
