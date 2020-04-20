import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './index';

storiesOf('Buttons', module)
  .add('Primary as a link', () => <PrimaryButton tag="a"> Click me </PrimaryButton>)
  .add('Primary as a button', () => <PrimaryButton tag="button"> Click me </PrimaryButton>);
