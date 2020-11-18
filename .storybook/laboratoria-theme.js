import { create } from '@storybook/theming/create'
import logo from './public/logo.png'
import Theme from '../src/components/Theme.jsx';

export default create({
  base: 'light',

  colorSecondary: Theme.palette.primary.main,
  barSelectedColor: Theme.palette.primary.main,
  brandTitle: 'Laboratoria',
  brandUrl: 'https://laboratoria.la/',
  brandImage: `/${logo}`,
})


