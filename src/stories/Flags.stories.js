import React from 'react';

import {
  aqpFlag,
  limFlag,
  gdlFlag,
  cdmxFlag,
  sclFlag,
  splFlag,
  bogFlag,
} from '../components';

export default {
  title: 'SVG/Flags',
  decorators: [Story => <div className="center-text flags-container"><Story /></div>],
};

export const Flags = () => (
  <>
    <img src={aqpFlag} alt="Arequipa" width="50" />
    <img src={sclFlag} alt="Santiago" width="50" />
    <img src={limFlag} alt="Lima" width="50" />
    <img src={gdlFlag} alt="Guadalajara" width="50" />
    <img src={cdmxFlag} alt="Ciudad de México" width="50" />
    <img src={splFlag} alt="São Paulo" width="50" />
    <img src={bogFlag} alt="Bogotá" width="50" />
  </>
);
