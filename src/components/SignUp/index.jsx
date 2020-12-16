import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  Grid,
  Checkbox,
  FormControlLabel,
} from '@material-ui/core';
import Button from '../Buttons';

import Link from '../Links';
import TextField from '../Inputs/TextField';
import Autocomplete from '../Autocomplete';


const style = {
  root: {
    flexGrow: 1,
    '& a': {
      border: 'none',
      fontWeight: 400,
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
  formControlLabel: {
    marginRight: 0,
  },
  checkbox: {
    padding: 9,
  },
};

const SingUp = ({
  autocompleteProps,
  classes,
  labels,
  logIn,
  onSubmit,
  onBlur,
  privacyPolicies,
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
        { autocompleteProps ? <Autocomplete {...autocompleteProps} />
          : (
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
          )}
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
          classes={{ root: classes.formControlLabel }}
          control={(
            <Checkbox
              checked={checked}
              classes={{ root: classes.checkbox }}
              color="primary"
              onChange={handleChange}
              required
            />
          )}
          label={privacyPolicies}
        />

        <div className={classes.action}>
          <Button id="buttonSignUp" type="submit">{labels.submit}</Button>
        </div>

        {logIn}
      </Grid>
    </Grid>
  );
};

SingUp.defaultProps = {
  autocompleteProps: null,
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
    <>
      Estoy de acuerdo con la
      {' '}
      <Link
        href="https://www.laboratoria.la/privacidad"
        target="_blank"
      >
        política de privacidad de Laboratoria
      </Link>
    </>
  ),
  logIn: (
    <p>
      ¿Tienes una cuenta?
      {' '}
      <Link href="/login">Ingresa</Link>
    </p>
  ),
};

SingUp.propTypes = {
  autocompleteProps: PropTypes.shape(),
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
