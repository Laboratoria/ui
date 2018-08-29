import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import * as Flags from '../SVG/flags';

const styles = {
  paragraph: {
    marginBottom: 0,
  },
  root: {
    boxShadow: '1px 1px 0 1px #e1e1e1',
  },
  card: {
    display: 'flex',
    alignItems: 'center',
    padding: '22px',
  },
  thumbnail: {
    width: '62px',
    height: '62px',
    position: 'relative',
  },
  flag: {
    width: '20px',
    position: 'absolute',
    bottom: '7px',
    right: '7px',
  },
  description: {
    flexGrow: 1,
    paddingTop: 0,
    paddingBottom: 0,
  },
};

const CardMediaGitHub = (props) => {
  const { data, classes, action } = props;

  return (
    <Card
      className={classes.card}
      classes={{
        root: classes.root,
      }}
    >

      <CardMedia
        className={classes.thumbnail}
        image={`https://github.com/${data.github}.png?size=300`}
        title={data.name}
      >
        <img src={Flags[data.campus]} alt={data.campus} className={classes.flag} />
      </CardMedia>

      <CardContent className={classes.description}>
        <Typography variant="display3" component="h2" gutterBottom>
          { data.name }
        </Typography>
        <Typography
          paragraph
          classes={{
            paragraph: classes.paragraph,
          }}
        >
          {data.recomendedAs}
        </Typography>
      </CardContent>

      <CardActions disableActionSpacing>
        { action }
      </CardActions>

    </Card>
  );
};

CardMediaGitHub.propTypes = {
  data: PropTypes.shape().isRequired,
  classes: PropTypes.shape().isRequired,
  action: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};

export default withStyles(styles)(CardMediaGitHub);
