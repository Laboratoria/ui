import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import Button from '../Buttons';
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

const SingUp = ({
  onSubmit, onBlur, labels, logIn, privacyPolicies, classes,
}) => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
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
          label={labels.company}
          inputProps={{
            id: 'company',
            name: 'company',
            type: 'text',
            required: true,
            onBlur: event => onBlur(event),
          }}
        />
        <TextField
          label={labels.name}
          inputProps={{
            id: 'name',
            name: 'name',
            type: 'text',
            required: true,
            onBlur: event => onBlur(event),
          }}
        />
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
        <FormControlLabel
          data-test="checkbox"
          control={<Checkbox color="primary" checked={checked} onChange={handleChange} />}
          label={(privacyPolicies && privacyPolicies)}
        />

        <div className={classes.action}>
          <Button id="buttonSignUp" type="submit" disabled={!checked}>{labels.submit}</Button>
        </div>
        <Typography
          component="p"
          align="center"
        >
          { logIn && logIn }
        </Typography>
      </Grid>
    </Grid>
  );
};

SingUp.defaultProps = {
  onSubmit: () => {
    console.log('OnSubmit');
  },
  onBlur: () => {
    console.log('OnBlur');
  },
  labels: {
    company: 'Empresa',
    name: 'Nombre del reclutador',
    email: 'Correo electrónico',
    pass: 'Contraseña',
    submit: 'Regístrate',
  },
  privacyPolicies: (
    <Link
      href="https://www.laboratoria.la/privacidad"
      target="_blank"
    >
      Estoy de acuerdo con la
      {' '}
      <strong>
        política de privacidad de Laboratoria
      </strong>
    </Link>
  ),
  logIn: (
    <Link href="/login">
      ¿Tienes una cuenta?
      {' '}
      <strong>
        Ingresa
      </strong>
    </Link>
  ),
};

SingUp.propTypes = {
  classes: PropTypes.shape().isRequired,
  onSubmit: PropTypes.func,
  onBlur: PropTypes.func,
  labels: PropTypes.shape({
    company: PropTypes.oneOfType([PropTypes.node, PropTypes.object, PropTypes.string]),
    name: PropTypes.oneOfType([PropTypes.node, PropTypes.object, PropTypes.string]),
    email: PropTypes.oneOfType([PropTypes.node, PropTypes.object, PropTypes.string]),
    pass: PropTypes.oneOfType([PropTypes.node, PropTypes.object, PropTypes.string]),
    submit: PropTypes.oneOfType([PropTypes.node, PropTypes.object, PropTypes.string]),
  }),
  logIn: PropTypes.node,
  privacyPolicies: PropTypes.node,
};

export default withStyles(style)(SingUp);
