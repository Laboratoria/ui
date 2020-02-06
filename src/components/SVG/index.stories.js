import React from 'react';
import { storiesOf } from '@storybook/react';

import {
  aqp,
  lim,
  gdl,
  cdmx,
  scl,
  spl,
} from './flags';

import { iconGithub, iconLinkedin, iconPortfolio } from './icons';
import { isotipo, logo } from './logos';

storiesOf('SVG', module)
  .add('Flags', () => (
    <>
      <img src={aqp} alt="Arequipa" width="50" />
      <br />
      <img src={scl} alt="Santiago" width="50" />
      <br />
      <img src={lim} alt="Lima" width="50" />
      <br />
      <img src={gdl} alt="Arequipa" width="50" />
      <br />
      <img src={cdmx} alt="Guadalajara" width="50" />
      <br />
      <img src={spl} alt="São Paulo" width="50" />
    </>
  ))
  .add('Logos', () => (
    <>
      <img src={logo} alt="Logo" width="100" />
      <br />
      <img src={isotipo} alt="Isotipo" width="50" />
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
