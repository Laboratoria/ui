import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import GroupIcon from '@material-ui/icons/Group';
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
        // eslint-disable-next-line no-console
        logout={() => console.log('Logout')}
        user={{ name: 'Nombre Apellidos', email: 'nombre.apellido@dominio.la' }}
      />
    </>
  ));
