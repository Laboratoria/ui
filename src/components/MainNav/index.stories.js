import React from 'react';
import { storiesOf } from '@storybook/react';

import MainNavReadme from './README.md';

import MainNav from '.';

storiesOf('MainNav', module)
  .addParameters({
    readme: {
      content: MainNavReadme,
    },
  })
  .add('MainNav', () => (
    <>
      <MainNav />
    </>
  ));
