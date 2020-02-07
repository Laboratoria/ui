import React from 'react';
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
      <SideBar />
    </>
  ));
