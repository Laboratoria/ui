import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  body1: theme.typography.display5,
});

const TypographyDisplay5 = ({ classes, ...props }) => (
  <Typography
    classes={{
      body1: classes.body1,
    }}
    variant="body1"
    {...props}
  />
);

TypographyDisplay5.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default withStyles(styles)(TypographyDisplay5);
