import React from 'react';
import Button from '@material-ui/core/Button';
import CardMediaGitHub from '../../components/Cards';
import { TypographyDisplay5 } from '../../components/Typography';

const graduated = {
  uid: 'JfStPqpcrfdh97RR2OUOUtmZqDl2',
  name: 'Janeth Quispe',
  github: 'jani-123',
  available: false,
  campus: 'aqp',
  recomendedAs: 'Front-end Developer',
  englishLevel: 'basic',
  lifeSkills: [
    'adaptability',
    'askForHelp',
    'conflictResolution',
    'problemSolving',
    'selfLearning',
    'teamWork',
  ],
  techSkills: [],
  role: 'student',
};

const GraduatedCard = () => {
  const action = (
    <Button variant="outlined" color="primary">
      Pre-seleccionar
    </Button>
  )
  return (
    <section>
      <TypographyDisplay5 component="h2" gutterBottom>
        Graduated Card
      </TypographyDisplay5>

      <CardMediaGitHub data={graduated} action={action} />
    </section>
  )
};

export default GraduatedCard;
