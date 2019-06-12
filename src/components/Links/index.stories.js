import React from 'react';
import { storiesOf } from '@storybook/react';

import Link from './Link';

storiesOf('Typography', module)
  .add('Links default', () => (
    <Link href="#links">
      Default
    </Link>
  ))
  .add('Links primary', () => (
    <Link href="#links" variant="primary">
      Primary
    </Link>
  ))
  .add('Links magenta', () => (
    <Link href="#links" variant="magenta">
      Magenta
    </Link>
  ))
  .add('Links mint', () => (
    <Link href="#links" variant="mint">
      Mint
    </Link>
  ));
