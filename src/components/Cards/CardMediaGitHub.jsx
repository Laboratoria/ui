import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    boxShadow: '1px 1px 0 1px #e1e1e1',
  },
  card: {
    display: 'flex',
    alignItems: 'center',
    padding: '21px',
  },
  thumbnail: {
    width: '62px',
    height: '62px',
    position: 'relative',
  },
  description: {
    flexGrow: 1,
    paddingTop: 0,
    paddingBottom: 0,
  },
};

const CardMediaGitHub = (props) => {
  const {
    classes,
    action,
    title,
    subtitle,
    thumbnail,
  } = props;

  return (
    <Card
      className={classes.card}
      classes={{
        root: classes.root,
      }}
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
  classes: PropTypes.shape().isRequired,
  title: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  subtitle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  thumbnail: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  action: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};

export default withStyles(styles)(CardMediaGitHub);
