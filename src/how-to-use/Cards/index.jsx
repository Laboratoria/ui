import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardMediaGitHub from '../../components/Cards';
import {
  aqp,
  lim,
  gdl,
  cdmx,
  scl,
  spl,
} from '../../components/SVG/flags';

const Flags = {
  aqp,
  lim,
  gdl,
  cdmx,
  scl,
  spl,
};

const graduated = {
  uid: 'JfStPqpcrfdh97RR2OUOUtmZqDl2',
  name: 'Janeth Quispe',
  github: 'jani-123',
  available: false,
  campus: 'aqp',
  recomendedAs: 'Front-end Developer',
  englishLevel: 'basic',
  lifeSkills: [
    'adaptability',
    'askForHelp',
    'conflictResolution',
    'problemSolving',
    'selfLearning',
    'teamWork',
  ],
  techSkills: [],
  role: 'student',
};

const styles = {
  root: {
    display: 'block',
    width: '100%',
    height: '100%',
    textDecoration: 'none',
    color: 'inherit',
  },
  media: {
    width: '100%',
    height: '100%',
  },
  flag: {
    width: '20px',
    position: 'absolute',
    bottom: '7px',
    right: '7px',
  },
};

const GraduatedCard = ({ classes }) => {
  const Thumbnail = ({ to, data }) => (
    <a href={to} className={classes.root}>
      <CardMedia image={`https://github.com/${data.github}.png?size=300`} title={data.name} className={classes.media}>
        <img src={Flags[data.campus]} alt={data.campus} className={classes.flag} />
      </CardMedia>
    </a>
  );

  Thumbnail.propTypes = {
    to: PropTypes.string.isRequired,
    data: PropTypes.shape().isRequired,
  };

  const Title = ({ text, to }) => (
    <a href={to} className={classes.root}>{text}</a>
  );

  Title.propTypes = {
    text: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
  };

  const Subtitle = ({ text, to }) => (
    <a href={to} className={classes.root}>{text}</a>
  );

  Subtitle.propTypes = {
    text: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
  };

  const action = (
    <Button variant="outlined" color="primary">
      Pre-seleccionar
    </Button>
  );

  return (
    <section>
      <Typography variant="h2" gutterBottom>
        Graduated Card
      </Typography>

      <CardMediaGitHub
        action={action}
        data={graduated}
        thumbnail={<Thumbnail data={graduated} to="https://app.talento.laboratoria.la/profile/MF0tL4sk8HcBQ0YHLxb0E8D5cD12" />}
        title={<Title text={graduated.name} to="https://app.talento.laboratoria.la/profile/MF0tL4sk8HcBQ0YHLxb0E8D5cD12" />}
        subtitle={<Subtitle text={graduated.recomendedAs} to="https://app.talento.laboratoria.la/profile/MF0tL4sk8HcBQ0YHLxb0E8D5cD12" />}
      />
    </section>
  );
};

GraduatedCard.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default withStyles(styles)(GraduatedCard);
