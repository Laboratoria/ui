import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import style from './style';

class TextField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  handleChange = (event) => {
    const { value } = event.target;
    this.setState({
      value,
    });
  }

  render() {
    const { value } = this.state;
    const { label, classes, inputProps } = this.props;
    return (
      <FormControl className={classes.root}>
        <InputLabel shrink htmlFor={inputProps.id}>
          { label }
        </InputLabel>
        <Input
          className={classes.input}
          value={value}
          onChange={this.handleChange}
          inputProps={inputProps}
          disableUnderline
        />
      </FormControl>
    );
  }
}

TextField.propTypes = {
  label: PropTypes.shape({}).isRequired,
  classes: PropTypes.shape({}).isRequired,
  inputProps: PropTypes.shape({}).isRequired,
};

export default withStyles(style)(TextField);
