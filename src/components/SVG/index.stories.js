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
  .add('Icons', () => (
    <>
      <img src={iconGithub} alt="Arequipa" width="50" />
      <br />
      <img src={iconLinkedin} alt="Arequipa" width="50" />
      <br />
      <img src={iconPortfolio} alt="Arequipa" width="50" />
    </>
  ));
