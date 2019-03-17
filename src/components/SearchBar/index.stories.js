import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import SearchBar  from './';

storiesOf('SearchBar', module)
  .add('searchBar', () => (
    <SearchBar options={['Andrea', 'Guilherme', 'Dení', 'Rafael', 'Cesar']}
      onSelectValue={action("selectedValue")}
      onInput={action('onInput')} />
  ));