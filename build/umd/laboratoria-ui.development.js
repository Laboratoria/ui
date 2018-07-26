(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@material-ui/core/styles'), require('react'), require('@material-ui/core')) :
  typeof define === 'function' && define.amd ? define(['@material-ui/core/styles', 'react', '@material-ui/core'], factory) :
  (global['laboratoria-ui'] = factory(null,global.React,null));
}(this, (function (styles,React,core) { 'use strict';

  React = React && React.hasOwnProperty('default') ? React['default'] : React;

  var theme = styles.createMuiTheme({
    typography: {
      fontFamily: ['Bitter']
    },
    palette: {
      primary: {
        main: '#ffe521'
      }
    }
  });

  var LabButton = function LabButton(props) {
      return React.createElement(
          core.Button,
          { color: 'secondary' },
          props.children
      );
  };

  var index = {
    Theme: theme,
    Button: LabButton
  };

  return index;

})));
