import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '../../components/Links';
import Header from '../../components/partials/Header';
import Button from '../../components/Button';

const styles = {
  root: {
    backgroundColor: '#fff',
    flexGrow: 1,
    padding: '1rem 0',
  },
  header: {
    maxWidth: '1220px',
  },
  image: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  linkLeft: {
    display: 'flex',
    alignItems: 'center',
  },
  linkRight: {
    textAlign: 'right',
  },
};

const HeaderWithLinks = (props) => {
  const { classes } = props;
  const linkLeft = (
    <Link href="#links">
      Regresar
    </Link>
  );
  const linkRight = (
    <Button>
      Publica una posición
    </Button>
  );

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="h2" gutterBottom>
          Header
        </Typography>

        <Header
          image="img/Laboratoria_logo.svg"
          classes={classes}
          linkLeft={linkLeft}
          linkRight={linkRight}
        />
      </Grid>
    </Grid>

  );
};

HeaderWithLinks.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default withStyles(styles)(HeaderWithLinks);
