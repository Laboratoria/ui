import React from 'react';
import PropTypes from 'prop-types';
import { withTheme, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { TypographyDisplay5 } from '../../components/Typography';

const styles = {
  'bold-text': {
    fontWeight: 600,
  },
  'font-bitter': {
    fontFamily: 'Bitter,serif',
  },
  'font-open-sans': {
    fontFamily: 'Open Sans',
  },
  'no-list-style': {
    listStyle: 'none',
  },
};

const Font = ({ classes, theme }) => (
  <section>
    <TypographyDisplay5 component="h2" gutterBottom>
      Typography
    </TypographyDisplay5>
    <Typography paragraph>
      A continuación una lista de los tipos de tipografía:
    </Typography>
    <Typography variant="display4" component="h3" gutterBottom>
      Font Types
    </Typography>
    <Typography paragraph>
      Hay 2 tipos de tipografías
    </Typography>
    <ul className={classes['font-open-sans']}>
      <li className={classes['font-bitter']}>Bitter</li>
      <li>Open Sans</li>
    </ul>
    <Typography paragraph>
      h1, h2, h3, h4, h5, h6 por default siempre serán
      <span className={classes['font-bitter']}>Bitter</span>
    </Typography>
    <ul className={classes['no-list-style']}>
      <li>
        <Typography component="h1" gutterBottom>
          H1 Our Talent
        </Typography>
        <Typography variant="body1" gutterBottom>
          {`${theme.typography.display6.fontSize} (desktop)`}
        </Typography>
      </li>
      <li>
        <TypographyDisplay5 component="h2" gutterBottom>
          H2 Talent Fest
        </TypographyDisplay5>
        <Typography variant="body1" gutterBottom>
          {`${theme.typography.display5.fontSize} (desktop)`}
        </Typography>
      </li>
      <li>
        <Typography variant="display4" component="h3" gutterBottom>
          H3 Digital Leadership
        </Typography>
        <Typography variant="body1" gutterBottom>
          {`${theme.typography.display4.fontSize} (desktop)`}
        </Typography>
      </li>
      <li>
        <Typography variant="display3" component="h4" gutterBottom>
          H4 Corporate Training
        </Typography>
        <Typography variant="body1" gutterBottom>
          {`${theme.typography.display3.fontSize} (desktop)`}
        </Typography>
      </li>
      <li>
        <Typography variant="display2" component="h5" gutterBottom>
          H5 Mariana Costa
        </Typography>
        <Typography variant="body1" gutterBottom>
          {`${theme.typography.display2.fontSize} (desktop)`}
        </Typography>
      </li>
      <li>
        <Typography variant="display1" component="h6" gutterBottom>
          H6 Más Información
        </Typography>
        <Typography variant="body1" gutterBottom>
          {`${theme.typography.display1.fontSize} (desktop)`}
        </Typography>
      </li>
    </ul>
    <Typography paragraph>
      Para los párrafos la tipografía será
      <span className={classes['bold-text']}>Open Sans</span>
    </Typography>
    <Typography paragraph>
      El tamaño de la tipografía será:
      <span className={classes['bold-text']}>20px (desktop)</span>
    </Typography>
    <Typography paragraph>
      Lorem ipsum dolor sit amet, quas reque maiestatis nec ex, vis suas tincidunt te,
      ignota verear virtute id est. Usu cu ullum insolens. Est ne dignissim gloriatur,
      ne vim sanctus habemus sententiae, id mel suas accumsan suscipiantur.
      Mel quaeque tractatos te, per ea gloriatur voluptatum. Sed debitis partiendo tincidunt cu.
    </Typography>
  </section>
);

Font.propTypes = {
  classes: PropTypes.shape().isRequired,
  theme: PropTypes.shape().isRequired,
};

export default withTheme()(withStyles(styles)(Font));
