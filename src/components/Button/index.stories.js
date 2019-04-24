import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button  from '.';

storiesOf('Button Props', module)
  .add('default', () => (
    <>
      <Button type='secondary'>Click me </Button>
      <Button>Click me </Button>
    </>
  ))
  .add('size - small', () => (
    <>
      <Button size='small'>Click me </Button>
      <Button size='small' type='secondary'>Click me </Button>
    </>
  ))
  .add('size - large', () => (
    <>
      <Button size='large'>Click me </Button>
      <Button size='large' type='secondary'>Click me </Button>
    </>
  ))
  .add('disabled', () => (
    <Button disabled>Click me </Button>
  ));
