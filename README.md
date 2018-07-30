# Laboratoria UI


Laboratoria UI it's a custom theme of the [Material UI](https://material-ui.com/) with some our custom components.

## How to use Laboratoria UI

### Install

```shell
yarn add https://github.com/Laboratoria/ui.git
```

## How to integrate with  your React Application

### First import our fonts

**Bitter** for titles and **Open Sans** for texts

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Bitter:400,700|Open+Sans:400,400i,700" />
```

### Lastly, import  `laboratoria-ui` material-ui theme

```javascript
import React from 'react';
import ReactDOM from 'react-dom';

// Inject a theme into your application
import { MuiThemeProvider } from '@material-ui/core/styles';

// Our theme
import { Theme } from 'laboratoria-ui';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

ReactDOM.render(
  <MuiThemeProvider theme={Theme}>
    <div>
      <Typography variant="display4" align="center">
        Hola
      </Typography>

      <Button variant="contained" color="primary">
        Button
      </Button>    
  </MuiThemeProvider>, 
  document.getElementById('app'),
);
```
