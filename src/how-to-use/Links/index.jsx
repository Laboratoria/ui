import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '../../components/Links';

const Links = () => (
  <section id="links">
    <Typography variant="h2" gutterBottom>
      Links
    </Typography>
    <Link href="#links">
      Default
    </Link>
    {' - '}
    <Link href="#links" variant="primary">
      Primary
    </Link>
    {' - '}
    <Link href="#links" variant="magenta">
      Magenta
    </Link>
    {' - '}
    <Link href="#links" variant="mint">
      Mint
    </Link>
  </section>
);

export default Links;
