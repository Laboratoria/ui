import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import classNames from 'classnames';
import { debounce } from 'throttle-debounce';

const styles = {
  searbBar: {
    background: '#FAFAFA',
    boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.24), 0px 0px 2px rgba(0, 0, 0, 0.12)',
    display: 'none',
    alignItems: 'center',
    height: 50,
    width: '100%',
  },
  show: {
    display: 'flex',
  },
  list: {
    background: '#FAFAFA',
    padding: '10px 27px',
  },
  item: {
    background: '#F7F7F7',
    boxShadow: '1px 1px 0px #E5E5E5',
    padding: 14,
    borderRadius: 0,
    margin: '20px 0',
    fontFamily: 'Bitter,serif',
    fontWeight: 'bold',
    fontSize: 12,
  },
  icon: {
    marginLeft: 20,
    color: 'rgba(0, 0, 0, 0.54)',
  },
  input: {
    marginLeft: 27,
  },
};

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      showFiltered: true,
    };
    this.handleOnInput = this.handleOnInput.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.debounce = debounce(700, () => props.onInput(this.state.inputValue))
    this.filteredOptions = (options, value) => value.length > 0
      ? options.filter(option => option.toLowerCase().indexOf(value.toLowerCase()) > -1)
      : [];
  }

  handleOnInput(event) {
    const { target: { value } } = event;
    this.setState({
      showFiltered: true,
      inputValue: value,
    });
  }

  handleSelect(event) {
    const { currentTarget: { innerText } } = event;
    const { onSelectValue } = this.props;
    onSelectValue(innerText);
    this.setState({
      showFiltered: false,
      inputValue: innerText,
    });
  }

  render() {
    const { inputValue, showFiltered } = this.state;
    const { classes, show, options, placeholder } = this.props;
    const filteredOptions = this.filteredOptions(options, inputValue);
    return (
      <section>
        <Paper
          className={
            classNames(
              classes.searbBar,
              { [classes.show]: show },
            )
          }
        >
          <SearchIcon className={classes.icon} />
          <InputBase
            className={classes.input}
            placeholder={placeholder}
            onChange={this.handleOnInput}
            fullWidth
            inputProps={{
              onKeyDown: this.debounce
            }}
            value={inputValue}
          />
        </Paper>
        { showFiltered === true && filteredOptions.length > 0
          && (
            <Paper className={classes.list}>
              {
                filteredOptions.map(option => (
                  <Paper
                    className={classes.item}
                    key={option}
                    onClick={this.handleSelect}
                  >
                    {option}
                  </Paper>
                ))
              }
            </Paper>
          )
        }
      </section>
    );
  }
}

SearchBar.defaultProps = {
  show: true,
  onInput: () => null,
  options: [],
  placeholder: 'Search term'
};


SearchBar.propTypes = {
  classes: PropTypes.shape().isRequired,
  onSelectValue: PropTypes.func.isRequired,
  onInput: PropTypes.func,
  show: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.string),
  placeholder: PropTypes.string,
};

export default withStyles(styles)(SearchBar);
