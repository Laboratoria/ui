import React from 'react';
import { storiesOf } from '@storybook/react';

import PasswordRecoveryReadme from './README.md';

import PasswordRecovery from '.';

storiesOf('Password Recovery', module)
  .addParameters({
    readme: {
      content: PasswordRecoveryReadme,
    },
  })
  .add('PasswordRecovery', () => (
    <>
      <PasswordRecovery />
    </>
  ));
