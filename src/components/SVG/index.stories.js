import React from 'react';
import { storiesOf } from '@storybook/react';

import {
  aqpFlag,
  limFlag,
  gdlFlag,
  cdmxFlag,
  sclFlag,
  splFlag,
  bogFlag,
} from './flags';

import {
  iconGithub,
  iconLinkedin,
  iconPortfolio,
} from './icons';

import {
  isotype,
  isotypeYellow,
  isotypeWhite,
  logo,
  logoWhite,
} from './logos';

storiesOf('SVG', module)
  .add('Flags', () => (
    <>
      <img src={aqpFlag} alt="Arequipa" width="50" />
      <br />
      <img src={sclFlag} alt="Santiago" width="50" />
      <br />
      <img src={limFlag} alt="Lima" width="50" />
      <br />
      <img src={gdlFlag} alt="Guadalajara" width="50" />
      <br />
      <img src={cdmxFlag} alt="Ciudad de México" width="50" />
      <br />
      <img src={splFlag} alt="São Paulo" width="50" />
      <br />
      <img src={bogFlag} alt="Bogotá" width="50" />
    </>
  ))
  .add('Logos', () => (
    <>
      <img src={logo} alt="Logo" width="200" />
      <br />
      <img src={logoWhite} alt="LogoWhite" width="200" />
      <br />
      <img src={isotypeWhite} alt="Isotipo" width="100" />
      <br />
      <img src={isotypeYellow} alt="IsotipoYellow" width="100" />
      <br />
      <img src={isotype} alt="MenuLogo" width="100" />
    </>
  ))
  .add('Icons', () => (
    <>
      <img src={iconGithub} alt="Github" width="50" />
      <br />
      <img src={iconLinkedin} alt="Linkedin" width="50" />
      <br />
      <img src={iconPortfolio} alt="Portfolio" width="50" />
    </>
  ));
