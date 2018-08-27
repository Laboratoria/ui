import React from 'react';
import PropTypes from 'prop-types';
import { withTheme, withStyles } from '@material-ui/core/styles';
import CustomTypography from '../partials/CustomTypography';

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
    <CustomTypography variant="display5" component="h2" gutterBottom>
      Typography
    </CustomTypography>
    <CustomTypography paragraph>
      A continuación una lista de los tipos de tipografía:
    </CustomTypography>
    <CustomTypography variant="display4" component="h3" gutterBottom>
      Font Types
    </CustomTypography>
    <CustomTypography paragraph>
      Hay 2 tipos de tipografías
    </CustomTypography>
    <ul className={classes['font-open-sans']}>
      <li className={classes['font-bitter']}>Bitter</li>
      <li>Open Sans</li>
    </ul>
    <CustomTypography paragraph>
      h1, h2, h3, h4, h5, h6 por default siempre serán
      <span className={classes['font-bitter']}>Bitter</span>
    </CustomTypography>
    <ul className={classes['no-list-style']}>
      <li>
        <CustomTypography variant="display6" component="h1" gutterBottom>
          H1 Our Talent
        </CustomTypography>
        <CustomTypography variant="body1" gutterBottom>
          {`${theme.typography.display6.fontSize} (desktop)`}
        </CustomTypography>
      </li>
      <li>
        <CustomTypography variant="display5" component="h2" gutterBottom>
          H2 Talent Fest
        </CustomTypography>
        <CustomTypography variant="body1" gutterBottom>
          {`${theme.typography.display5.fontSize} (desktop)`}
        </CustomTypography>
      </li>
      <li>
        <CustomTypography variant="display4" component="h3" gutterBottom>
          H3 Digital Leadership
        </CustomTypography>
        <CustomTypography variant="body1" gutterBottom>
          {`${theme.typography.display4.fontSize} (desktop)`}
        </CustomTypography>
      </li>
      <li>
        <CustomTypography variant="display3" component="h4" gutterBottom>
          H4 Corporate Training
        </CustomTypography>
        <CustomTypography variant="body1" gutterBottom>
          {`${theme.typography.display3.fontSize} (desktop)`}
        </CustomTypography>
      </li>
      <li>
        <CustomTypography variant="display2" component="h5" gutterBottom>
          H5 Mariana Costa
        </CustomTypography>
        <CustomTypography variant="body1" gutterBottom>
          {`${theme.typography.display2.fontSize} (desktop)`}
        </CustomTypography>
      </li>
      <li>
        <CustomTypography variant="display1" component="h6" gutterBottom>
          H6 Más Información
        </CustomTypography>
        <CustomTypography variant="body1" gutterBottom>
          {`${theme.typography.display1.fontSize} (desktop)`}
        </CustomTypography>
      </li>
    </ul>
    <CustomTypography paragraph>
      Para los párrafos la tipografía será
      <span className={classes['bold-text']}>Open Sans</span>
    </CustomTypography>
    <CustomTypography paragraph>
      El tamaño de la tipografía será:
      <span className={classes['bold-text']}>20px (desktop)</span>
    </CustomTypography>
    <CustomTypography paragraph>
      Lorem ipsum dolor sit amet, quas reque maiestatis nec ex, vis suas tincidunt te,
      ignota verear virtute id est. Usu cu ullum insolens. Est ne dignissim gloriatur,
      ne vim sanctus habemus sententiae, id mel suas accumsan suscipiantur.
      Mel quaeque tractatos te, per ea gloriatur voluptatum. Sed debitis partiendo tincidunt cu.
    </CustomTypography>
  </section>
);

Font.propTypes = {
  classes: PropTypes.shape().isRequired,
  theme: PropTypes.shape().isRequired,
};

export default withTheme()(withStyles(styles)(Font));
