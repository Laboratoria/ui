import React, { useState } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import InputBase from '@material-ui/core/InputBase';
import style from './style';

const TextField = ({
  label,
  classes,
  inputProps,
}) => {
  const [value, setValue] = useState('');

  return (
    <FormControl className={classes.root}>
      <InputLabel shrink htmlFor={inputProps.id}>
        { label }
      </InputLabel>
      <InputBase
        className={classes.input}
        value={value}
        onChange={event => setValue(event.target.value)}
        {...inputProps}
      />
    </FormControl>
  );
};

TextField.propTypes = {
  label: PropTypes.string.isRequired,
  classes: PropTypes.shape({}).isRequired,
  inputProps: PropTypes.shape({}).isRequired,
};

export default withStyles(style)(TextField);
