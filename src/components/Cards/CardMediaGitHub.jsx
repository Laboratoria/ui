import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    boxShadow: '1px 1px 0 1px #e1e1e1',
    marginBottom: 24,
  },
  card: {
    display: 'flex',
    alignItems: 'center',
    padding: 24,
  },
  thumbnail: {
    height: 62,
    position: 'relative',
    width: 62,
  },
  description: {
    flexGrow: 1,
    paddingBottom: 0,
    paddingTop: 0,
  },
};

const CardMediaGitHub = (props) => {
  const {
    action,
    classes,
    thumbnail,
    title,
    subtitle,
  } = props;

  return (
    <Card
      classes={{
        root: classes.root,
      }}
      className={classes.card}
    >
      <div className={classes.thumbnail}>
        {thumbnail}
      </div>

      <CardContent className={classes.description}>
        <Typography variant="h5" component="h2" gutterBottom>
          { title }
        </Typography>
        <Typography variant="body1">
          { subtitle }
        </Typography>
      </CardContent>

      <CardActions disableActionSpacing>
        { action }
      </CardActions>

    </Card>
  );
};

CardMediaGitHub.propTypes = {
  action: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  classes: PropTypes.shape().isRequired,
  thumbnail: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  title: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  subtitle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};

export default withStyles(styles)(CardMediaGitHub);
