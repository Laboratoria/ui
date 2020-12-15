import React from 'react';
import PropTypes from 'prop-types';
import AsyncCreatableSelect from 'react-select/async-creatable';
import debounce from 'debounce-promise';

import Theme from '../Theme';

const selectStyles = theme => ({
  container: provided => ({
    ...provided,
    color: '#000',
    fontFamily: theme.typography.fontFamily,
    fontSize: '1rem',
    fontWeight: 300,
    marginBottom: theme.spacing(2),
  }),
  control: provided => ({
    ...provided,
    backgroundColor: '#f7f7f7',
    border: 0,
    borderRadius: 0,
    boxShadow: 'none !important',
    padding: 8,
    '&:hover': {
      border: 0,
    },
  }),
  input: provided => ({
    ...provided,
    color: 'inherit',
    '& input': {
      color: 'inherit',
      fontWeight: 'inherit',
      fontFamily: 'inherit',
    },
  }),
  option: (provided, state) => ({
    ...provided,
    background: state.isSelected && theme.palette.action.selected,
    color: state.isSelected && '#000',
    '&:hover': {
      background: theme.palette.action.hover,
    },
  }),
  singleValue: provided => ({
    ...provided,
    color: 'inherit',
  }),
  valueContainer: provided => ({
    ...provided,
    padding: '0 8px',
  }),
});

const Asynchronous = (props) => {
  const { loadOptions } = props;
  return (
    <AsyncCreatableSelect
      cacheOptions
      defaultOptions
      loadOptions={debounce(loadOptions, 300)}
      styles={selectStyles(Theme)}
      {...props}
    />
  );
};

Asynchronous.propTypes = {
  loadOptions: PropTypes.func.isRequired,
};

export default Asynchronous;
