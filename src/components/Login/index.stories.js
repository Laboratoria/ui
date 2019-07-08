import React from 'react';
import { storiesOf } from '@storybook/react';

import LoginReadme from './README.md';

import Login from './index';

storiesOf('Login', module)
  .addParameters({
    readme: {
      content: LoginReadme,
    },
  })
  .add('Login', () => (
    <>
      <Login />
    </>
  ));
