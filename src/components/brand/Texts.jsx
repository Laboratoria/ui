import React from 'react';
import PropTypes from 'prop-types';
import { withTheme, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  texts: {
    textAlign: 'left',
  },
 });

const Texts = (props) => {
  const { classes, theme } = props;

  return (
    <div className={classes.texts}>
      <Typography variant="display4" gutterBottom>
        Display 4
      </Typography>
      <Typography gutterBottom>
        {`${theme.typography.display4.fontSize} (desktop)`}
      </Typography>
      <Typography variant="display3" gutterBottom>
        Display 3
      </Typography>
      <Typography gutterBottom>
        {`${theme.typography.display3.fontSize} (desktop)`}
      </Typography>
      <Typography variant="display2" gutterBottom>
        Display 2
      </Typography>
      <Typography gutterBottom>
        {`${theme.typography.display2.fontSize} (desktop)`}
      </Typography>
      <Typography variant="display1" gutterBottom>
        Display 1
      </Typography>
      <Typography gutterBottom>
        {`${theme.typography.display1.fontSize} (desktop)`}
      </Typography>
      <Typography variant="headline" gutterBottom>
        Headline
      </Typography>
      <Typography gutterBottom>
        {`${theme.typography.headline.fontSize} (desktop)`}
      </Typography>
      <Typography variant="title" gutterBottom>
        Title
      </Typography>
      <Typography gutterBottom>
        {`${theme.typography.title.fontSize} (desktop)`}
      </Typography>
      <Typography variant="subheading" gutterBottom>
        Subheading
      </Typography>
      <Typography gutterBottom>
        {`${theme.typography.subheading.fontSize} (desktop)`}
      </Typography>
      <Typography variant="body2" gutterBottom>
        Body 2
      </Typography>
      <Typography gutterBottom>
        {`${theme.typography.body2.fontSize} (desktop)`}
      </Typography>
      <Typography variant="body1" gutterBottom>
        Body 1
      </Typography>
      <Typography gutterBottom>
        {`${theme.typography.body1.fontSize} (desktop)`}
      </Typography>
      <Typography variant="caption" gutterBottom>
        Caption
      </Typography>
      <Typography gutterBottom>
        {`${theme.typography.caption.fontSize} (desktop)`}
      </Typography>
      <Typography gutterBottom>
        {`
          Lorem ipsum dolor sit amet, consectetur adipisicing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        `}
      </Typography>
      <Typography gutterBottom>
        {`${theme.typography.fontSize} (desktop)`}
      </Typography>
      <Typography variant="button" gutterBottom>
        Button
      </Typography>
      <Typography gutterBottom>
        {`${theme.typography.button.fontSize} (desktop)`}
      </Typography>
    </div>
  );
};

Texts.propTypes = {
  classes: PropTypes.shape().isRequired,
  theme: PropTypes.object.isRequired,
};

export default withTheme()(withStyles(styles)(Texts));