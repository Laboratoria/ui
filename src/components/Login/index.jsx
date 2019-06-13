import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import PrimaryButton from '../Buttons';
import Link from '../Links';
import TextField from '../Inputs/TextField';

const style = {
  root: {
    flexGrow: 1,
    '& a': {
      border: 'none',
    },
    '& strong': {
      fontWeight: 400,
    },
  },
  action: {
    width: '100%',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
};

const Login = ({
  onSubmit, onBlur, labels, recoveryPass, createAccount, classes,
}) => (
  <Grid container justify="center" className={classes.root}>
    <Grid
      item
      xs={12}
      component="form"
      autoComplete="true"
      onSubmit={(event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        onSubmit(data);
      }}
    >
      <TextField
        label={labels.email}
        inputProps={{
          id: 'email',
          type: 'email',
          required: true,
          onBlur: event => onBlur(event),
        }}
      />
      <TextField
        label={labels.pass}
        inputProps={{
          id: 'password',
          type: 'password',
          required: true,
          onBlur: event => onBlur(event),
        }}
      />

      <Typography
        component="p"
        align="right"
      >
        { recoveryPass }
      </Typography>

      <div className={classes.action}>
        <PrimaryButton tag="button" type="submit">
          {labels.submit}
        </PrimaryButton>
      </div>

      <Typography
        component="p"
        align="center"
      >
        { createAccount }
      </Typography>
    </Grid>
  </Grid>
);

Login.defaultProps = {
  onSubmit: () => {
    console.log('OnSubmit');
  },
  onBlur: () => {
    console.log('OnBlur');
  },
  labels: {
    email: 'Correo electrónico',
    pass: 'Contraseña',
    submit: 'Ingresa',
  },
  recoveryPass: (
    <Link href="/recovery-pass">
      <strong>
        ¿Olvidaste tu Contraseña?
      </strong>
    </Link>
  ),
  createAccount: (
    <Link href="/create-account">
      ¿No tienes una cuenta?
      {' '}
      <strong>
        Regístrate
      </strong>
    </Link>
  ),
};

Login.propTypes = {
  classes: PropTypes.shape().isRequired,
  onSubmit: PropTypes.func,
  onBlur: PropTypes.func,
  labels: PropTypes.shape({
    email: PropTypes.oneOfType([PropTypes.node, PropTypes.object, PropTypes.string]),
    pass: PropTypes.oneOfType([PropTypes.node, PropTypes.object, PropTypes.string]),
    submit: PropTypes.oneOfType([PropTypes.node, PropTypes.object, PropTypes.string]),
  }),
  recoveryPass: PropTypes.node,
  createAccount: PropTypes.node,
};

export default withStyles(style)(Login);
