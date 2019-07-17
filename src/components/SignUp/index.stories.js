import React from 'react';
import { storiesOf } from '@storybook/react';

import SignUpReadme from './README.md';

import SignUp from './index';

storiesOf('SignUp', module)
  .addParameters({
    readme: {
      content: SignUpReadme,
    },
  })
  .add('SignUp', () => (
    <>
      <SignUp />
    </>
  ));
