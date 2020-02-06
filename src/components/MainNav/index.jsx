import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import classNames from 'classnames';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import DashboardIcon from '@material-ui/icons/Dashboard';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import GroupIcon from '@material-ui/icons/Group';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { logo } from '../SVG/logos';


const styles = theme => ({
  list: {
    width: theme.leftDrawerWidth,
    color: theme.palette.common.white,
    backgroundColor: theme.palette.common.black,
    position: 'static',
    height: 'calc(100% - 180px)',
    overflowY: 'auto',
  },
  logo: {
    height: 20,
    display: 'block',
    margin: 'auto',
    padding: 10,
  },
  profileBadge: {
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 2}px`,
    backgroundColor: theme.palette.background.secondary,
  },
  active: {
    opacity: 1,
  },
  open: {
    right: 0,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  close: {
    left: '62px',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  // bottom: {
  //   position: 'absolute',
  //   bottom: 0,
  //   width: '320px',
  // },
  signoutBtn: {
    backgroundColor: theme.palette.common.black,
    minHeight: '90px',
    padding: theme.spacing.unit * 2,
    borderTop: '1px solid #f1f1f1',
  },
  divider: {
    backgroundColor: theme.palette.background.default,
  },
  listItemIcon: {
    color: theme.palette.common.white,
    marginLeft: theme.spacing.unit,
    opacity: 'inherit',
  },
  avatar: {
    width: `${theme.spacing.unit * 5}px`,
    height: `${theme.spacing.unit * 5}px`,
    borderRadius: 0,
    background: '#56f89a',
    color: theme.palette.primary.secondary,
  },
  primary: {
    color: 'inherit',
    fontWeight: 500,
  },
  root: {
    paddingLeft: theme.spacing.unit,
  },
  item: {
    opacity: 0.7,
  },
  triangle: {
    width: 0,
    height: 0,
    borderRight: '10px solid #f7f7f7',
    borderTop: '10px solid transparent',
    borderBottom: '10px solid transparent',
    position: 'absolute',
  },
  expanded: {
    left: '310px',
    transition: theme.transitions.create(['right', 'right'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  collapsed: {
    left: '62px',
    transition: theme.transitions.create(['left', 'left'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
});

const MainNav = (props) => (
  <>
    <List className={props.classes.list}>
      <img src={logo} alt="Logo" width="100" />
      <ListItem className={props.classes.profileBadge}>
        <Avatar className={props.classes.avatar} >
          AS
        </Avatar>
        <ListItemText
          classes={{ primary: props.classes.primary }}
          primary="Name"
          secondary="Email"
        />
      </ListItem>
      <Divider className={props.classes.divider} />
      <ListItem
        // style={{ display: 'none' }}
        button
        // onClick={() => props.history.push('/')}
      >
        <ListItemIcon className={props.classes.listItemIcon}>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText
          className="mainNav-text"
          primary="Dashboard"
        />
      </ListItem>
      <ListItem
        button
        onClick={() => props.history.push('/courses')}
        style={{ maxHeight: '48px', padding: '16px', marginTop: '16px' }}
        // className={isActive(props, 'courses') ? props.classes.active : props.classes.item}
      >
        <ListItemIcon className={props.classes.listItemIcon}>
          <LocalLibraryIcon />
        </ListItemIcon>
        <ListItemText
          classes={{ primary: props.classes.primary }}
          primary="texto"
          style={{ paddingLeft: '8px' }}
        />
      </ListItem>
      {/* {props.profile && props.profile.roles && props.profile.roles.admin && */}
        <ListItem
          button
          onClick={() => props.history.push('/cohorts')}
          style={{ maxHeight: '48px', padding: '16px' }}
          // className={isActive(props, 'cohorts') ? props.classes.active : props.classes.item}
        >
          <ListItemIcon className={props.classes.listItemIcon}>
            <GroupIcon />
          </ListItemIcon>
          <ListItemText
            classes={{ primary: props.classes.primary }}
            primary="Cohorts"
            style={{ paddingLeft: '8px' }}
          />
          {/* <div className={!isActive(props, 'cohorts') ? '' : isSelect(props)} /> */}
        </ListItem>
      <ListItem
        button
        onClick={() => props.history.push('/settings')}
        style={{ maxHeight: '48px', padding: '16px' }}
        // className={isActive(props, 'settings') ? props.classes.active : props.classes.item}
      >
        <ListItemIcon className={props.classes.listItemIcon}>
          <SettingsIcon />
        </ListItemIcon>
        <ListItemText
          classes={{ primary: props.classes.primary }}
          primary="text2"
          style={{ paddingLeft: '8px' }}
        />
        {/* <div className={!isActive(props, 'settings') ? '' : isSelect(props)} /> */}
      </ListItem>

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
          primary="EXIT"
          style={{ paddingLeft: '8px' }}
        />
      </ListItem>
    </List>
  </>
);


MainNav.propTypes = {
  // auth: PropTypes.shape({
  //   displayName: PropTypes.string,
  //   email: PropTypes.string.isRequired,
  // }).isRequired,
  // profile: PropTypes.shape({
  //   name: PropTypes.string,
  //   github: PropTypes.string,
  //   roles: PropTypes.shape({
  //     admin: PropTypes.bool,
  //   }),
  // }),
  classes: PropTypes.shape({
    list: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    profileBadge: PropTypes.string.isRequired,
    active: PropTypes.string.isRequired,
    bottom: PropTypes.string.isRequired,
    signoutBtn: PropTypes.string.isRequired,
    divider: PropTypes.string.isRequired,
    listItemIcon: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    primary: PropTypes.string.isRequired,
    item: PropTypes.string.isRequired,
    triangle: PropTypes.string.isRequired,
    collapsed: PropTypes.string.isRequired,
    expanded: PropTypes.string.isRequired,
  }).isRequired,
  // eslint-disable-next-line react/no-unused-prop-types
  // match: PropTypes.shape({
  //   path: PropTypes.string.isRequired,
  // }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  // firebase: PropTypes.shape({
  //   logout: PropTypes.func.isRequired,
  // }).isRequired,
};


export default withStyles(styles)(MainNav);
