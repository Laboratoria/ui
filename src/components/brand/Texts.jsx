import React from 'react';
import PropTypes from 'prop-types';
import { withTheme, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  texts: {
    // textAlign: 'left',
  },
 });

const Texts = (props) => {
  const { classes, theme } = props;
  return (
    <div className={classes.texts}>
      <Typography variant="display4" gutterBottom>
        H1 Our Talent
      </Typography>
      <Typography variant="body2" gutterBottom>
        {`${theme.typography.display4.fontSize} (desktop)`}
      </Typography>
      <Typography variant="display3" component="h2" gutterBottom>
        H2 Talent Fest
      </Typography>
      <Typography variant="body2" gutterBottom>
        {`${theme.typography.display3.fontSize} (desktop)`}
      </Typography>
      <Typography variant="display2" component="h3" gutterBottom>
        H3 Digital Leadership
      </Typography>
      <Typography variant="body2" gutterBottom>
        {`${theme.typography.display2.fontSize} (desktop)`}
      </Typography>
      <Typography variant="display1" component="h4" gutterBottom>
        H4 Corporate Training
      </Typography>
      <Typography variant="body2" gutterBottom>
        {`${theme.typography.display1.fontSize} (desktop)`}
      </Typography>
      <Typography variant="headline" component="h5" gutterBottom>
        H5 Mariana Costa
      </Typography>
      <Typography variant="body2" gutterBottom>
        {`${theme.typography.headline.fontSize} (desktop)`}
      </Typography>
      <Typography variant="title" component="h6" gutterBottom>
        H6 Más Información
      </Typography>
      <Typography variant="body2" gutterBottom>
        {`${theme.typography.title.fontSize} (desktop)`}
      </Typography>
      <Typography paragraph>
      {`
        Para los párrafos la tipografía será Open Sans, usando el tag p.
        El tamaño de la tipografía será: 20px (desktop), 16px (móvil)
      `}
      </Typography>
      <Typography paragraph>
      {`
        Lorem ipsum dolor sit amet, quas reque maiestatis nec ex, vis 
        suas tincidunt te, ignota verear virtute id est. Usu cu ullum 
        insolens. Est ne dignissim gloriatur, ne vim sanctus habemus 
        sententiae, id mel suas accumsan suscipiantur. Mel quaeque 
        tractatos te, per ea gloriatur voluptatum. Sed debitis partiendo 
        tincidunt cu.
      `}
      </Typography>
      <Typography paragraph>
      {`
        Ea eos facilisis consequat. Ne ius augue dolorem, ex primis 
        maluisset efficiendi vix, consul probatus pro id. Ius an stet 
        nonumes. An lorem sapientem vix, ut nostrud feugiat voluptua vis.
      `}
      </Typography>
      <Typography paragraph>
      {`
        Eos vide facilisi forensibus ei, prima nominavi consequat sed 
        id, at tritani debitis accumsan eum. Usu no mucius regione, 
        no his oratio diceret mentitum. Id reque homero nonumes vim, 
        vocent officiis eu vim. Ignota sensibus oportere has no, sed 
        albucius mentitum no, mel ne paulo principes disputationi. 
        Mazim veniam ne eos.
      `}
      </Typography>
    </div>
  );
};

Texts.propTypes = {
  classes: PropTypes.shape().isRequired,
  theme: PropTypes.object.isRequired,
};

export default withTheme()(withStyles(styles)(Texts));