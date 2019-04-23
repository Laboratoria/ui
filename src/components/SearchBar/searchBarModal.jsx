import React from 'react';
import PropTypes from 'prop-types';

import SearchBar from './searchBar';

const SearchBarModal = (props) => {
  const { showSearchBar, onCloseClick, classname } = props;
  if (showSearchBar) {
    return (
      <div
        className={classname}
        onClick={onCloseClick}
        role="dialog"
      >
        <SearchBar {...props}/>
      </div>
    );
  }
  return null;
};

SearchBarModal.propTypes = {
  debounceTime: PropTypes.number,
  debounceCallback: PropTypes.func.isRequired,
  inputProps: PropTypes.object,
  placeholder: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func,
  onCloseClick: PropTypes.func.isRequired,
  onSelectValue: PropTypes.func.isRequired,
  showSearchBar: PropTypes.bool.isRequired,
};

export default SearchBarModal;
