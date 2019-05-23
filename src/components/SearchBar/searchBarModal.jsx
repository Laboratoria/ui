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
        <SearchBar {...props} />
      </div>
    );
  }
  return null;
};

SearchBarModal.propTypes = {
  classname: PropTypes.string.isRequired,
  debounceCallback: PropTypes.func.isRequired,
  options: PropTypes.node.isRequired,
  onCloseClick: PropTypes.func.isRequired,
  onSelectValue: PropTypes.func.isRequired,
  showSearchBar: PropTypes.bool.isRequired,
};

export default SearchBarModal;
