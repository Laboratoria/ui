import React from 'react';
import { storiesOf } from '@storybook/react';
import Loader from './index';
import LoaderReadme from './README.md';

storiesOf('Loader', module)
  .addParameters({
    readme: {
      content: LoaderReadme,
    },
  })
  .add('Primary loader', () => (
    <div>
      <Loader size="small" />
      <br />
      <Loader />
      <br />
      <Loader size="large" />
      <br />
      <Loader size={80} />
    </div>
  ));
