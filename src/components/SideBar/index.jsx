import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Avatar,
  CssBaseline,
  Divider,
  Drawer,
  Hidden,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  IconButton,
} from '@material-ui/core';

import { logoWhite, isotypeWhite } from '../SVG/logos';

const drawerWidth = 320;

const styles = theme => ({
  appBar: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
    [theme.breakpoints.only('xs')]: {
      zIndex: theme.zIndex.drawer + 1,
    },
    [theme.breakpoints.up('sm')]: {
      transition: theme.transitions.create(['width', 'margin'], {
        duration: theme.transitions.duration.leavingScreen,
        easing: theme.transitions.easing.sharp,
      }),
    },
  },
  appBarShift: {
    backgroundColor: 'transparent',
    [theme.breakpoints.up('sm')]: {
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['width', 'margin'], {
        duration: theme.transitions.duration.enteringScreen,
        easing: theme.transitions.easing.sharp,
      }),
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  avatar: {
    background: '#3ED58C',
    borderRadius: 0,
    color: theme.palette.common.black,
    height: `${theme.spacing(5)}px`,
    width: `${theme.spacing(5)}px`,
  },
  divider: {
    backgroundColor: theme.palette.background.default,
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      flexShrink: 0,
      whiteSpace: 'nowrap',
      width: drawerWidth,
    },
  },
  drawerPaper: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    width: drawerWidth,
  },
  drawerClose: {
    [theme.breakpoints.up('sm')]: {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        duration: theme.transitions.duration.leavingScreen,
        easing: theme.transitions.easing.sharp,
      }),
      width: (theme.spacing(9)) + 1,
    },
  },
  drawerOpen: {
    [theme.breakpoints.up('sm')]: {
      transition: theme.transitions.create('width', {
        duration: theme.transitions.duration.enteringScreen,
        easing: theme.transitions.easing.sharp,
      }),
      width: drawerWidth,
    },
  },
  list: {
    height: '100%',
    paddingTop: theme.spacing(2),
  },
  listItem: {
    opacity: 0.7,
    maxHeight: '48px',
    paddingTop: theme.spacing(2),
    '&:hover': {
      opacity: 1,
    },
  },
  'listItem-actived': {
    opacity: 1,
  },
  listItemIcon: {
    color: 'inherit',
    marginLeft: theme.spacing(1),
  },
  listItemText: {
    paddingLeft: theme.spacing(1),
  },
  logout: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  main: {
    flexGrow: 1,
    minHeight: '100vh',
    padding: `0 ${theme.spacing(15)}px`,
    [theme.breakpoints.only('xs')]: {
      padding: `0 ${theme.spacing(2)}px`,
    },
  },
  menuBtn: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      marginRight: theme.spacing(3),
    },
    [theme.breakpoints.only('xs')]: {
      marginLeft: -theme.spacing(1) * 2,
    },
  },
  'menuBtn-close': {
    [theme.breakpoints.up('sm')]: {
      marginLeft: 72,
    },
  },
  primary: {
    color: 'inherit',
    fontSize: '1rem',
    fontWeight: 500,
    lineHeight: '1.5em',
  },
  profileBadge: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  root: {
    display: 'flex',
    width: '100%',
  },
  secondary: {
    color: 'inherit',
    fontSize: '1rem',
    fontWeight: 100,
    lineHeight: '1.46429em',
  },
  signOutBtn: {
    backgroundColor: theme.palette.common.black,
    minHeight: '90px',
  },
  toolbar: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    ...theme.mixins.toolbar,
    [theme.breakpoints.only('xs')]: {
      maxHeight: 90,
      minHeight: 90,
    },
    [theme.breakpoints.up('sm')]: {
      maxHeight: 90,
      minHeight: 90,
    },
  },
  triangle: {
    width: 0,
    height: 0,
    borderRight: '10px solid #f7f7f7',
    borderTop: '10px solid transparent',
    borderBottom: '10px solid transparent',
    position: 'absolute',
  },
  'triangle-expanded': {
    left: `calc(${drawerWidth}px - 11px)`,
    transition: theme.transitions.create(['right', 'right'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  'triangle-collapsed': {
    left: '62px',
    transition: theme.transitions.create(['left', 'left'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
});

const nameToInitials = (name = '') => name.split(' ').reduce((memo, item) => {
  if (item[0] && memo.length < 3) {
    return memo + item[0].toUpperCase();
  }
  return memo;
}, '');

const SideBar = (props) => {
  const {
    classes,
    currentPath,
    isSelected,
    items,
    logoutItem,
    main,
    user: { name, email },
  } = props;
  const [isOpen, setIsOpen] = React.useState(true);

  const drawer = (
    <>
      <div className={classes.toolbar}>
        { isOpen
          ? <img src={logoWhite} alt="Logo" width="70%" height="85" />
          : <img src={isotypeWhite} alt="Isotipo" width="70%" height="45" /> }
      </div>
      <Divider className={classes.divider} />
      <ListItem className={classes.profileBadge}>
        <Avatar className={classes.avatar}>{ nameToInitials(name) }</Avatar>
        <ListItemText
          classes={{ primary: classes.primary, secondary: classes.secondary }}
          primary={name}
          secondary={email}
          style={{ padding: '0 16px', margin: 0 }}
        />
      </ListItem>
      <Divider className={classes.divider} />
      <List className={classes.list}>
        {items.map(item => (
          <ListItem
            button
            classes={{
              root: classes.listItem,
              selected: classes['listItem-actived'],
            }}
            key={item.id}
            data-test={`item-${item.id}`}
            selected={isSelected(currentPath, item.id)}
          >
            <ListItemIcon className={classes.listItemIcon}>{item.icon}</ListItemIcon>
            <ListItemText
              classes={{ root: classes.listItemText, primary: classes.primary }}
              primary={item.text}
            />
            {isSelected(currentPath, item.id) && (
              <div
                className={clsx(classes.triangle, {
                  [`${classes['triangle-expanded']}`]: true,
                  [`${classes['triangle-collapsed']}`]: false,
                })}
              />
            )}
          </ListItem>
        ))}
        <div className={classes.logout}>
          <Divider className={classes.divider} />
          <ListItem
            button
            className={classes.signOutBtn}
            data-test={`item-${logoutItem.id}`}
            key={logoutItem.id}
            onClick={logoutItem.onClick}
          >
            <ListItemIcon className={classes.listItemIcon}>{logoutItem.icon}</ListItemIcon>
            <ListItemText
              classes={{ primary: classes.primary }}
              primary={logoutItem.text}
              style={{ paddingLeft: '8px' }}
            />
          </ListItem>
        </div>
      </List>
    </>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        className={clsx(classes.appBar, {
          [classes.appBarShift]: isOpen,
        })}
        elevation={0}
        position="absolute"
      >
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            className={clsx(classes.menuBtn, !isOpen && classes['menuBtn-close'])}
            color="inherit"
            edge="start"
            onClick={() => setIsOpen(!isOpen)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Hidden smUp>
        <Drawer
          variant="temporary"
          anchor="left"
          open={!isOpen}
          onClose={() => setIsOpen(!isOpen)}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          onClick={() => setTimeout(() => setIsOpen(!isOpen), 150)}
        >
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden xsDown>
        <Drawer
          classes={{
            root: clsx(classes.drawer, isOpen ? classes.drawerOpen : classes.drawerClose),
            paper: clsx(classes.drawerPaper, {
              [classes.drawerOpen]: isOpen,
              [classes.drawerClose]: !isOpen,
            }),
          }}
          open={isOpen}
          variant="permanent"
        >
          {drawer}
        </Drawer>
      </Hidden>
      <main className={classes.main}>
        <div className={classes.toolbar} />
        {main}
      </main>
    </div>
  );
};

SideBar.propTypes = {
  classes: PropTypes.shape({
    appBar: PropTypes.string.isRequired,
    appBarShift: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    divider: PropTypes.string.isRequired,
    drawer: PropTypes.string.isRequired,
    drawerClose: PropTypes.string.isRequired,
    drawerOpen: PropTypes.string.isRequired,
    drawerPaper: PropTypes.string.isRequired,
    list: PropTypes.string.isRequired,
    listItem: PropTypes.string.isRequired,
    'listItem-actived': PropTypes.string.isRequired,
    listItemIcon: PropTypes.string.isRequired,
    listItemText: PropTypes.string.isRequired,
    logout: PropTypes.string.isRequired,
    main: PropTypes.string.isRequired,
    menuBtn: PropTypes.string.isRequired,
    'menuBtn-close': PropTypes.string.isRequired,
    primary: PropTypes.string.isRequired,
    profileBadge: PropTypes.string.isRequired,
    root: PropTypes.string.isRequired,
    secondary: PropTypes.string.isRequired,
    signOutBtn: PropTypes.string.isRequired,
    toolbar: PropTypes.string.isRequired,
    triangle: PropTypes.string.isRequired,
    'triangle-expanded': PropTypes.string.isRequired,
    'triangle-collapsed': PropTypes.string.isRequired,
  }).isRequired,
  currentPath: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  isSelected: PropTypes.func.isRequired,
  logoutItem: PropTypes.shape({
    id: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
  main: PropTypes.node.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.func.isRequired,
  }).isRequired,
};

export default withStyles(styles)(SideBar);
