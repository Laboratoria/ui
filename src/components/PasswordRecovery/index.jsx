import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Button from '../Buttons';
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
  marginBottom: {
    marginBottom: 20,
  },
};

const PasswordRecovery = ({
  onSubmit, onBlur, labels, classes,
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
      <Typography
        className={classes.marginBottom}
        component="p"
        align="center"
      >
        { labels.text }
      </Typography>

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

      <div className={classes.action}>
        <Button id="buttonRecoveryPass" type="submit">{labels.submit}</Button>
      </div>
    </Grid>
  </Grid>
);

PasswordRecovery.defaultProps = {
  onSubmit: () => {
    console.log('OnSubmit');
  },
  onBlur: () => {
    console.log('OnBlur');
  },
  labels: {
    email: 'Correo electrónico',
    submit: 'Enviar',
    text: 'Ingresa tu correo electrónico y te enviaremos un mensaje a tu buzón con los pasos para recuperar tu contraseña.',
  },
};

PasswordRecovery.propTypes = {
  classes: PropTypes.shape().isRequired,
  onSubmit: PropTypes.func,
  onBlur: PropTypes.func,
  labels: PropTypes.shape({
    email: PropTypes.oneOfType([PropTypes.node, PropTypes.object, PropTypes.string]),
    submit: PropTypes.oneOfType([PropTypes.node, PropTypes.object, PropTypes.string]),
  }),
};

export default withStyles(style)(PasswordRecovery);
