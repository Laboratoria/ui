import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import withStyles from '@material-ui/core/styles/withStyles';
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { logoWhite, isotypeWhite } from '../SVG/logos';

const drawerWidth = 300;

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
    height: `${theme.spacing.unit * 5}px`,
    width: `${theme.spacing.unit * 5}px`,
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
      width: (theme.spacing.unit * 9) + 1,
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
  hide: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  list: {
    height: '100%',
  },
  listItem: {
    opacity: 0.7,
    maxHeight: '48px',
    padding: '16px',
    marginTop: '16px',
  },
  'listItem-actived': {
    opacity: 1,
  },
  listItemIcon: {
    color: theme.palette.common.white,
    marginLeft: theme.spacing.unit,
    opacity: 'inherit',
  },
  logout: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  main: {
    flexGrow: 1,
    minHeight: '100vh',
    padding: `0 ${theme.spacing.unit * 15}px`,
    [theme.breakpoints.only('xs')]: {
      padding: `0 ${theme.spacing.unit * 2}px`,
    },
  },
  menuBtn: {
    marginRight: theme.spacing.unit * 2,
    [theme.breakpoints.up('sm')]: {
      marginRight: theme.spacing.unit * 3,
    },
  },
  'menuBtn-close': {
    [theme.breakpoints.up('sm')]: {
      marginLeft: 72,
    },
  },
  primary: {
    color: 'inherit',
    fontWeight: 600,
    fontSize: '18px',
  },
  root: {
    display: 'flex',
    width: '100%',
  },
  secondary: {
    color: 'inherit',
    fontWeight: 'normal',
    fontSize: '14px',
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

const SideBar = (props, theme) => {
  const {
    classes,
    container,
    items,
    logoutItem,
    main,
    user: { name, email },
  } = props;
  const [isOpen, setIsOpen] = React.useState(true);
  const [activedItem, setActivedItem] = React.useState(items[0].id);

  const drawer = (
    <>
      <div className={classes.toolbar}>
        { isOpen
          ? <img src={logoWhite} alt="Logo" width="75%" />
          : <img src={isotypeWhite} alt="Isotipo" width="75%" /> }
      </div>
      <Divider className={classes.divider} />
      <ListItem className={classes.profileBadge}>
        <Avatar className={classes.avatar} >{ nameToInitials(name) }</Avatar>
        <ListItemText
          classes={{ primary: classes.primary, secondary: classes.secondary }}
          primary={ name }
          secondary={ email }
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
            onClick={() => setActivedItem(item.id)}
            selected={activedItem === item.id}
          >
            <ListItemIcon className={classes.listItemIcon}>{item.icon}</ListItemIcon>
            <ListItemText
              classes={{ primary: classes.primary }}
              primary={item.text} />
            {item.id === activedItem && (
              <div
                className={clsx(classes.triangle, {
                  [`${classes['triangle-expanded']}`]: isOpen,
                  [`${classes['triangle-collapsed']}`]: !isOpen,
                })} />
            )}
          </ListItem>
        ))}
        <div className={classes.logout}>
          <Divider className={classes.divider} />
          <ListItem
            button
            className={classes.signOutBtn}
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
        position="fixed"
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
            container={container}
            variant="temporary"
            anchor={'left'}
            open={isOpen}
            onClose={() => setIsOpen(!isOpen)}
            classes={{
              root: classes.hide,
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
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
}

SideBar.propTypes = {
  classes: PropTypes.shape({
    appBar: PropTypes.string.isRequired,
    appBarShift: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    divider: PropTypes.string.isRequired,
    drawer: PropTypes.string.isRequired,
    drawerPaper: PropTypes.string.isRequired,
    hide: PropTypes.string.isRequired,
    list: PropTypes.string.isRequired,
    listItem: PropTypes.string.isRequired,
    'listItem-actived': PropTypes.string.isRequired,
    listItemIcon: PropTypes.string.isRequired,
    logout: PropTypes.string.isRequired,
    main: PropTypes.string.isRequired,
    menuBtn: PropTypes.string.isRequired,
    'menuBtn-close': PropTypes.string.isRequired,
    primary: PropTypes.string.isRequired,
    root: PropTypes.string.isRequired,
    secondary: PropTypes.string.isRequired,
    signOutBtn: PropTypes.string.isRequired,
    toolbar: PropTypes.string.isRequired,
    triangle: PropTypes.string.isRequired,
    'triangle-expanded': PropTypes.string.isRequired,
    'triangle-collapsed': PropTypes.string.isRequired,
  }).isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  logoutItem: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(SideBar);