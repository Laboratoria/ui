import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

const styles = theme => ({
  display5: theme.typography.display5,
  display6: theme.typography.display6,
});

const CustomTypography = ({ classes, variant, ...props }) => (
  <Typography
    classes={{
      root: classNames(classes[variant]),
    }}
    variant={variant}
    {...props}
  />
);

CustomTypography.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default withStyles(styles)(CustomTypography);
