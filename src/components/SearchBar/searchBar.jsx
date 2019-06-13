import React from 'react';
import PropTypes from 'prop-types';
import { debounce } from 'throttle-debounce';

import SearchBarUI from '.';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      showOptions: false,
    };

    const { debounceTime, debounceCallback } = props;
    this.debounce = debounce(debounceTime, debounceCallback);

    this.handleChange = this.handleChange.bind(this);
    this.handleSelectedValue = this.handleSelectedValue.bind(this);
  }

  handleChange(event) {
    event.stopPropagation();
    const { target: { value } } = event;
    const { onChange } = this.props;
    this.setState({
      value,
      showOptions: true,
    });
    onChange(event);
    this.debounce();
  }

  handleSelectedValue(event) {
    event.stopPropagation();
    const { onSelectValue } = this.props;
    this.setState({
      value: '',
      showOptions: false,
    });
    onSelectValue(event);
  }

  render() {
    const { inputProps, placeholder, options } = this.props;
    const { value, showOptions } = this.state;

    return (
      <SearchBarUI
        placeholder={placeholder}
        options={options}
        onChange={this.handleChange}
        onSelectValue={this.handleSelectedValue}
        inputProps={{ ...inputProps }}
        value={value}
        showOptions={showOptions}
      />
    );
  }
}

SearchBar.defaultProps = {
  debounceTime: 700,
};

SearchBar.propTypes = {
  debounceTime: PropTypes.number,
  debounceCallback: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  options: PropTypes.node.isRequired,
  onSelectValue: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  inputProps: PropTypes.shape().isRequired,
};

export default SearchBar;
