import React from 'react';

import {
  aqpSquareFlag,
  limSquareFlag,
  gdlSquareFlag,
  cdmxSquareFlag,
  sclSquareFlag,
  splSquareFlag,
  bogSquareFlag,
} from '../components';

export default {
  title: 'SVG/SquareFlags',
  decorators: [Story => <div className="center-text flags-container"><Story /></div>],
};

export const SquareFlags = () => (
  <>
    <img src={aqpSquareFlag} alt="Arequipa" width="50" />
    <img src={sclSquareFlag} alt="Santiago" width="50" />
    <img src={limSquareFlag} alt="Lima" width="50" />
    <img src={gdlSquareFlag} alt="Guadalajara" width="50" />
    <img src={cdmxSquareFlag} alt="Ciudad de México" width="50" />
    <img src={splSquareFlag} alt="São Paulo" width="50" />
    <img src={bogSquareFlag} alt="Bogotá" width="50" />
  </>
);
