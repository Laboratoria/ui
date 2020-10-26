import React from 'react';

import {
  isotype,
  isotypeYellow,
  isotypeWhite,
  logo,
  logoWhite,
} from '../components';

export default {
  title: 'SVG/Logos',
  decorators: [Story => <div className="logos-container"><Story /></div>],
};

export const Logos = () => (
  <>
    <img src={logo} alt="Logo" width="200" />
    <img src={logoWhite} alt="LogoWhite" width="200" />
    <img src={isotypeWhite} alt="Isotipo" width="100" />
    <img src={isotypeYellow} alt="IsotipoYellow" width="100" />
    <img src={isotype} alt="MenuLogo" width="100" />
  </>
);
