import React from 'react';
import Link from '../../components/Links';
import { TypographyDisplay5 } from '../../components/Typography';

const Links = () => (
  <section id="links">
    <TypographyDisplay5 component="h2" gutterBottom>
      Links
    </TypographyDisplay5>
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
