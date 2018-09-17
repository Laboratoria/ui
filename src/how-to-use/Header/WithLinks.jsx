import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '../../components/Links';
import { TypographyDisplay5 } from '../../components/Typography';
import Header from '../../components/partials/Header';
import PrimaryButton from '../../components/Buttons';

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
    <PrimaryButton tag="a">
      Publica una posición
    </PrimaryButton>
  );

  return (
    <Grid container>
      <Grid item xs={12}>
        <TypographyDisplay5 component="h2" gutterBottom>
          Header
        </TypographyDisplay5>

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
