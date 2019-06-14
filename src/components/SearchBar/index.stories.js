import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import SearchBarUI from '.';
import SearchBar from './searchBar';

storiesOf('SearchBarUI', module)
  .add('searchBarUI closed', () => (
    <SearchBarUI
      options={['Andrea', 'Guilherme', 'Dení', 'Rafael', 'Cesar']}
      onSelectValue={action('onSelectValue')}
      onChange={action('onChange')}
      value="Example"
    />
  ))
  .add('searchBarUI opened', () => (
    <SearchBarUI
      options={['Andrea', 'Guilherme', 'Dení', 'Rafael', 'Cesar']}
      onSelectValue={action('onSelectValue')}
      onChange={action('onChange')}
      value="Example"
      showOptions
    />
  ))
  .add('SearchBar', () => (
    <SearchBar
      options={['Andrea', 'Guilherme', 'Dení', 'Rafael', 'Cesar']}
      debounceCallback={action('debounceCallback')}
      onSelectValue={action('onelectValue')}
    />
  ));
