# Laboratoria UI


Laboratoria UI es un tema personalizado de [Material UI](https://material-ui.com/) con algunos de nuestros componentes personalizados con nuestra marca.

## Cómo usar Laboratoria UI en algún proyecto

## Integre con su aplicación React

### Primero, importa nuestras fuentes

**Bitter** para los títulos y **Open Sans** para los textos

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Bitter:400,700|Open+Sans:400,400i,700" />
```

### Por último, importe laboratoria-ui, tema de Material-UI

```javascript
import React from 'react';
import ReactDOM from 'react-dom';

// Inject a theme into your application
import { ThemeProvider } from '@material-ui/core/styles';

// Our theme
import { Theme } from 'laboratoria-ui';

import Typography from '@material-ui/core/Typography';
import Login from 'laboratoria-ui';

ReactDOM.render(
  <ThemeProvider theme={Theme}>
    <div>
      <Typography variant="h1" align="center">
        ¡Hola!
      </Typography>

      <Login/>
    </div> 
  </ThemeProvider>
  document.getElementById('app'),
);
```

## Cómo arrancar el Storybook para poder aportar nuevos componenetes

### Instala el proyecto

```shell
# clona repo desde tu fork
git clone git@github.com:<github-username>/ui.git

# entra en directorio de tu copia local del repo
cd ui

# instala las dependencias de Node.js declaradas en `package.json`
yarn install

# arranca localmente
yarn start
```

Esto arrancará la aplicacion en  `localhost:8080`, verás el Storybook que es donde se enlistan todos los componentes que tenemos hasta el momento.

## Más detalles

Si deseas obtener más información sobre el proceso de desarrollo, el flujo de trabajo, etc. Consulta la documentación completa en la [Wiki](https://github.com/Laboratoria/ui/wiki).


## Team

Devs: Todo el equipo de [developers](https://github.com/orgs/Laboratoria/people) de Laboratoria

## Soporte

Si encuentras algún *bug*, abre un *issue* aquí https://github.com/Laboratoria/ui/issues
