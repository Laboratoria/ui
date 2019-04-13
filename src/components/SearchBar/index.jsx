import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

const styles = {
  searchBar: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    width: '100%',
  },
  list: {
    background: '#FAFAFA',
    padding: '10px 27px',
  },
  item: {
    background: '#F7F7F7',
    boxShadow: '1px 1px 0px #E5E5E5',
    cursor: 'pointer',
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

const SearchBar = (props) => {
  const {
    classes,
    inputProps,
    onChange,
    onSelectValue,
    options,
    placeholder,
    showOptions,
    value,
  } = props;

  return (
    <>
      <Paper className={classes.searchBar}>
        <SearchIcon className={classes.icon} />
        <InputBase
          className={classes.input}
          placeholder={placeholder}
          onChange={onChange}
          fullWidth
          inputProps={{...inputProps}}
          value={value}
        />
      </Paper>
      { showOptions === true && options.length > 0
        && (
          <Paper className={classes.list}>
            {
              options.map((option, index) => (
                <Paper
                  className={classes.item}
                  key={index}
                  onClick={onSelectValue}
                >
                  {option}
                </Paper>
              ))
            }
          </Paper>
        )
      }
    </>
  );
};

SearchBar.defaultProps = {
  placeholder: 'Search term',
  showOptions: false,
};

SearchBar.propTypes = {
  classes: PropTypes.shape().isRequired,
  inputProps: PropTypes.object,
  onChange: PropTypes.func.isRequired,
  onSelectValue: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  placeholder: PropTypes.string,
  showOptions: PropTypes.bool,
  value: PropTypes.string.isRequired,
};

export default withStyles(styles)(SearchBar);
