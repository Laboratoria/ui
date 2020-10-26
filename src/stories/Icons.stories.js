import React from 'react';

import {
  greyIconGithub,
  greyIconLink,
  greyIconLinkedin,
  greyIconWebsite,
} from '../components';

export default {
  title: 'SVG/Icons',
  decorators: [Story => <div className="center-text icons-container"><Story /></div>],
};

export const Icons = () => (
  <>
    <img src={greyIconGithub} alt="Github" width="50" />
    <img src={greyIconLink} alt="Linkedin" width="50" />
    <img src={greyIconLinkedin} alt="Portfolio" width="50" />
    <img src={greyIconWebsite} alt="Website" width="50" />
  </>
);
