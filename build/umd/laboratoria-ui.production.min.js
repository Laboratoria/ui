(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@material-ui/core/styles'), require('react'), require('@material-ui/core')) :
  typeof define === 'function' && define.amd ? define(['@material-ui/core/styles', 'react', '@material-ui/core'], factory) :
  (global['laboratoria-ui'] = factory(null,global.React,null));
}(this, (function (styles,React,core) { 'use strict';

  React = React && React.hasOwnProperty('default') ? React['default'] : React;

  var theme = styles.createMuiTheme({
    typography: {
      fontFamily: ['Open Sans,sans-serif'],
      title: {
        fontFamily: 'Bitter,serif',
        fontWeight: '700',
        lineHeight: '100%'
      },
      subheading: {
        fontFamily: 'Bitter,serif',
        fontWeight: '700',
        lineHeight: '100%'
      },
      button: {
        fontSize: "16px",
        textTransform: "uppercase",
        fontWeight: 900,
        fontFamily: 'Open Sans,sans-serif',
        color: "rgba(0, 0, 0, 0.87)"
      }
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
