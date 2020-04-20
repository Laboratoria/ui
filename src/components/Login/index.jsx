import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';

import Button from '../Buttons';
import Link from '../Links';
import TextField from '../Inputs/TextField';

const style = theme => ({
  root: {
    flexGrow: 1,
    '& a': {
      border: 'none',
      [theme.breakpoints.only('xs')]: {
        fontSize: 14,
      },
    },
    '& strong': {
      fontWeight: 400,
    },
  },
  action: {
    width: '100%',
    marginTop: 20,
    marginBottom: 20,
  },
  textCenter: {
    textAlign: 'center',
  },
  textRight: {
    textAlign: 'right',
  },
});

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
        onSubmit(event.target);
      }}
    >
      <TextField
        label={labels.email}
        inputProps={{
          id: 'email',
          name: 'email',
          type: 'email',
          required: true,
          onBlur: event => onBlur(event),
        }}
      />
      <TextField
        label={labels.pass}
        inputProps={{
          id: 'password',
          name: 'password',
          type: 'password',
          required: true,
          onBlur: event => onBlur(event),
        }}
      />

      <div className={classes.textRight}>{recoveryPass}</div>

      <div className={classNames(classes.textCenter, classes.action)}>
        <Button id="buttonLogin" type="submit">{labels.submit}</Button>
      </div>

      <div className={classes.textCenter}>{createAccount}</div>
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
