import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import clsx from 'clsx';
import withStyles from '@material-ui/core/styles/withStyles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import PersonIcon from '@material-ui/icons/Person';
import DescriptionIcon from '@material-ui/icons/Description';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { logoWhite, isotypeWhite } from '../SVG/logos';

const drawerWidth = '25%';

const styles = theme => ({
  active: {
    opacity: 1,
  },
  appBar: {
    backgroundColor: 'transparent',
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    backgroundColor: 'transparent',
    width: `calc(100% - ${drawerWidth})`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  avatar: {
    width: `${theme.spacing.unit * 5}px`,
    height: `${theme.spacing.unit * 5}px`,
    borderRadius: 0,
    background: '#3ED58C',
    color: theme.palette.common.black,
  },
  bottom: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  content: {
    padding: `${theme.spacing.unit * 3}px`,
  },
  divider: {
    backgroundColor: theme.palette.background.default,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `${theme.spacing.unit * 7}px`,
    [theme.breakpoints.up('sm')]: {
      width: `${theme.spacing.unit * 9}px`,
    },
  },
  hide: {
    display: 'none',
  },
  item: {
    opacity: 0.7,
  },
  list: {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.common.black,
    height: '100%',
  },
  listItemIcon: {
    color: theme.palette.common.white,
    marginLeft: theme.spacing.unit,
    opacity: 'inherit',
  },
  menuButton: {
    marginLeft: `${theme.spacing.unit * 8}px`,
  },
  menuButtonOpen: {
    marginLeft: `${theme.spacing.unit * 1}px`,
  },
  primary: {
    color: 'inherit',
    fontWeight: 600,
    fontSize: '18px',
  },
  profileBadge: {
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 2}px`,
    backgroundColor: theme.palette.background.secondary,
  },
  root: {
    display: 'flex',
  },
  signoutBtn: {
    backgroundColor: theme.palette.common.black,
    minHeight: '90px',
  },
  secondary: {
    color: 'inherit',
    fontWeight: 'normal',
    fontSize: '14px',
  },
  toolbar: {
    background: theme.palette.common.black,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: `${theme.spacing.unit * 2}`,
    ...theme.mixins.toolbar,
  },
  
});

const nameToInitials = 'NA';
  const name = 'Nombre Apellido';
  const email = 'nombre.apellido@dominio.la';
  const itemsArray = ['Vacantes', 'Talento'];
  const iconsArray = [<DescriptionIcon />, <PersonIcon />];


const SideBar = (props, theme) => {
  const [open, setOpen] = React.useState(false);
  
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={props.classes.root}>
      <AppBar
        position="fixed"
        elevation={0}
        className={clsx(props.classes.appBar, {
          [props.classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={open ? handleDrawerClose : handleDrawerOpen }
            edge="start"
            className={clsx(props.classes.menuButton, {
              [props.classes.menuButtonOpen]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(props.classes.drawer, {
          [props.classes.drawerOpen]: open,
          [props.classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [props.classes.drawerOpen]: open,
            [props.classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={props.classes.toolbar}>
          { open ? <img src={logoWhite} alt="Logo" width="75%" /> : <img src={isotypeWhite} alt="Isotipo" width="75%" /> }
        </div>
        <Divider />
        <List className={props.classes.list}>
          <ListItem className={props.classes.profileBadge}>
            <Avatar className={props.classes.avatar} >
              { nameToInitials }
            </Avatar>
            <ListItemText
              classes={{ primary: props.classes.primary, secondary: props.classes.secondary }}
              primary={ name }
              secondary={ email }
            />
          </ListItem>
          <Divider className={props.classes.divider} />
          {itemsArray.map((text, index) => (
            <ListItem
              button
              style={{ maxHeight: '48px', padding: '16px', marginTop: '16px' }}
              key={text}
              onClick
            >
              <ListItemIcon className={props.classes.listItemIcon}>
                {iconsArray[index]}
              </ListItemIcon>
              <ListItemText
                classes={{ primary: props.classes.primary }}
                style={{ paddingLeft: '8px' }}
                primary={text} />
            </ListItem>
          ))}
          <div className={props.classes.bottom}>
            <Divider className={props.classes.divider} />
            <ListItem
              button
              className={props.classes.signoutBtn}
              onClick={() => props.firebase.logout()}
            >
              <ListItemIcon className={props.classes.listItemIcon}>
                <ExitToAppIcon />
              </ListItemIcon>
              <ListItemText
                classes={{ primary: props.classes.primary }}
                primary="Cerrar Sesión"
                style={{ paddingLeft: '8px' }}
              />
            </ListItem> 
          </div> 
        </List>
      </Drawer>
      <main className={props.classes.content}>
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
          facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
          gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
          donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
          Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
          imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
          arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
          donec massa sapien faucibus et molestie ac.
        </Typography>
      </main>
    </div>
  );
}

SideBar.propTypes = {
  auth: PropTypes.shape({
    displayName: PropTypes.string,
    email: PropTypes.string.isRequired,
  }).isRequired,
  classes: PropTypes.shape({
    active: PropTypes.string.isRequired,
    appBar: PropTypes.string.isRequired,
    appBarShift: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    bottom: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    divider: PropTypes.string.isRequired,
    drawer: PropTypes.string.isRequired,
    drawerOpen: PropTypes.string.isRequired,
    drawerClose: PropTypes.string.isRequired,
    hide: PropTypes.string.isRequired,
    item: PropTypes.string.isRequired,
    list: PropTypes.string.isRequired,
    listItemIcon: PropTypes.string.isRequired,
    menuButton: PropTypes.string.isRequired,
    menuButtonOpen: PropTypes.string.isRequired,
    primary: PropTypes.string.isRequired,
    profileBadge: PropTypes.string.isRequired,
    root: PropTypes.string.isRequired,
    signoutBtn: PropTypes.string.isRequired,
    secondary: PropTypes.string.isRequired,
    toolbar: PropTypes.string.isRequired,
  }).isRequired,   
  firebase: PropTypes.shape({
    logout: PropTypes.func.isRequired,
  }).isRequired,
  profile: PropTypes.shape({
    name: PropTypes.string,
    github: PropTypes.string,
    roles: PropTypes.shape({
      admin: PropTypes.bool,
    }),
  }),
};

SideBar.defaultProps = {
  profile: {},
};

export default withStyles(styles)(SideBar);
