import React from 'react';
import { storiesOf } from '@storybook/react';

import PrimaryButton  from './';

storiesOf('PrimaryButton', module)
  .add('all buttons', () => (
    <>
      <PrimaryButton tag="a"> Click me </PrimaryButton>
      <PrimaryButton tag="button"> Click me </PrimaryButton>
    </>
  ));
