import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import GroupIcon from '@material-ui/icons/Group';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { storiesOf } from '@storybook/react';

import SideBarReadme from './README.md';

import SideBar from '.';

storiesOf('SideBar', module)
  .addParameters({
    readme: {
      content: SideBarReadme,
    },
  })
  .add('SideBar', () => (
    <>
      <SideBar
        items={[
          { id: 'home', text: 'Inicio', icon: <HomeIcon /> },
          { id: 'profiles', text: 'Perfiles', icon: <GroupIcon /> },
        ]}
        logoutItem={{
          id: 'logout',
          text: 'Cerrar Sesión',
          icon: <ExitToAppIcon />,
          // eslint-disable-next-line no-console
          onClick: () => console.log('Cerrar Sesión'),
        }}
        user={{ name: 'Nombre Apellidos', email: 'nombre.apellido@dominio.la' }}
      />
    </>
  ));
