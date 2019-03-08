import React from 'react';
import SearchBar from '../../components/SearchBar';

const SearchBarExample = () => (
  <SearchBar
    options={['Andrea', 'Guilherme', 'Dení', 'Rafael', 'Cesar']}
    onSelectValue={value => console.log(value)}
  />
);

export default SearchBarExample;
