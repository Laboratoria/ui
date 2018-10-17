import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import _extends from '@babel/runtime/helpers/esm/extends';
import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import _objectWithoutPropertiesLoose from '@babel/runtime/helpers/esm/objectWithoutPropertiesLoose';
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';

var theme = createMuiTheme({
  palette: {
    primary: {
      light: '#ffea4d',
      main: '#ffe521',
      dark: '#b2a017'
    },
    magenta: {
      light: '#ff33b1',
      main: '#ff009e',
      dark: '#b2006e'
    },
    mint: {
      light: '#77f9ae',
      main: '#56f89a',
      dark: '#3cad6b'
    }
  },
  typography: {
    useNextVariants: true,
    fontFamily: 'Open Sans, Arial, sans-serif',
    fontWeightMedium: 600,
    h1: {
      color: '#000',
      fontFamily: 'Bitter,serif',
      fontSize: '2.5rem',
      fontWeight: 700,
      letterSpacing: 'normal',
      lineHeight: 'normal'
    },
    h2: {
      color: '#000',
      fontFamily: 'Bitter,serif',
      fontSize: '1.8rem',
      fontWeight: 700,
      letterSpacing: 'normal',
      lineHeight: 'normal'
    },
    h3: {
      color: '#000',
      fontFamily: 'Bitter,serif',
      fontSize: '1.4rem',
      fontWeight: 700,
      letterSpacing: 'normal',
      lineHeight: 'normal'
    },
    h4: {
      color: '#000',
      fontFamily: 'Bitter,serif',
      fontSize: '1.2rem',
      fontWeight: 700,
      letterSpacing: 'normal',
      lineHeight: 'normal'
    },
    h5: {
      color: '#000',
      fontFamily: 'Bitter,serif',
      fontSize: '1rem',
      fontWeight: 700,
      letterSpacing: 'normal',
      lineHeight: 'normal'
    },
    h6: {
      color: '#000',
      fontFamily: 'Bitter,serif',
      fontSize: '0.8rem',
      fontWeight: 700,
      letterSpacing: 'normal',
      lineHeight: 'normal'
    },
    body1: {
      color: '#000',
      fontSize: '0.8rem',
      fontWeight: 300,
      letterSpacing: 'normal',
      lineHeight: '1.35em'
    },
    body2: {
      color: '#000',
      fontSize: '1rem',
      fontWeight: 300,
      letterSpacing: 'normal',
      lineHeight: '1.35em'
    }
  },
  spacing: {
    container: 21
  }
});

var styles = function styles(theme) {
  return {
    root: {
      backgroundColor: theme.palette.primary.main,
      border: 0,
      borderRadius: theme.shape.borderRadius,
      boxShadow: 'none',
      display: 'inline-block',
      fontFamily: theme.typography.fontFamily,
      fontSize: '0.8rem',
      fontWeight: 800,
      padding: '14px 21px',
      textTransform: 'uppercase',
      '&:hover': {
        backgroundColor: theme.palette.primary.light,
        cursor: 'pointer'
      }
    }
  };
};

var PrimaryButton = function PrimaryButton(props) {
  var classes = props.classes,
      tag = props.tag;
  var TagName = tag;
  return React.createElement(TagName, _extends({
    className: classes.root
  }, props));
};

PrimaryButton.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  classes: PropTypes.shape().isRequired
};
var PrimaryButton$1 = withStyles(styles)(PrimaryButton);

var styles$1 = function styles(theme) {
  return {
    root: {
      fontFamily: 'Open Sans',
      fontSize: '0.8rem',
      fontWeight: 300,
      textDecoration: 'inherit'
    },
    default: {
      borderBottom: 'solid 1px #000',
      color: 'inherit',
      '&:hover': {
        color: '#404040'
      }
    },
    primary: {
      borderBottom: "solid 1px " + theme.palette.primary.main,
      color: theme.palette.primary.main,
      '&:hover': {
        color: theme.palette.primary.light
      }
    },
    magenta: {
      borderBottom: "solid 1px " + theme.palette.magenta.main,
      color: theme.palette.magenta.main,
      '&:hover': {
        color: theme.palette.magenta.light
      }
    },
    mint: {
      borderBottom: "solid 1px " + theme.palette.mint.main,
      color: theme.palette.mint.main,
      '&:hover': {
        color: theme.palette.mint.light
      }
    }
  };
};

function Link(props) {
  var _classNames, _classNames2, _classNames3, _classNames4;

  var children = props.children,
      classes = props.classes,
      className = props.className,
      variant = props.variant,
      other = _objectWithoutPropertiesLoose(props, ["children", "classes", "className", "variant"]);

  return React.createElement("a", _extends({
    className: classNames(classes.root, (_classNames = {}, _classNames[classes.default] = variant === 'default', _classNames), (_classNames2 = {}, _classNames2[classes.primary] = variant === 'primary', _classNames2), (_classNames3 = {}, _classNames3[classes.magenta] = variant === 'magenta', _classNames3), (_classNames4 = {}, _classNames4[classes.mint] = variant === 'mint', _classNames4), className)
  }, other), children);
}

Link.defaultProps = {
  className: '',
  variant: 'default'
};
Link.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.shape().isRequired,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'primary', 'magenta', 'mint'])
};
var Link$1 = withStyles(styles$1)(Link);

var Header = function Header(props) {
  var classes = props.classes,
      image = props.image,
      linkRight = props.linkRight,
      linkLeft = props.linkLeft;
  return React.createElement(Grid, {
    className: classes.root,
    container: true,
    direction: "row",
    justify: "space-around",
    component: "header"
  }, React.createElement(Grid, {
    container: true,
    justify: "space-between",
    className: classes.header
  }, React.createElement(Grid, {
    item: true,
    md: 4,
    className: classes.linkLeft
  }, linkLeft), React.createElement(Grid, {
    item: true,
    md: 4,
    className: classes.image
  }, React.createElement("img", {
    src: image,
    alt: "Laboratoria"
  })), React.createElement(Grid, {
    item: true,
    md: 4,
    className: classes.linkRight
  }, linkRight)));
};

Header.defaultProps = {
  linkLeft: [],
  linkRight: []
};
Header.propTypes = {
  classes: PropTypes.shape().isRequired,
  image: PropTypes.string.isRequired,
  linkLeft: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  linkRight: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

var styles$2 = {
  root: {
    boxShadow: '1px 1px 0 1px #e1e1e1'
  },
  card: {
    display: 'flex',
    alignItems: 'center',
    padding: '21px'
  },
  thumbnail: {
    width: '62px',
    height: '62px',
    position: 'relative'
  },
  description: {
    flexGrow: 1,
    paddingTop: 0,
    paddingBottom: 0
  }
};

var CardMediaGitHub = function CardMediaGitHub(props) {
  var classes = props.classes,
      action = props.action,
      title = props.title,
      subtitle = props.subtitle,
      thumbnail = props.thumbnail;
  return React.createElement(Card, {
    className: classes.card,
    classes: {
      root: classes.root
    }
  }, React.createElement("div", {
    className: classes.thumbnail
  }, thumbnail), React.createElement(CardContent, {
    className: classes.description
  }, React.createElement(Typography, {
    variant: "h5",
    component: "h2",
    gutterBottom: true
  }, title), React.createElement(Typography, {
    variant: "body1"
  }, subtitle)), React.createElement(CardActions, {
    disableActionSpacing: true
  }, action));
};

CardMediaGitHub.propTypes = {
  classes: PropTypes.shape().isRequired,
  title: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  subtitle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  thumbnail: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  action: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired
};
var CardMediaGitHub$1 = withStyles(styles$2)(CardMediaGitHub);

var peru = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGRjRCNTU7IiBkPSJNMzguMzQ1LDg4LjI3M0MxNy4xNjcsODguMjczLDAsMTA1LjQ0LDAsMTI2LjYxOHYyNTguNzU5YzAsMjEuMTc3LDE3LjE2NywzOC4zNDUsMzguMzQ1LDM4LjM0NQ0KCWgxMzIuMzIyVjg4LjI3M0gzOC4zNDV6Ii8+DQo8cmVjdCB4PSIxNzAuNjciIHk9Ijg4LjI3NyIgc3R5bGU9ImZpbGw6I0Y1RjVGNTsiIHdpZHRoPSIxNzAuNjciIGhlaWdodD0iMzM1LjQ1Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojRkY0QjU1OyIgZD0iTTQ3My42NTUsODguMjczSDM0MS4zMzN2MzM1LjQ0OGgxMzIuMzIyYzIxLjE3NywwLDM4LjM0NS0xNy4xNjcsMzguMzQ1LTM4LjM0NVYxMjYuNjE4DQoJQzUxMiwxMDUuNDQsNDk0LjgzMyw4OC4yNzMsNDczLjY1NSw4OC4yNzN6Ii8+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4=';

var mexico = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIHN0eWxlPSJmaWxsOiM3M0FGMDA7IiBkPSJNMzguMzQ1LDg4LjI3M0MxNy4xNjcsODguMjczLDAsMTA1LjQ0LDAsMTI2LjYxOHYyNTguNzU5YzAsMjEuMTc3LDE3LjE2NywzOC4zNDUsMzguMzQ1LDM4LjM0NQ0KCWgxMzIuMzIyVjg4LjI3M0gzOC4zNDV6Ii8+DQo8cmVjdCB4PSIxNzAuNjciIHk9Ijg4LjI3NyIgc3R5bGU9ImZpbGw6I0Y1RjVGNTsiIHdpZHRoPSIxNzAuNjciIGhlaWdodD0iMzM1LjQ1Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojRkY0QjU1OyIgZD0iTTQ3My42NTUsODguMjczSDM0MS4zMzN2MzM1LjQ0OGgxMzIuMzIyYzIxLjE3NywwLDM4LjM0NS0xNy4xNjcsMzguMzQ1LTM4LjM0NVYxMjYuNjE4DQoJQzUxMiwxMDUuNDQsNDk0LjgzMyw4OC4yNzMsNDczLjY1NSw4OC4yNzN6Ii8+DQo8cG9seWdvbiBzdHlsZT0iZmlsbDojRkZEMjUwOyIgcG9pbnRzPSIyNzEuMjI1LDI2My44OTMgMjU2LDI3MS41MDYgMjU2LDI3OS4xMTkgMjYzLjYxMywyNzkuMTE5ICIvPg0KPGc+DQoJPHBhdGggc3R5bGU9ImZpbGw6IzAwQzNBMDsiIGQ9Ik0yNTYsMjk4LjE1MWMtMi4xMDQsMC0zLjgwNy0xLjcwMy0zLjgwNy0zLjgwNlYyNzkuMTJjMC0yLjEwNCwxLjcwMy0zLjgwNywzLjgwNy0zLjgwNw0KCQlzMy44MDYsMS43MDMsMy44MDYsMy44MDd2MTUuMjI1QzI1OS44MDYsMjk2LjQ0OCwyNTguMTA0LDI5OC4xNTEsMjU2LDI5OC4xNTF6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6IzAwQzNBMDsiIGQ9Ik0yNTYsMjgyLjkyNmMtMTQuOTUxLDAtMjkuMzg4LTUuNzY5LTQwLjY1NC0xNi4yNDRjLTEuNTM5LTEuNDMxLTEuNjI4LTMuODQtMC4xOTYtNS4zNzgNCgkJYzEuNDQyLTEuNTM1LDMuODQ4LTEuNjE3LDUuMzc5LTAuMTk4YzkuODU0LDkuMTYzLDIyLjQ1MiwxNC4yMDcsMzUuNDczLDE0LjIwN2MxMy4wMjEsMCwyNS42MTktNS4wNDQsMzUuNDczLTE0LjIwNw0KCQljMS41MzUtMS40MjMsMy45NC0xLjM0NSw1LjM3OCwwLjE5OGMxLjQzMSwxLjUzOSwxLjM0MiwzLjk0Ny0wLjE5Niw1LjM3OEMyODUuMzg4LDI3Ny4xNTcsMjcwLjk1MSwyODIuOTI2LDI1NiwyODIuOTI2eiIvPg0KPC9nPg0KPHBhdGggc3R5bGU9ImZpbGw6IzAwQUFEQzsiIGQ9Ik0yNTYsMjk4LjE1MWMtOS43NTgsMC0xOS4yMS0yLjg1MS0yNy4zMzYtOC4yNDhsNC4yMTUtNi4zNDJjMTMuNzM5LDkuMTI5LDMyLjUwMyw5LjEyOSw0Ni4yNDEsMA0KCWw0LjIxNSw2LjM0MkMyNzUuMjEsMjk1LjMsMjY1Ljc1OCwyOTguMTUxLDI1NiwyOTguMTUxeiIvPg0KPHBvbHlnb24gc3R5bGU9ImZpbGw6IzczMkQzNzsiIHBvaW50cz0iMjQ5Ljk3MywyNDYuNzY0IDI0MS41NjgsMjU5Ljc3IDI0MC4xNCwyNjQuMDUyIDI2Mi4wMjcsMjU4Ljk3NyAiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNBQUQyNjQ7IiBkPSJNMjMyLjcwNSwyNjguMjM1Yy0xMC4wNjIsMC0yMi4xNC04LjQ2OC0yNS4zNDQtMjcuMzM2bDcuNTA5LTEuMjcxDQoJYzIuNjYyLDE1LjY5LDEyLjMxNiwyMS4wMDUsMTguMTEsMjAuOTkxYzEuNzc3LTAuMDQ5LDMuNjMxLTAuNjYyLDMuNzc3LTEuOTE4YzAuMTcxLTEuNTAyLDAuMjEyLTEuODU4LTMuNzY5LTMuMjA0DQoJYy0yLjE2NC0wLjczMy00LjYxNy0xLjU2MS02LjMzOC0zLjUzMWMtNi45NjMtNy45NTEsMi40NjQtMTYuMzY2LDYuOTkzLTIwLjQxYzAuNzk5LTAuNzE0LDEuMTMtMS4zMiwxLjA0NS0xLjU1DQoJYy0wLjI0OS0wLjY1MS0xLjc0My0xLjYzNS0zLjQyNy0xLjYzNWMtNC44MzYsMC04LjUwNS0yLjczMi05LjU3MS03LjEyNmMtMS4xMDgtNC41NSwwLjk4NS05LjM0NSw0Ljk3LTExLjQwNGwzLjQ5NSw2Ljc2NQ0KCWMtMC45MzQsMC40ODMtMS4zMDQsMS44NTgtMS4wNjcsMi44NGMwLjA5MywwLjM5NCwwLjMyLDEuMzEyLDIuMTc1LDEuMzEyYzQuNjYxLDAsOS4wOTYsMi43NTEsMTAuNTM4LDYuNTM1DQoJYzAuNjE3LDEuNjEzLDEuNTQ2LDUuODA2LTMuMDg1LDkuOTQzYy01LDQuNDY1LTcuOTkyLDcuODI1LTYuMzM0LDkuNzE3YzAuMzc1LDAuNDI3LDEuOTg1LDAuOTc0LDMuMDQ4LDEuMzMxDQoJYzMuNDI3LDEuMTYsOS44MDYsMy4zMTYsOC44OTIsMTEuMjg5Yy0wLjU3Myw1LjAxNC01LjA0OCw4LjQ5My0xMS4xMjksOC42NThDMjMzLjAyOCwyNjguMjMxLDIzMi44NjQsMjY4LjIzNSwyMzIuNzA1LDI2OC4yMzV6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojODc0MTUwOyIgZD0iTTI2My42MTMsMjI1LjgzYzAsMCw3LjYxMy0xNS4yMjUtNy42MTMtMjIuODM4YzAsMCw1My4yODktNy42MTMsNDUuNjc2LDYwLjkwM2wtMC4wMDMtMC4wMDMNCgljLTQuOTk2LTMuOTk3LTEyLjQxNC0xMS4zMDItMTUuMDYzLTE3LjEyNmwtMjIuOTk3LTEzLjMyM1YyMjUuODNMMjYzLjYxMywyMjUuODN6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojNzMyRDM3OyIgZD0iTTI1NiwyNDEuMDU1bDM4LjA2MywyMi44MzhjMCwwLDAsMC0xNS4yMjUsNy42MTNMMjU2LDI0OC42NjhWMjQxLjA1NXoiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiM3ODNDNDY7IiBkPSJNMjQwLjc3NSwyMTguMjE3TDI0MC43NzUsMjE4LjIxN2M0LjIwNCwwLDcuNjEzLDMuNDA5LDcuNjEzLDcuNjEzbC0wLjAwOCwwLjAwOQ0KCWMtNC41NDIsNC41NDItNS42NjcsMTEuNDc5LTIuNzk1LDE3LjIyNGwxLjcyLDMuNDQxYzAuNzE3LDEuNDM0LDEuNjYxLDIuNzQ0LDIuNzk1LDMuODc4bDIxLjEyNiwyMS4xMjd2LTEwLjUyMQ0KCWMwLTEzLjEwNy0zLjA1Mi0yNi4wMzQtOC45MTMtMzcuNzU3bDAsMGMtMy44NjktNy43MzctMTEuNzc3LTEyLjYyNS0yMC40MjctMTIuNjI1aC0xLjExMUwyNDAuNzc1LDIxOC4yMTdMMjQwLjc3NSwyMTguMjE3eiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6I0ZGRDI1MDsiIGQ9Ik0yNDAuNzc1LDIxMC42MDRsLTcuNjEzLDcuNjEzdjcuNjEzYzAsMCw5LjA1Ni00LjU5MSwxMi4xMDgtNi4wNTQNCgljMi4xMzMtMS4wMjIsMS43NDUtMy40MzksMC41MjEtNC42MDRDMjQ0LjgzOCwyMTQuMjY2LDI0MC43NzUsMjEwLjYwNCwyNDAuNzc1LDIxMC42MDR6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojQUFEMjY0OyIgZD0iTTI1NiwzMTMuMzc2Yy0zNS42ODEsMC02NC43MDgtMjkuMDI3LTY0LjcwOC02NC43MDhoNy42MTNjMCwzMS40ODUsMjUuNjExLDU3LjA5Niw1Ny4wOTYsNTcuMDk2DQoJczU3LjA5Ni0yNS42MTEsNTcuMDk2LTU3LjA5Nmg3LjYxM0MzMjAuNzA4LDI4NC4zNDksMjkxLjY4MSwzMTMuMzc2LDI1NiwzMTMuMzc2eiIvPg0KPGc+DQoJPGNpcmNsZSBzdHlsZT0iZmlsbDojRkZFMTVBOyIgY3g9IjE5OS4zMiIgY3k9IjI3MS4yNTciIHI9IjUuMTY2Ii8+DQoJPGNpcmNsZSBzdHlsZT0iZmlsbDojRkZFMTVBOyIgY3g9IjIxMC43NCIgY3k9IjI4OS40OTciIHI9IjUuMTY2Ii8+DQoJPGNpcmNsZSBzdHlsZT0iZmlsbDojRkZFMTVBOyIgY3g9IjIyOS4yOSIgY3k9IjMwMy4yODciIHI9IjUuMTY2Ii8+DQoJPGNpcmNsZSBzdHlsZT0iZmlsbDojRkZFMTVBOyIgY3g9IjMxMy4yMyIgY3k9IjI3MS4yNTciIHI9IjUuMTY2Ii8+DQoJPGNpcmNsZSBzdHlsZT0iZmlsbDojRkZFMTVBOyIgY3g9IjMwMS44IiBjeT0iMjg5LjQ5NyIgcj0iNS4xNjYiLz4NCgk8Y2lyY2xlIHN0eWxlPSJmaWxsOiNGRkUxNUE7IiBjeD0iMjgzLjI1IiBjeT0iMzAzLjI4NyIgcj0iNS4xNjYiLz4NCjwvZz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGRkI0Nzg7IiBkPSJNMjU5LjgwNiwzMDEuOTU3aC03LjYxM2MtNC4yMDQsMC03LjYxMy0zLjQwOS03LjYxMy03LjYxM2wwLDBjMC00LjIwNCwzLjQwOS03LjYxMyw3LjYxMy03LjYxMw0KCWg3LjYxM2M0LjIwNCwwLDcuNjEzLDMuNDA5LDcuNjEzLDcuNjEzbDAsMEMyNjcuNDIsMjk4LjU0OSwyNjQuMDExLDMwMS45NTcsMjU5LjgwNiwzMDEuOTU3eiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6IzlCNEI1QTsiIGQ9Ik0yODYuNjEsMjQ2Ljc2NGMyLjUzOCw3LjQ1NCw3LjkyOSwxNC4yNzQsMTUuMDYzLDE3LjEyNmwwLjAwMywwLjAwMw0KCUMzMDkuMjg5LDE5NS4zNzksMjU2LDIwMi45OTIsMjU2LDIwMi45OTJDMjk0LjA2MywyMDIuOTkyLDI4Ni42MSwyNDYuNzY0LDI4Ni42MSwyNDYuNzY0eiIvPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+';

var chile = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGNUY1RjU7IiBkPSJNNDczLjY1NSw4OC4yNzZIMTU4Ljg5N2M0Ljg3NSwwLDguODI4LDMuOTUzLDguODI4LDguODI4djE1MC4wNjljMCw0Ljg3NS0zLjk1Myw4LjgyOC04LjgyOCw4LjgyOA0KCUg1MTJ2LTEyOS4zOEM1MTIsMTA1LjQ0Myw0OTQuODMzLDg4LjI3Niw0NzMuNjU1LDg4LjI3NnoiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGRjRCNTU7IiBkPSJNMTcuNjU1LDI1Nkg4LjgyOEMzLjk1MywyNTYsMCwyNTIuMDQ3LDAsMjQ3LjE3MlYyNTZ2OC44MjhWMzg1LjM4DQoJYzAsMjEuMTc3LDE3LjE2NywzOC4zNDUsMzguMzQ1LDM4LjM0NWg0MzUuMzFjMjEuMTc3LDAsMzguMzQ1LTE3LjE2NywzOC4zNDUtMzguMzQ1VjI1NkgxNTguODk3SDE3LjY1NXoiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiM0MTQ3OUI7IiBkPSJNOC44MjgsMjU2aDguODI4aDE0MS4yNDFjNC44NzUsMCw4LjgyOC0zLjk1Myw4LjgyOC04LjgyOFY5Ny4xMDNjMC00Ljg3NS0zLjk1My04LjgyOC04LjgyOC04LjgyOA0KCUgzOC4zNDVDMTcuMTY3LDg4LjI3NiwwLDEwNS40NDMsMCwxMjYuNjIxdjEyMC41NTJDMCwyNTIuMDQ3LDMuOTUzLDI1Niw4LjgyOCwyNTZ6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojRjVGNUY1OyIgZD0iTTg3LjI2MiwxMzQuNDg3bDguNDE2LDI1LjIzNGwyNi42LDAuMjA2YzMuNDQ0LDAuMDI2LDQuODcyLDQuNDIyLDIuMTAxLDYuNDY3bC0yMS4zOTgsMTUuODAxDQoJbDguMDIzLDI1LjM2MmMxLjAzOCwzLjI4NC0yLjcsNS45OTktNS41MDIsMy45OTdsLTIxLjY0LTE1LjQ2N2wtMjEuNjQxLDE1LjQ2OGMtMi44MDIsMi4wMDMtNi41NC0wLjcxNC01LjUwMi0zLjk5N2w4LjAyMy0yNS4zNjINCglsLTIxLjM5OC0xNS44MDFjLTIuNzcxLTIuMDQ2LTEuMzQyLTYuNDQxLDIuMTAxLTYuNDY3bDI2LjYtMC4yMDZsOC40MTYtMjUuMjM0QzgxLjU1MSwxMzEuMjIsODYuMTczLDEzMS4yMiw4Ny4yNjIsMTM0LjQ4N3oiLz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg==';

var brazil = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIHN0eWxlPSJmaWxsOiM3M0FGMDA7IiBkPSJNNDczLjY1NSw4OC4yNzVIMzguMzQ1QzE3LjE2Nyw4OC4yNzUsMCwxMDUuNDQyLDAsMTI2LjYyVjM4NS4zOA0KCWMwLDIxLjE3NywxNy4xNjcsMzguMzQ1LDM4LjM0NSwzOC4zNDVoNDM1LjMxYzIxLjE3NywwLDM4LjM0NS0xNy4xNjcsMzguMzQ1LTM4LjM0NVYxMjYuNjINCglDNTEyLDEwNS40NDIsNDk0LjgzMyw4OC4yNzUsNDczLjY1NSw4OC4yNzV6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojRkZFMTVBOyIgZD0iTTI1MS40MSwxMzUuMjA3TDY1LjM1NCwyNDguNDU4Yy01LjY1MSwzLjQzOS01LjY1MSwxMS42NDEsMCwxNS4wODFMMjUxLjQxLDM3Ni43OTINCgljMi44MTksMS43MTYsNi4zNiwxLjcxNiw5LjE4LDBsMTg2LjA1Ni0xMTMuMjUyYzUuNjUxLTMuNDM5LDUuNjUxLTExLjY0MSwwLTE1LjA4MUwyNjAuNTksMTM1LjIwNw0KCUMyNTcuNzcxLDEzMy40OTIsMjU0LjIyOSwxMzMuNDkyLDI1MS40MSwxMzUuMjA3eiIvPg0KPGNpcmNsZSBzdHlsZT0iZmlsbDojNDE0NzlCOyIgY3g9IjI1NiIgY3k9IjI1NS45OTkiIHI9IjcwLjYyIi8+DQo8Zz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojRjVGNUY1OyIgZD0iTTE5NS40LDIxOS44NzJjLTMuMzMyLDUuNTc4LTUuOTA1LDExLjY0LTcuNjA1LDE4LjA3N2MzOS4xNDktMi45NDYsOTcuMDYyLDguMDA2LDEzMy45MjIsNDMuNzczDQoJCWMyLjQwNi02LjE0MSwzLjk5NS0xMi42ODMsNC41OS0xOS41MjJDMjg4LjI0NywyMzAuMTY3LDIzNS42MjgsMjE4Ljc3NiwxOTUuNCwyMTkuODcyeiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNGNUY1RjU7IiBkPSJNMjU4LjkyNSwyODAuMDk5bDEuODgsNS42MzhsNS45NDMsMC4wNDZjMC43NjksMC4wMDYsMS4wODgsMC45ODgsMC40NjksMS40NDVsLTQuNzgxLDMuNTMxDQoJCWwxLjc5Myw1LjY2NmMwLjIzMiwwLjczNC0wLjYwNCwxLjM0MS0xLjIyOSwwLjg5M2wtNC44MzUtMy40NTZsLTQuODM1LDMuNDU2Yy0wLjYyNiwwLjQ0Ny0xLjQ2MS0wLjE1OS0xLjIyOS0wLjg5M2wxLjc5My01LjY2Ng0KCQlsLTQuNzgxLTMuNTMxYy0wLjYxOS0wLjQ1Ny0wLjMtMS40MzksMC40NjktMS40NDVsNS45NDMtMC4wNDZsMS44OC01LjYzOEMyNTcuNjQ5LDI3OS4zNjgsMjU4LjY4MSwyNzkuMzY4LDI1OC45MjUsMjgwLjA5OXoiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojRjVGNUY1OyIgZD0iTTI4Mi4wMjQsMjk0LjY4M2wwLjgwOSwyLjQyNmwyLjU1OCwwLjAyYzAuMzMxLDAuMDAyLDAuNDY4LDAuNDI1LDAuMjAyLDAuNjIybC0yLjA1OCwxLjUxOQ0KCQlsMC43NzEsMi40MzljMC4wOTksMC4zMTYtMC4yNTksMC41NzctMC41MywwLjM4NGwtMi4wODEtMS40ODdsLTIuMDgxLDEuNDg3Yy0wLjI2OSwwLjE5My0wLjYyOS0wLjA2OC0wLjUyOS0wLjM4NGwwLjc3MS0yLjQzOQ0KCQlsLTIuMDU4LTEuNTE5Yy0wLjI2Ny0wLjE5Ni0wLjEyOS0wLjYxOSwwLjIwMi0wLjYyMmwyLjU1OC0wLjAybDAuODA5LTIuNDI2QzI4MS40NzQsMjk0LjM2OCwyODEuOTE5LDI5NC4zNjgsMjgyLjAyNCwyOTQuNjgzeiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNGNUY1RjU7IiBkPSJNMjQ4LjkzOCwyNjkuMzg4bDAuODA5LDIuNDI2bDIuNTU4LDAuMDJjMC4zMzEsMC4wMDIsMC40NjksMC40MjUsMC4yMDIsMC42MjJsLTIuMDU4LDEuNTE5DQoJCWwwLjc3MSwyLjQzOWMwLjA5OSwwLjMxNi0wLjI1OSwwLjU3Ny0wLjUyOSwwLjM4NGwtMi4wODEtMS40ODdsLTIuMDgxLDEuNDg3Yy0wLjI2OSwwLjE5My0wLjYyOS0wLjA2OC0wLjUzLTAuMzg0bDAuNzcxLTIuNDM5DQoJCWwtMi4wNTgtMS41MTljLTAuMjY2LTAuMTk2LTAuMTI5LTAuNjE5LDAuMjAyLTAuNjIybDIuNTU4LTAuMDJsMC44MDktMi40MjZDMjQ4LjM4OCwyNjkuMDc2LDI0OC44MzMsMjY5LjA3NiwyNDguOTM4LDI2OS4zODh6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0Y1RjVGNTsiIGQ9Ik0yMDQuMTMsMjY2LjQ0NmwwLjgwOSwyLjQyNmwyLjU1OCwwLjAyYzAuMzMxLDAuMDAyLDAuNDY5LDAuNDI1LDAuMjAyLDAuNjIybC0yLjA1OCwxLjUxOQ0KCQlsMC43NzEsMi40MzljMC4wOTksMC4zMTYtMC4yNTksMC41NzctMC41MywwLjM4NGwtMi4wODEtMS40ODdsLTIuMDgxLDEuNDg3Yy0wLjI2OSwwLjE5Mi0wLjYyOS0wLjA2OC0wLjUyOS0wLjM4NGwwLjc3MS0yLjQzOQ0KCQlsLTIuMDU4LTEuNTE5Yy0wLjI2Ny0wLjE5Ni0wLjEyOS0wLjYxOSwwLjIwMi0wLjYyMmwyLjU1OC0wLjAybDAuODA5LTIuNDI2QzIwMy41ODEsMjY2LjEzMywyMDQuMDI1LDI2Ni4xMzMsMjA0LjEzLDI2Ni40NDZ6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0Y1RjVGNTsiIGQ9Ik0yNDEuNjE0LDI5My44NDZsMC44MDksMi40MjZsMi41NTgsMC4wMmMwLjMzMSwwLjAwMiwwLjQ2OSwwLjQyNSwwLjIwMiwwLjYyMmwtMi4wNTgsMS41MTkNCgkJbDAuNzcxLDIuNDM5YzAuMDk5LDAuMzE2LTAuMjU5LDAuNTc3LTAuNTI5LDAuMzg0bC0yLjA4MS0xLjQ4N2wtMi4wODEsMS40ODdjLTAuMjY5LDAuMTkzLTAuNjI5LTAuMDY4LTAuNTMtMC4zODRsMC43NzEtMi40MzkNCgkJbC0yLjA1OC0xLjUxOWMtMC4yNjYtMC4xOTYtMC4xMjktMC42MTksMC4yMDItMC42MjJsMi41NTgtMC4wMmwwLjgwOS0yLjQyNkMyNDEuMDY1LDI5My41MzIsMjQxLjUxLDI5My41MzIsMjQxLjYxNCwyOTMuODQ2eiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNGNUY1RjU7IiBkPSJNMjIwLjk5LDI2NC43NTNsMC42NjIsMS45ODRsMi4wOTIsMC4wMTdjMC4yNywwLjAwMiwwLjM4MywwLjM0OCwwLjE2NiwwLjUwOWwtMS42ODMsMS4yNDINCgkJbDAuNjMxLDEuOTk0YzAuMDgyLDAuMjU4LTAuMjEyLDAuNDcyLTAuNDMzLDAuMzE0bC0xLjcwMi0xLjIxNmwtMS43MDIsMS4yMTZjLTAuMjIxLDAuMTU4LTAuNTE0LTAuMDU2LTAuNDMzLTAuMzE0bDAuNjMxLTEuOTk0DQoJCWwtMS42ODMtMS4yNDJjLTAuMjE3LTAuMTYxLTAuMTA2LTAuNTA3LDAuMTY2LTAuNTA5bDIuMDkyLTAuMDE3bDAuNjYyLTEuOTg0QzIyMC41NDEsMjY0LjQ5NywyMjAuOTA0LDI2NC40OTcsMjIwLjk5LDI2NC43NTN6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0Y1RjVGNTsiIGQ9Ik0yODMuODE5LDIyMy43OTRsMC44MjgsMi40ODJsMi42MTYsMC4wMmMwLjMzOSwwLjAwMiwwLjQ3OSwwLjQzNSwwLjIwNiwwLjYzN2wtMi4xMDQsMS41NTQNCgkJbDAuNzg5LDIuNDk1YzAuMTAzLDAuMzIzLTAuMjY2LDAuNTktMC41NDEsMC4zOTNsLTIuMTI5LTEuNTIybC0yLjEyOSwxLjUyMmMtMC4yNzYsMC4xOTgtMC42NDMtMC4wNzEtMC41NDEtMC4zOTNsMC43ODktMi40OTUNCgkJbC0yLjEwNC0xLjU1NGMtMC4yNzMtMC4yMDEtMC4xMzItMC42MzMsMC4yMDYtMC42MzdsMi42MTYtMC4wMmwwLjgyOC0yLjQ4MkMyODMuMjU3LDIyMy40NywyODMuNzEyLDIyMy40NywyODMuODE5LDIyMy43OTR6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0Y1RjVGNTsiIGQ9Ik0yMDcuMDEyLDI1Mi42MTVsMC42NjIsMS45ODRsMi4wOTIsMC4wMTdjMC4yNywwLjAwMiwwLjM4MywwLjM0OCwwLjE2NiwwLjUwOWwtMS42ODMsMS4yNDINCgkJbDAuNjMxLDEuOTk0YzAuMDgyLDAuMjU4LTAuMjEyLDAuNDcyLTAuNDMzLDAuMzE0bC0xLjcwMi0xLjIxNmwtMS43MDIsMS4yMTZjLTAuMjIxLDAuMTU4LTAuNTE0LTAuMDU2LTAuNDMzLTAuMzE0bDAuNjMxLTEuOTk0DQoJCWwtMS42ODMtMS4yNDJjLTAuMjE4LTAuMTYxLTAuMTA2LTAuNTA2LDAuMTY2LTAuNTA5bDIuMDkyLTAuMDE3bDAuNjYyLTEuOTg0QzIwNi41NjMsMjUyLjM1OCwyMDYuOTI2LDI1Mi4zNTgsMjA3LjAxMiwyNTIuNjE1eiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNGNUY1RjU7IiBkPSJNMjE3LjExMiwyODAuNTgxbDEuMDAyLDMuMDA1bDMuMTY4LDAuMDI0YzAuNDEsMC4wMDMsMC41OCwwLjUyNiwwLjI1LDAuNzdsLTIuNTQ5LDEuODgybDAuOTU2LDMuMDINCgkJYzAuMTI0LDAuMzkxLTAuMzIxLDAuNzE1LTAuNjU1LDAuNDc2bC0yLjU3OC0xLjg0M2wtMi41NzgsMS44NDNjLTAuMzMzLDAuMjM4LTAuNzc5LTAuMDg1LTAuNjU1LTAuNDc2bDAuOTU2LTMuMDJsLTIuNTQ5LTEuODgyDQoJCWMtMC4zMy0wLjI0NC0wLjE2LTAuNzY3LDAuMjUtMC43N2wzLjE2OC0wLjAyNGwxLjAwMi0zLjAwNUMyMTYuNDMzLDI4MC4xOTEsMjE2Ljk4MywyODAuMTkxLDIxNy4xMTIsMjgwLjU4MXoiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojRjVGNUY1OyIgZD0iTTI5NC45MDMsMjk1LjMxM2wwLjYzMSwxLjg5MWwxLjk5MywwLjAxNWMwLjI1OCwwLjAwMiwwLjM2NSwwLjMzMSwwLjE1OCwwLjQ4NGwtMS42MDMsMS4xODQNCgkJbDAuNjAxLDEuOWMwLjA3NywwLjI0Ni0wLjIwMiwwLjQ0OS0wLjQxMywwLjI5OWwtMS42MjEtMS4xNTlsLTEuNjIyLDEuMTU5Yy0wLjIxLDAuMTUtMC40OS0wLjA1My0wLjQxMy0wLjI5OWwwLjYwMS0xLjkNCgkJbC0xLjYwMy0xLjE4NGMtMC4yMDctMC4xNTMtMC4xLTAuNDgyLDAuMTU4LTAuNDg0bDEuOTkzLTAuMDE1bDAuNjMtMS44OTFDMjk0LjQ3NSwyOTUuMDY4LDI5NC44MjIsMjk1LjA2OCwyOTQuOTAzLDI5NS4zMTN6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0Y1RjVGNTsiIGQ9Ik0zMDEuODc3LDI4MC44ODNsMC44MDksMi40MjZsMi41NTgsMC4wMmMwLjMzMSwwLjAwMiwwLjQ2OSwwLjQyNSwwLjIwMiwwLjYyMmwtMi4wNTgsMS41MTkNCgkJbDAuNzcxLDIuNDM5YzAuMDk5LDAuMzE2LTAuMjU5LDAuNTc3LTAuNTI5LDAuMzg0bC0yLjA4MS0xLjQ4N2wtMi4wODEsMS40ODdjLTAuMjY5LDAuMTkzLTAuNjI5LTAuMDY4LTAuNTI5LTAuMzg0bDAuNzcxLTIuNDM5DQoJCWwtMi4wNTgtMS41MTljLTAuMjY2LTAuMTk2LTAuMTI5LTAuNjE5LDAuMjAyLTAuNjIybDIuNTU4LTAuMDJsMC44MDktMi40MjZDMzAxLjMyNywyODAuNTY4LDMwMS43NzIsMjgwLjU2OCwzMDEuODc3LDI4MC44ODN6Ii8+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4=';

// São Paulo

export { theme as Theme, PrimaryButton$1 as Button, Link$1 as Link, Header, CardMediaGitHub$1 as CardMediaGitHub, peru as aqp, peru as lim, mexico as gdl, mexico as cdmx, chile as scl, brazil as sp };
//# sourceMappingURL=laboratoria-ui.esm.js.map
